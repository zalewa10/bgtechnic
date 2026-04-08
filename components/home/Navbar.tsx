import { NAV_LINKS } from "./data";
import Image from "next/image";

type NavbarProps = {
  scrolled: boolean;
  menuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
  onBookVisit: () => void;
};


export function Navbar({
  scrolled,
  menuOpen,
  onToggleMenu,
  onCloseMenu,
  onBookVisit,
}: NavbarProps) {
  return (
    <>
      <nav className={`nav ${scrolled ? "scrolled" : "scrolled"}`}>
        <div className="nav-logo">
                  <Image src="/images/logo3.png" alt="BGTechnic Logo" width={120} height={50} />
      
        </div>
        <ul className="nav-links">
          {NAV_LINKS.map(([label, href]) => (
            <li key={label}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
        <button className="nav-cta" onClick={onBookVisit}>
          Umów wizytę
        </button>
        <button className="hamburger" onClick={onToggleMenu}>
          <span />
          <span />
          <span />
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          {NAV_LINKS.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="mobile-menu-link"
              onClick={onCloseMenu}
            >
              {label}
            </a>
          ))}
          <button
            className="btn-primary mobile-menu-cta"
            onClick={() => {
              onCloseMenu();
              onBookVisit();
            }}
          >
            Umów wizytę
          </button>
        </div>
      )}
    </>
  );
}
