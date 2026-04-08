import { FormEvent, useState } from "react";
import { BRANDS, SERVICE_OPTIONS } from "./data";

type ContactSectionProps = {
  onBookVisit?: () => void;
};

type ContactFormState = {
  name: string;
  phone: string;
  email: string;
  moto: string;
  service: string;
  date: string;
  message: string;
};

const initialFormState: ContactFormState = {
  name: "",
  phone: "",
  email: "",
  moto: "",
  service: "",
  date: "",
  message: "",
};

export function ContactSection({}: ContactSectionProps) {
  const [formSent, setFormSent] = useState(false);
  const [form, setForm] = useState<ContactFormState>(initialFormState);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <section id="contact" className="contact">
      <div className="reveal">
        <div className="section-label">Kontakt</div>
        <h2>
          UMÓW
          <br />
          <span className="accent">WIZYTĘ</span>
        </h2>
        <p className="section-copy">
          Wypełnij formularz, a odezwiemy się do Ciebie jak najszybciej aby
          potwierdzić termin.
        </p>
      </div>
      <div className="contact-grid">
        <div className="contact-info reveal">
          <div className="contact-detail">
            <div className="contact-icon">📍</div>
            <div className="contact-detail-text">
              <p className="accent">Adres warsztatu</p>
              <p>
                ul. Szparagowa 6, Wysogotowo
                <br />
                62-081 (k. Poznania)
              </p>
            </div>
          </div>
          <div className="contact-detail">
            <div className="contact-icon">📱</div>
            <div className="contact-detail-text">
              <p className="accent">Telefon</p>
              <a href="tel:533533339">533 533 339</a>
            </div>
          </div>
          <div className="contact-detail">
            <div className="contact-icon">🕐</div>
            <div className="contact-detail-text">
              <p className="accent">Godziny otwarcia</p>
              <p>
                Pon-Pt: 8:00-18:00
                <br />
                Sobota: 8:00-14:00
              </p>
            </div>
          </div>
          <div className="brands">
            <p>Obsługujemy marki</p>
            <div className="brand-tags">
              {BRANDS.map((brand) => (
                <div key={brand} className="brand-tag">
                  {brand}
                </div>
              ))}
            </div>
          </div>
          <div className="map-wrap spacing-top">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3074.153072044162!2d16.787469599999998!3d52.407244999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47042b54890b6e35%3A0x1fb6f61d26dfef9b!2sBGTechnic%20Motocykle%20-%20Pozna%C5%84!5e1!3m2!1spl!2spl!4v1775666411024!5m2!1spl!2spl"
              title="Mapa BGTechnic"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>

        <div className="reveal delayed">
          {formSent ? (
            <div className="form-success">
              ✓ Dziękujemy! Skontaktujemy się z Tobą wkrótce.
              <br />
              <span className="success-help">
                Możesz też zadzwonić: 533 533 339
              </span>
            </div>
          ) : (
            <form className="quote-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Imię i nazwisko *</label>
                  <input
                    type="text"
                    required
                    placeholder="Jan Kowalski"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Telefon *</label>
                  <input
                    type="tel"
                    required
                    placeholder="500 600 700"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="jan@email.pl"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Motocykl (marka, model, rok) *</label>
                <input
                  type="text"
                  required
                  placeholder="np. Honda CB500F 2020"
                  value={form.moto}
                  onChange={(e) => setForm({ ...form, moto: e.target.value })}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Rodzaj usługi *</label>
                  <select
                    required
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                  >
                    <option value="">Wybierz...</option>
                    {SERVICE_OPTIONS.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>Preferowany termin</label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Opis problemu / uwagi</label>
                <textarea
                  placeholder="Opisz krótko problem lub co chcesz zrobić..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              <button type="submit" className="form-submit">
                Wyślij zapytanie →
              </button>
              <p className="form-footnote">
                Możesz też zadzwonić bezpośrednio:
                <a href="tel:533533339"> 533 533 339</a>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
