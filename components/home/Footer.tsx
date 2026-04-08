import Image from "next/image";

export function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <div className="footer-logo">
            <Image src="/images/logo3.png" alt="BGTechnic Logo" width={150} height={50} />
           
          </div>
          <div className="footer-tagline">Motocykle · Serwis · Warsztat</div>
          <div className="footer-social-wrap">
            <a
              href="https://www.instagram.com/bgtechnic_motocykle_poznan"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              IG
            </a>
            <a
              href="https://www.facebook.com/BGTechnic"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              FB
            </a>
            <a href="tel:533533339" className="social-link">
              📞
            </a>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h4>Usługi</h4>
            <ul>
              <li>
                <a href="#services">Diagnostyka i naprawy</a>
              </li>
              <li>
                <a href="#services">Serwis i przeglądy</a>
              </li>
              <li>
                <a href="#services">Wymiana opon</a>
              </li>
              <li>
                <a href="#services">Układ hamulcowy</a>
              </li>
              <li>
                <a href="#services">Elektryka</a>
              </li>
              <li>
                <a href="#services">Tuning</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Kontakt</h4>
            <ul>
              <li>
                <a href="tel:533533339">533 533 339</a>
              </li>
              <li>
                <a href="#contact">ul. Szparagowa 6</a>
              </li>
              <li>
                <a href="#contact">Wysogotowo 62-081</a>
              </li>
              <li>
                <a href="#contact">Pon-Pt 8-18</a>
              </li>
              <li>
                <a href="#contact">Sob 8-14</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © 2026 BGTechnic Motocykle & BNTG Motocykle. Wszelkie prawa
          zastrzeżone.
        </p>
        <p className="accent">Warsztat motocyklowy · Wysogotowo</p>
      </div>
    </footer>
  );
}
