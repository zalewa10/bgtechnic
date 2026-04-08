"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TRACK_EXPERIENCE, TRACK_IMAGES } from "./data";
import Image from "next/image";

export function TrackSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TRACK_IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? TRACK_IMAGES.length - 1 : prev - 1,
    );
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % TRACK_IMAGES.length);
  };

  return (
    <section id="track" className="track-section">
      <div className="track-bg" />
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="section-label">Prędkość mamy we krwi</div>
          <h2>
            DOŚWIADCZENIE <br />
            NA <span className="accent">TORZE</span>
          </h2>
          <p className="section-copy">{TRACK_EXPERIENCE.description}</p>
        </motion.div>

        <div className="track-carousel reveal">
          <div className="track-carousel-frame">
            <Image
              key={TRACK_IMAGES[activeIndex].src}
              src={TRACK_IMAGES[activeIndex].src}
              width={1200}
              height={700}
              alt={TRACK_IMAGES[activeIndex].alt}
              className="track-image"
              priority
            />
          </div>

          <button
            type="button"
            className="track-carousel-btn track-carousel-btn-prev"
            onClick={prevSlide}
            aria-label="Poprzednie zdjęcie"
          >
            ‹
          </button>
          <button
            type="button"
            className="track-carousel-btn track-carousel-btn-next"
            onClick={nextSlide}
            aria-label="Następne zdjęcie"
          >
            ›
          </button>

          <div className="track-carousel-dots" role="tablist" aria-label="Wybór zdjęcia torowego">
            {TRACK_IMAGES.map((image, index) => (
              <button
                key={image.src}
                type="button"
                className={`track-carousel-dot ${
                  index === activeIndex ? "is-active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Pokaż zdjęcie ${index + 1}`}
                aria-selected={index === activeIndex}
                role="tab"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
