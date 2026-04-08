export const NAV_LINKS = [
  ["O nas", "#about"],
  ["Usługi", "#services"],
  ["Tor", "#track"],
  ["Opinie", "#reviews"],
  ["Jak działamy", "#instagram"],
  ["Kontakt", "#contact"],
] as const;

export const REVIEWS = [
  {
    name: "Mateusz",
    date: "Opinia Google",
    text: "Najlepszy mechanik w Polsce jeżeli chodzi o motocykle sportowe (innych nie posiadam). Serwisuję u Kuby wszystkie swoje motocykle. Pochodzę z Olsztyna, a pracuję w Niemczech, jednak ta odległość nie stanowi najmniejszego problemu. Gość jest konkretny, elastyczny oraz bardzo pomocny i koleżeński. Godziny otwarcia serwisu są tak naprawdę mega elastyczne, bo moje Kawasaki H2 serwisował w weekendy oraz w późnych godzinach wieczornych. Kwestia dogadania. Rada dla wszystkich przyszłych klientów: warto wydać kilkaset zł więcej za konkretną usługę, niż przyciąć na 2-3 stówki i jechać do kogoś, kto ma warsztat za stodołą i wracać na poprawki.",
    stars: 5,
  },
  {
    name: "Patryk",
    date: "Opinia Google",
    text: "Profesjonalny mechanik, świetny kontakt. Każda usługa wykonana sprawnie, a co najważniejsze rzetelnie. Korzystałem już 3 razy i na pewno wrócę. Pozdro.",
    stars: 5,
  },
  {
    name: "Antek",
    date: "Opinia Google",
    text: "Solidny warsztat, profesjonalna obsługa i płynny kontakt. Choć tym razem był to regularny przegląd, to nie będę się wahał, gdy pojawi się rzeczywista potrzeba serwisu. Serdecznie polecam.",
    stars: 5,
  },
  {
    name: "Marta",
    date: "Opinia Google",
    text: "Z czystym sumieniem polecam BGTechnic Motocykle każdemu, kto jeszcze się zastanawia nad wyborem serwisu. Nasza współpraca zaczęła się w 2018 roku od pomocy przy wyborze mojego motocykla i trwa do dziś. Od samego początku powierzam im mój motocykl i ani razu się nie zawiodłam. Serwis jest zawsze na najwyższym poziomie: profesjonalnie, rzetelnie i z pełnym zaangażowaniem. Mam do nich 100% zaufania i szczerze nie wyobrażam sobie, żeby ktoś inny zajmował się moim motocyklem. Jeśli szukasz miejsca, gdzie Twój motocykl będzie naprawdę w dobrych rękach - to właśnie tutaj. Polecam z całego serca!",
    stars: 5,
  },
  {
    name: "Mateusz",
    date: "Opinia Google",
    text: "Robiłem tutaj sporo rzeczy przy S1000RR i za każdym razem wszystko dobrze zrobione i na czas. Motocykl przy odbiorze zawsze wyczyszczony, wygląda jak nowy.",
    stars: 5,
  },
  {
    name: "Dawid",
    date: "Opinia Google",
    text: "Doradztwo jak i sama naprawa przebiegła wzorowo. Zostało mi wszystko wytłumaczone, jak dbać o motor oraz co zostało w nim zrobione. Na duży plus, co dotychczas mnie nigdy nie spotkało, to opieka nad klientem po usłudze. Zadzwonią do Państwa i spytają, jak motor się sprawuje. Gorąco polecam.",
    stars: 5,
  },
  {
    name: "Anna",
    date: "Opinia Google",
    text: "Wspaniała obsługa, zaopiekowana maszyna. Pan Jakub dba o motocykle jak o swoje dzieci. Ja i moja Kawcia jesteśmy zadowolone. Polecam bardzo!",
    stars: 5,
  },
  {
    name: "Piotr",
    date: "Opinia Google",
    text: "Warsztat spełnia wszystkie, a wręcz przerasta oczekiwania. Dwa razy przychodziłem z problemem i za każdym razem problem rozwiązany był szybciej niż oczekiwałem, wzorowo, a do tego z poprawionymi drobiazgami, o których sam zapomniałem lub do których się przyzwyczaiłem.",
    stars: 5,
  },
  {
    name: "Łukasz",
    date: "Opinia Google",
    text: "Nareszcie trafiłem do warsztatu z prawdziwego zdarzenia. Przygotowanie moto do sezonu, pełen serwis, dobór i wymiana opon oraz dobór i wymiana kierownicy. Bieżący kontakt, wyjaśnienie wszystkiego na najwyższym poziomie. No i rzecz chyba najbardziej pozytywnie zaskakująca: dzień po odebraniu był kontakt z warsztatu jak się sprawuje sprzęt i czy wszystko jest OK. Mega pozytywny customer experience. Polecam!",
    stars: 5,
  },
] as const;

