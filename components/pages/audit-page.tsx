"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { images } from "@/data/images";
import ServiceHero from "@/components/accounting/hero";

// Animation variants
const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
const hoverScale = { scale: 1.03 };

export default function AuditAndAssurancePage() {
  return (
    <div className="flex flex-col">
      {/* Title & Intro */}
      <ServiceHero
        title="Audit & Assurance Services"
        description="Ensuring the accuracy and integrity of your financial reporting,
            Frompa & Associates offers a full suite of audit and assurance
            services tailored to your specific needs."
      />

      {/* Overview Section */}
      <motion.section
        className="py-12 md:py-40"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold">Our Audit Philosophy</h2>
            <p className="my-4 my:my-8 max-w-[50ch]">
              At Frompa & Associates, we blend rigorous methodology with deep
              industry insight to identify risks, improve controls, and deliver
              actionable recommendations.
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "Partner-led, tailored audit engagements",
                "Use of advanced audit tools and software",
                "Transparent communication and reporting",
                "Focus on risk mitigation and process improvement",
                "Commitment to regulatory compliance",
              ].map((item) => (
                <motion.li
                  key={item}
                  className="flex items-start"
                  whileHover={hoverScale}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <CheckCircle className="h-6 w-6 mt-1 text-primary" />
                  <span className="ml-3">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <motion.div
            className="flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={images.auditImage.src}
              alt="Audit Approach"
              width={images.auditImage.width}
              height={images.auditImage.height}
              priority
              placeholder="blur"
              blurDataURL={images.auditImage.blurDataURL}
              className="rounded-lg object-cover shadow-lg"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Audit Services Details */}
      <motion.section
        className="py-12 md:py-40 bg-secondary"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-semibold mb-10 text-center">
            Audit Services
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Financial Statement Audits",
                desc: "Ensure accuracy and IFRS compliance",
              },
              {
                title: "Compliance Audits",
                desc: "Verify adherence to laws and policies",
              },
              {
                title: "Internal Audits",
                desc: "Strengthen your internal controls",
              },
              {
                title: "Operational Audits",
                desc: "Optimize efficiency and effectiveness",
              },
              {
                title: "Fraud Investigations",
                desc: "Detect and prevent fraudulent activities",
              },
              {
                title: "Risk Assessment",
                desc: "Identify and evaluate business risks",
              },
            ].map((svc) => (
              <motion.div
                key={svc.title}
                whileHover={hoverScale}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="flex flex-col h-full bg-background/30">
                  <CardHeader>
                    <CardTitle>{svc.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">{svc.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ESG Reporting Details */}
      <motion.section
        className="py-12 md:py-40"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl mb-10 font-semibold text-center">
            ESG Reporting Services
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "ESG Strategy Development",
                desc: "Align sustainability with business goals",
              },
              {
                title: "Data Collection & Analysis",
                desc: "Gather and interpret ESG metrics",
              },
              {
                title: "Report Preparation",
                desc: "Produce compliant ESG disclosures",
              },
              {
                title: "Framework Alignment",
                desc: "Match global ESG standards",
              },
              {
                title: "Performance Improvement",
                desc: "Action plans for ESG enhancement",
              },
            ].map((svc) => (
              <motion.div
                key={svc.title}
                whileHover={hoverScale}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="flex flex-col h-full">
                  <CardHeader>
                    <CardTitle>{svc.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">{svc.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call To Action */}
      <motion.section
        className="py-16 md:py-40 bg-secondary"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-semibold">
            Ready to enhance your financial transparency?
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-pretty">
            Contact Frompa & Associates today to learn how our audit & assurance
            and ESG reporting services can add value to your business.
          </p>
          <div className="mt-6">
            <Link href="/contact">
              <Button size="lg">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
