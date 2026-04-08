"use client";

import { motion } from "framer-motion";
import { CREDENTIALS } from "./data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function CredentialsSection() {
  return (
    <section id="credentials" className="credentials-section">
      <motion.div
        className="section-header reveal"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="section-label">Dowody Kompetencji</div>
        <h2>
          CERTYFIKATY &<br />
          <span className="accent">NAGRODY</span>
        </h2>
        <p className="section-copy">
          Zespół BGTechnic to zespół certyfikowanych specjalistów z bogatym
          doświadczeniem i wieloma uznaniami w branży motocyklowej.
        </p>
      </motion.div>

      <motion.div
        className="credentials-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {CREDENTIALS.map((cred, i) => (
          <motion.div
            key={i}
            className="credential-card"
            variants={cardVariants}
            whileHover={{
              y: -8,
              boxShadow: "0 20px 40px rgba(255, 107, 0, 0.2)",
            }}
          >
            <div className="credential-icon">{cred.icon}</div>
            <h3>{cred.title}</h3>
            <p className="credential-issuer">{cred.issuer}</p>
            <p className="credential-category">{cred.category}</p>
            <span className="credential-year">{cred.year}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
