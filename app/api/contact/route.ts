import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  moto?: string;
  service?: string;
  date?: string;
  message?: string;
};

const phoneRegex = /^\+?[0-9]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Brak wymaganej zmiennej srodowiskowej: ${name}`);
  }
  return value;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const trimmedPhone = body.phone?.trim() || "";
    const trimmedEmail = body.email?.trim() || "";

    if (!body.name || !trimmedPhone || !trimmedEmail || !body.moto || !body.service) {
      return NextResponse.json(
        { error: "Uzupelnij wymagane pola formularza, w tym email." },
        { status: 400 },
      );
    }

    if (!phoneRegex.test(trimmedPhone)) {
      return NextResponse.json(
        { error: "Telefon moze zawierac tylko cyfry i ewentualnie znak +." },
        { status: 400 },
      );
    }

    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { error: "Podaj poprawny adres email." },
        { status: 400 },
      );
    }

    const smtpHost = requiredEnv("SMTP_HOST");
    const smtpPort = Number(process.env.SMTP_PORT || "587");
    const smtpUser = requiredEnv("SMTP_USER");
    const smtpPass = requiredEnv("SMTP_PASS");
    const smtpFromConfig = requiredEnv("SMTP_FROM");
    const smtpTo = requiredEnv("SMTP_TO");
    const smtpFrom =
      smtpFromConfig.includes("twojadomena.pl") || !smtpFromConfig.includes("@")
        ? smtpUser
        : smtpFromConfig;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.verify();

    const preferredDate = body.date || "nie podano";
    const emailText = [
      "Nowe zapytanie z formularza BGTechnic",
      "",
      `Imie i nazwisko: ${body.name}`,
      `Telefon: ${trimmedPhone}`,
      `Email: ${trimmedEmail}`,
      `Motocykl: ${body.moto}`,
      `Rodzaj uslugi: ${body.service}`,
      `Preferowany termin: ${preferredDate}`,
      "",
      "Opis problemu:",
      body.message || "brak",
    ].join("\n");

    const emailHtml = `
      <h2>Nowe zapytanie z formularza BGTechnic</h2>
      <p><strong>Imie i nazwisko:</strong> ${body.name}</p>
      <p><strong>Telefon:</strong> ${trimmedPhone}</p>
      <p><strong>Email:</strong> ${trimmedEmail}</p>
      <p><strong>Motocykl:</strong> ${body.moto}</p>
      <p><strong>Rodzaj uslugi:</strong> ${body.service}</p>
      <p><strong>Preferowany termin:</strong> ${preferredDate}</p>
      <p><strong>Opis problemu:</strong></p>
      <p>${(body.message || "brak").replace(/\n/g, "<br />")}</p>
    `;

    await transporter.sendMail({
      from: smtpFrom,
      to: smtpTo,
      replyTo: trimmedEmail,
      subject: `Nowe zapytanie - ${body.name}`,
      text: emailText,
      html: emailHtml,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Blad wysylki formularza:", error);

    const smtpError = error as {
      code?: string;
      message?: string;
    };

    if (smtpError.code === "EAUTH") {
      return NextResponse.json(
        { error: "Blad autoryzacji SMTP. Sprawdz SMTP_USER oraz SMTP_PASS." },
        { status: 500 },
      );
    }

    if (smtpError.code === "ESOCKET" || smtpError.code === "ETIMEDOUT") {
      return NextResponse.json(
        { error: "Brak polaczenia z serwerem SMTP. Sprawdz SMTP_HOST i SMTP_PORT." },
        { status: 500 },
      );
    }

    if (smtpError.code === "EENVELOPE") {
      return NextResponse.json(
        {
          error:
            "Serwer SMTP odrzucil nadawce/odbiorce. Sprawdz SMTP_FROM oraz SMTP_TO (adresy musza byc prawidlowe).",
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        error:
          "Nie udalo sie wyslac formularza. Sprawdz konfiguracje SMTP w pliku .env i sprobuj ponownie.",
      },
      { status: 500 },
    );
  }
}
