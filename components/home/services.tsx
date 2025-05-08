"use client";

import { motion } from "framer-motion";
import {
  LightbulbIcon,
  CalculatorIcon,
  CheckCircleIcon,
  BarChartIcon,
  GlobeIcon,
  LeafIcon,
} from "lucide-react";
import { ServiceCard } from "./service-card";

const SERVICES = [
  {
    title: "Advisory",
    description:
      "Strategic CFO guidance, financial modelling and growth roadmaps that align with your vision.",
    link: "/advisory",
    Icon: LightbulbIcon,
  },
  {
    title: "Accounting",
    description:
      "Accurate bookkeeping, real‑time reporting and seamless ERP integrations.",
    link: "/accounting",
    Icon: CalculatorIcon,
  },
  {
    title: "Audit & Assurance",
    description:
      "Rigorous audits to validate your financials and strengthen stakeholder confidence.",
    link: "/audit-and-assurance",
    Icon: CheckCircleIcon,
  },
  {
    title: "Corporate Tax",
    description:
      "Holistic tax planning, compliance and structuring for optimal liability management.",
    link: "/corporate-tax",
    Icon: BarChartIcon,
  },
  {
    title: "Trade Finance",
    description:
      "Letters of Credit, Guarantees and bespoke solutions to fuel your cross‑border trade.",
    link: "/trade-finance",
    Icon: GlobeIcon,
  },
  {
    title: "ESG Reporting",
    description:
      "Robust ESG frameworks and disclosures to meet investor and regulatory standards.",
    link: "/audit-and-assurance#esg",
    Icon: LeafIcon,
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full py-12 md:py-24 lg:py-40 bg-secondary "
    >
      <div className="container px-4 md:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-medium mb-4 md:mb-8 sm:text-4xl md:text-5xl"
        >
          Our Expertise
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto mt-4 max-w-[55ch]"
        >
          Delivering clarity and strategic insights across every facet of your
          financial journey.
        </motion.p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
            >
              <ServiceCard {...svc} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