export const SERVICES = [
  {
    title: "Przeglądy i naprawy pogwarancyjne",
    desc: "Kompleksowa obsługa motocykli po okresie gwarancyjnym wraz z planem dalszego serwisu.",
  },
  {
    title: "Przeglądy sezonowe",
    desc: "Pełne przygotowanie motocykla do jazdy po okresie zimowym, kontrola kluczowych układów i materiałów eksploatacyjnych.",
  },
  {
    title: "Przeglądy przedzakupowe",
    desc: "Ocena stanu technicznego motocykla przed zakupem wraz z raportem i rekomendacjami.",
  },
  {
    title: "Przeglądy i naprawy zawieszenia",
    desc: "Serwis amortyzatorów, lagi, uszczelniaczy i ustawień zawieszenia pod styl jazdy.",
  },
  {
    title: "Przeglądy i naprawy układu elektrycznego",
    desc: "Diagnostyka i naprawa instalacji, ładowania, rozrusznika, oświetlenia i osprzętu elektrycznego.",
  },
  {
    title: "Diagnostyka komputerowa",
    desc: "Profesjonalny odczyt błędów ECU, analiza parametrów pracy i precyzyjna lokalizacja usterek.",
  },
  {
    title: "Przeglądy i naprawy układu hamulcowego",
    desc: "Serwis zacisków, przewodów, pompy, tarcz i klocków oraz odpowietrzanie układów ABS i klasycznych.",
  },
  {
    title: "Przeglądy i naprawy kół",
    desc: "Kontrola i serwis łożysk, obręczy, szprych, opon oraz wyważanie kół.",
  },
  {
    title: "Przeglądy i naprawy układu napędowego",
    desc: "Serwis napędu łańcuchowego i kardana, regulacja oraz wymiana zużytych elementów.",
  },
  {
    title: "Przeglądy i naprawy łańcucha rozrządu",
    desc: "Weryfikacja zużycia, ustawienie rozrządu i wymiana elementów zgodnie ze specyfikacją producenta.",
  },
  {
    title: "Regulacje zaworów",
    desc: "Dokładna kontrola luzów i regulacja zaworowa dla stabilnej i bezpiecznej pracy silnika.",
  },
  {
    title: "Naprawy silnika, skrzyni biegów i układu paliwowego",
    desc: "Od bieżących napraw po złożone remonty jednostki napędowej oraz układu zasilania.",
  },
  {
    title: "Naprawy powypadkowe motocykli",
    desc: "Przywracanie sprawności technicznej i geometrii po kolizjach oraz pełna kontrola bezpieczeństwa.",
  },
  {
    title: "Montaż części, akcesoriów i dodatkowych zabezpieczeń",
    desc: "Montaż wyposażenia, alarmów, crash padów, kufrów i akcesoriów pod potrzeby użytkownika.",
  },
  {
    title: "Przygotowanie motocykli do wyścigów motocyklowych",
    desc: "Przygotowanie techniczne pod track day i wyścigi: setup, serwis i kontrola pod obciążenia torowe.",
  },
] as const;

export const BRANDS = [
  "Honda",
  "Yamaha",
  "Kawasaki",
  "Suzuki",
  "BMW",
  "Ducati",
  "KTM",
  "Husqvarna",
  "Triumph",
  "Harley-Davidson",
  "Aprilia",
  "i wiele innych marek",
] as const;

export const IG_IMAGES = [
  "/images/realizacja1.jpg",
  "/images/realizacja2.jpg",
  "/images/realizacja3.jpg",
  "/images/realizacja4.jpg",
  "/images/realizacja5.jpg",
  "/images/realizacja6.jpg",
  "/images/realizacja7.jpg",
  "/images/realizacja8.jpg",
] as const;

export const TICKER_ITEMS = [
  "Naprawa motocykli",
  "Serwis i przeglądy",
  "Wymiana opon",
  "Diagnostyka komputerowa",
  "Tuning ECU",
  "Elektryka motocyklowa",
  "Układ hamulcowy",
  "Regulacje zaworów",
  "Przygotowanie do sezonu",
  "Przygotowanie do toru"
] as const;

type PricingPlan = {
  name: string;
  price: number;
  unit: string;
  note: string;
  items: string[];
  featured?: boolean;
  tag?: string;
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Przegląd podstawowy",
    price: 200,
    unit: "zł",
    note: "Czas realizacji: 1-2 godz.",
    items: [
      "Kontrola układu hamulcowego",
      "Kontrola oświetlenia",
      "Sprawdzenie płynów",
      "Regulacja łańcucha",
      "Raport stanu technicznego",
    ],
  },
  {
    name: "Serwis kompletny",
    price: 450,
    unit: "zł",
    note: "Czas realizacji: 3-5 godz.",
    featured: true,
    tag: "Najpopularniejszy",
    items: [
      "Wymiana oleju i filtrów",
      "Pełna diagnostyka komputerowa",
      "Synchronizacja wtrysku/gaźnika",
      "Kontrola i regulacja zaworów",
      "Wszystko z przeglądu podstawowego",
    ],
  },
  {
    name: "Diagnostyka i naprawa",
    price: 0,
    unit: "wycena",
    note: "Indywidualna wycena po oględzinach",
    items: [
      "Pełna diagnostyka usterki",
      "Kosztorys przed naprawą",
      "Oryginalne lub zamienne części",
      "Gwarancja na wykonane prace",
      "Odbiór i dowóz po uzgodnieniu",
    ],
  },
] as const;

