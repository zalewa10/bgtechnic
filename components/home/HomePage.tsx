"use client";

import { useEffect, useState } from "react";
import { ContactSection } from "./ContactSection";
import { CredentialsSection } from "./CredentialsSection";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import {
  AboutSection,
  HeroSection,
  InstagramSection,
  ReviewsSection,
  ServicesSection,
  TickerSection,
} from "./sections";
import { ServicesTableSection } from "./ServicesTableSection";
import { TrackSection } from "./TrackSection";
import { useReveal } from "./useReveal";

function scrollToContact() {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

export function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useReveal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar
        scrolled={scrolled}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((prev) => !prev)}
        onCloseMenu={() => setMenuOpen(false)}
        onBookVisit={scrollToContact}
      />

      <HeroSection onBookVisit={scrollToContact} />
      <TickerSection />
      <AboutSection />
      <ServicesSection />
      <TrackSection />
      {/* <CredentialsSection /> */}
      {/* <ServicesTableSection /> */}
      <ReviewsSection />
      <InstagramSection />
      <ContactSection />
      <Footer />
    </>
  );
}
