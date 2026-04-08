"use client";

import { motion } from "framer-motion";
import { SERVICES_PRICING_TABLE } from "./data";

const tableVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.2,
    },
  },
};

const rowVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
};

export function ServicesTableSection() {
  return (
    <section id="pricing" className="services-table-section">
      <motion.div
        className="reveal"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="section-label">Cennik</div>
        <h2>
          KOMPLEKSOWA<br />
          <span className="accent">TARYFA USŁUG</span>
        </h2>
        <p className="section-copy">
          Przejrzysta taryfa wszystkich usług. Ceny mogą się różnić w zależności
          od modelu, stanu pojazdu i lokalizacji warsztatu. Skontaktuj się po
          dokładną wycenę.
        </p>
      </motion.div>

      <motion.div
        className="table-wrapper"
        variants={tableVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <table className="services-table">
          <thead>
            <tr>
              <th>Usługa</th>
              <th>Pakiet Podstawowy</th>
              <th>Pakiet Standard</th>
              <th>Pakiet Premium</th>
            </tr>
          </thead>
          <tbody>
            {SERVICES_PRICING_TABLE.map((row, i) => (
              <motion.tr key={i} variants={rowVariants}>
                <td className="service-name">{row.service}</td>
                <td className="price">{row.basic}</td>
                <td className="price highlight">{row.standard}</td>
                <td className="price">{row.advanced}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      <motion.div
        className="table-footer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p>
          💡 <strong>Pakiet Standard</strong> jest najchętniej wybierany przez naszych klientów
        </p>
        <p>
          🚀 Oferujemy <strong>bezpłatną diagnostykę wstępną</strong> dla każdego nowego klienta
        </p>
      </motion.div>
    </section>
  );
}
