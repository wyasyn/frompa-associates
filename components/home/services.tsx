"use client";

import { motion } from "framer-motion";
import {
  LightbulbIcon,
  CalculatorIcon,
  ShieldCheckIcon,
  BarChart2Icon,
  GlobeIcon,
  LeafIcon,
} from "lucide-react";
import { ServiceCard } from "./service-card";
import Link from "next/link";

const SERVICES = [
  {
    title: "Strategic Advisory",
    description:
      "CFO-level guidance, financial modeling, and tailored strategies to drive growth and resilience.",
    link: "/advisory",
    Icon: LightbulbIcon,
  },
  {
    title: "Accounting & Reporting",
    description:
      "Real-time bookkeeping, financial reporting, and ERP integrations designed for operational clarity.",
    link: "/accounting",
    Icon: CalculatorIcon,
  },
  {
    title: "Audit & Risk Assurance",
    description:
      "Independent, partner-led audits that enhance financial credibility and stakeholder trust.",
    link: "/audit-and-assurance",
    Icon: ShieldCheckIcon,
  },
  {
    title: "Tax Strategy & Compliance",
    description:
      "Optimized tax planning and compliance services to reduce risk and improve cash flow.",
    link: "/corporate-tax",
    Icon: BarChart2Icon,
  },
  {
    title: "Trade Finance Advisory",
    description:
      "Letters of Credit, bank guarantees, and structured trade solutions to power your cross-border ambitions.",
    link: "/trade-finance",
    Icon: GlobeIcon,
  },
  {
    title: "ESG Strategy & Reporting",
    description:
      "Robust ESG frameworks and transparent disclosures aligned with investor and regulatory standards.",
    link: "/audit-and-assurance#esg",
    Icon: LeafIcon,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 bg-secondary">
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
          className="mx-auto mt-4 max-w-[55ch] text-muted-foreground"
        >
          We provide strategic clarity and financial confidence across every
          stage of your organization’s journey.
        </motion.p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              className="transition-transform hover:-translate-y-1 duration-300"
            >
              <ServiceCard {...svc} />
            </motion.div>
          ))}
        </div>

        <p className="mt-12 text-sm text-muted-foreground">
          Need something custom?{" "}
          <Link
            href="/contact"
            className="text-primary underline hover:text-primary/80"
          >
            Let’s talk solutions.
          </Link>
        </p>
      </div>
    </section>
  );
}
