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
    gradient: "from-amber-500/20 to-yellow-500/20",
    iconColor: "text-amber-600",
  },
  {
    title: "Accounting & Reporting",
    description:
      "Real-time bookkeeping, financial reporting, and ERP integrations designed for operational clarity.",
    link: "/accounting",
    Icon: CalculatorIcon,
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-600",
  },
  {
    title: "Audit & Risk Assurance",
    description:
      "Independent, partner-led audits that enhance financial credibility and stakeholder trust.",
    link: "/audit-and-assurance",
    Icon: ShieldCheckIcon,
    gradient: "from-emerald-500/20 to-green-500/20",
    iconColor: "text-emerald-600",
  },
  {
    title: "Tax Strategy & Compliance",
    description:
      "Optimized tax planning and compliance services to reduce risk and improve cash flow.",
    link: "/corporate-tax",
    Icon: BarChart2Icon,
    gradient: "from-purple-500/20 to-violet-500/20",
    iconColor: "text-purple-600",
  },
  {
    title: "Trade Finance Advisory",
    description:
      "Letters of Credit, bank guarantees, and structured trade solutions to power your cross-border ambitions.",
    link: "/trade-finance",
    Icon: GlobeIcon,
    gradient: "from-indigo-500/20 to-blue-500/20",
    iconColor: "text-indigo-600",
  },
  {
    title: "ESG Strategy & Reporting",
    description:
      "Robust ESG frameworks and transparent disclosures aligned with investor and regulatory standards.",
    link: "/audit-and-assurance#esg",
    Icon: LeafIcon,
    gradient: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
};

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full py-16 md:py-28 bg-secondary/50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container px-4 md:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary"
          >
            Our Expertise
          </motion.div>

          <h2 className="text-4xl font-bold mb-6 sm:text-5xl md:text-6xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Comprehensive Financial
            <br />
            <span className="text-primary">Solutions</span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed"
          >
            We provide strategic clarity and financial confidence across every
            stage of your organization's journey, delivering results that
            matter.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16"
        >
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <ServiceCard {...svc} index={i} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl border border-primary/10 backdrop-blur-sm"
        >
          <h3 className="text-xl font-semibold mb-3">Need Something Custom?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every business is unique. Let's discuss how we can tailor our
            expertise to meet your specific challenges and objectives.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 font-medium"
          >
            Let's Talk Solutions
            <motion.svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </motion.svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