export const ABOUT_FEATURES = [
  "Pełna diagnostyka komputerowa",
  "Uczciwe i transparentne ceny",
  "Szybki czas realizacji",
  "Części oryginalne i zamienniki",
  "Serwis wszystkich marek",
  "Pasjonaci motocykli",
] as const;

export const SERVICE_OPTIONS = [
  "Przegląd / serwis",
  "Naprawa",
  "Diagnostyka",
  "Wymiana opon",
  "Układ hamulcowy",
  "Elektryka",
  "Tuning / chiptuning",
  "Inne",
] as const;

export const TRACK_EXPERIENCE = {
  years: "15+",
  races: "200+",
  trophies: "45+",
  description: "Zespół BGTechnic z dumą dzieli się doświadczeniem nabytym na profesjonalnych torach wyścigowych.",
  highlights: [
    { label: "Lat doświadczenia wyścigowego", value: "15+" },
    { label: "Startów na torze", value: "200+" },
    { label: "Zdobytych trofeów", value: "45+" },
    { label: "Partnerów wyścigowych", value: "30+" },
  ],
} as const;

export const TRACK_IMAGES = [
  {
    src: "/images/tor.jpg",
    alt: "tor",
  },
  {
    src: "/images/tor2.jpg",
    alt: "tor2",
  },
  {
    src: "/images/tor3.jpg",
    alt: "tor3",
  },
  {
    src: "/images/tor4.jpg",
    alt: "tor4",
  },
  {
    src: "/images/tor5.jpg",
    alt: "tor5",
  },
  {
    src: "/images/tor6.jpg",
    alt: "tor6",
  },
  {
    src: "/images/tor7.jpg",
    alt: "tor7",
  },
] as const;

export const CREDENTIALS = [
  {
    icon: "🏆",
    title: "Certyfikat Mechanika Motocyklowego",
    issuer: "Polska Federacja Motoryzacji",
    year: 2018,
    category: "Serwis i naprawa",
  },
  {
    icon: "🎓",
    title: "Kurs Diagnostyki Elektronicznej",
    issuer: "Continental Automotive",
    year: 2021,
    category: "Diagnozowanie",
  },
  {
    icon: "⭐",
    title: "Rekomendacja Producenta",
    issuer: "Honda Polska",
    year: 2022,
    category: "Autoryzacja serwisu",
  },
  {
    icon: "🏅",
    title: "Nagroda Serwisu Roku",
    issuer: "MotoBike Magazine",
    year: 2023,
    category: "Najlepszy serwis regionu",
  },
  {
    icon: "🔧",
    title: "Specjalista Tuning ECU",
    issuer: "Dimsport Academy",
    year: 2022,
    category: "Chiptuning",
  },
  {
    icon: "🛞",
    title: "Master Technician Tires",
    issuer: "Pirelli Professional",
    year: 2020,
    category: "Oponiarstwo",
  },
] as const;

type ServiceRow = {
  service: string;
  basic: string;
  standard: string;
  advanced: string;
  currency: string;
};

export const SERVICES_PRICING_TABLE: ServiceRow[] = [
  {
    service: "Przegląd diagnostyczny",
    basic: "50",
    standard: "100",
    advanced: "150",
    currency: "zł",
  },
  {
    service: "Wymiana oleju i filtrów",
    basic: "120",
    standard: "180",
    advanced: "250",
    currency: "zł",
  },
  {
    service: "Kontrola i regulacja łańcucha",
    basic: "30",
    standard: "60",
    advanced: "100",
    currency: "zł",
  },
  {
    service: "Wymiana świec zapłonowych",
    basic: "40",
    standard: "80",
    advanced: "150",
    currency: "zł",
  },
  {
    service: "Kontrola systemu hamulcowego",
    basic: "80",
    standard: "150",
    advanced: "300",
    currency: "zł",
  },
  {
    service: "Wymiana klocków hamulcowych",
    basic: "200",
    standard: "350",
    advanced: "600",
    currency: "zł",
  },
  {
    service: "Synchronizacja gaźnika/wtrysku",
    basic: "150",
    standard: "250",
    advanced: "450",
    currency: "zł",
  },
  {
    service: "Serwis akumulatora",
    basic: "60",
    standard: "120",
    advanced: "250",
    currency: "zł",
  },
  {
    service: "Tuning/Chiptuning ECU",
    basic: "500",
    standard: "1200",
    advanced: "2500",
    currency: "zł",
  },
  {
    service: "Pełna diagnostyka komputerowa",
    basic: "200",
    standard: "400",
    advanced: "800",
    currency: "zł",
  },
] as const;
