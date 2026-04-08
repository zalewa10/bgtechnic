import { useEffect } from "react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import {
  ABOUT_FEATURES,
  IG_IMAGES,
  PRICING_PLANS,
  REVIEWS,
  SERVICES,
  TICKER_ITEMS,
} from "./data";

type ScrollProps = {
  onBookVisit: () => void;
};

export function HeroSection({ onBookVisit }: ScrollProps) {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-tag">Warsztat Motocyklowy · Wysogotowo</div>
      <h1 className="hero-h1">
         BGTechnic
         <br />
         <em>Motocykle</em>
      </h1>
      <p className="hero-sub">
        BGTechnic & BNTG Motocykle - profesjonalny serwis, diagnostyka i tuning
        motocykli każdej marki. Szparagowa 6, Wysogotowo.
      </p>
      <div className="hero-actions">
        <button className="btn-primary" onClick={onBookVisit}>
          Umów wizytę →
        </button>
        <a href="#services" className="btn-outline">
          Nasze usługi
        </a>
      </div>
      {/* <div className="hero-stats">
        <div className="stat">
          <div className="stat-num">10+</div>
          <div className="stat-label">Lat doświadczenia</div>
        </div>
        <div className="stat">
          <div className="stat-num">5★</div>
          <div className="stat-label">Google Reviews</div>
        </div>
        <div className="stat">
          <div className="stat-num">12</div>
          <div className="stat-label">Marek motocykli</div>
        </div>
      </div> */}
      <div className="hero-scroll">
        SCROLL
        <span />
      </div>
    </section>
  );
}

export function TickerSection() {
  const tickerDoubled = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="ticker">
      <div className="ticker-inner">
        {tickerDoubled.map((item, i) => (
          <span key={`${item}-${i}`}>
            {item} <span className="ticker-dot">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="about-img reveal">
        <div className="about-img-border" />
        <img
          src="/images/tor.jpg"
          alt="Warsztat BGTechnic"
        />
      </div>
      <div className="about-text reveal">
        <div className="section-label">O nas</div>
        <h2 className="dark">
          SERWIS Z 
          <br />
          <span className="accent">PASJI</span>
          
        </h2>
        <p className="spacer-top">
          BGTechnic Motocykle i BNTG Motocykle to jeden z wiodących warsztatów
          motocyklowych w regionie Wielkopolski. Działamy z pasją do dwóch kółek
          od ponad dekady.
        </p>
        <p>
          Nasz zespół doświadczonych mechaników specjalizuje się w naprawach,
          serwisach i diagnostyce motocykli wszystkich marek i typów - od
          sportowych przez turystyczne po cruisery.
        </p>
        <p>
          Znajdziesz nas przy <strong>ul. Szparagowej 6, Wysogotowo (62-081)</strong>,
          tuż przy Poznaniu. Zapraszamy!
        </p>
        <div className="about-features">
          {ABOUT_FEATURES.map((feature) => (
            <div key={feature} className="about-feat">
              {feature}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="services">
      <div className="services-header reveal">
        <div>
          <div className="section-label">Usługi</div>
          <h2>
            CO ROBIMY
            <br />
            <span className="accent">NAJLEPIEJ</span>
          </h2>
        </div>
        <p className="services-intro">
          Kompleksowa obsługa Twojego motocykla - od przeglądu po zaawansowany
          tuning.
        </p>
      </div>
      <div className="services-grid">
        {SERVICES.map((service, i) => (
          <div
            key={service.title}
            className="service-card reveal"
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <h3 className="light">{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}



export function ReviewsSection() {
  const doubled = [...REVIEWS, ...REVIEWS];

  return (
    <section id="reviews" className="reviews">
      <div className="reveal zero-margin-bottom">
        <div className="section-label">Opinie</div>
        <h2>
          KLIENCI
          <br />
          <span className="accent">MÓWIĄ</span>
        </h2>
        <div className="reviews-score">
          <div className="reviews-score-value">5.0</div>
          <div>
            <div className="reviews-stars">★★★★★</div>
            <div className="reviews-caption">Opinie z Google Maps</div>
          </div>
        </div>
      </div>
      <div className="reviews-overflow">
        <div className="reviews-track">
          {doubled.map((review, i) => (
            <div key={`${review.name}-${i}`} className="review-card">
              <div className="stars">{"★".repeat(review.stars)}</div>
              <p className="review-text">{review.text}</p>
              <div className="review-author">{review.name}</div>
              <div className="review-date">{review.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function InstagramSection() {
  useEffect(() => {
    NativeFancybox.bind('[data-fancybox="realizacje"]');

    return () => {
      NativeFancybox.unbind('[data-fancybox="realizacje"]');
      NativeFancybox.close();
    };
  }, []);

  return (
    <section id="instagram" className="instagram">
      <div className="ig-header reveal">
        <div>
          <div className="section-label">Jak działamy</div>
          <h2 className="dark">
            ZOBACZ JAK
            <br />
            <span className="accent">DZIAŁAMY</span>
          </h2>
        </div>
        <a
          href="https://www.instagram.com/bgtechnic_motocykle_poznan"
          target="_blank"
          rel="noopener noreferrer"
          className="ig-handle"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          @bgtechnic_motocykle_poznan
        </a>
      </div>
      <div className="ig-grid reveal">
        {IG_IMAGES.map((src, i) => (
          <a
            key={src}
            href={src}
            data-fancybox="realizacje"
            data-caption={`Realizacja ${i + 1}`}
            className="ig-item"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={`Instagram post ${i + 1}`} loading="lazy" />
            <div className="ig-item-overlay">📸</div>
          </a>
        ))}
      </div>
      <div className="center spacing-top">
        <a
          href="https://www.instagram.com/bgtechnic_motocykle_poznan"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline light"
        >
          Zobacz więcej na Instagramie →
        </a>
      </div>
    </section>
  );
}
