"use client";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ServiceHero from "@/components/accounting/hero";

// Animation variants
const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
const hoverScale = { scale: 1.03 };

// Financing options data
const financingOptions = [
  { title: "Direct Loan", desc: `Client uses project assets... Minimum €1M.` },
  {
    title: "Monetized SBLC (Full Recourse)",
    desc: `AAA bank issues SBLC... Minimum €5M.`,
  },
  {
    title: "Monetized SBLC (Non-Recourse)",
    desc: `AAA bank issues SBLC... Minimum €5M.`,
  },
  {
    title: "Bank Instruments Lease (Cash Backed)",
    desc: `Facilitation of cash-backed BG/SBLC...`,
  },
];

export default function TradeFinancePage() {
  return (
    <div className="flex flex-col">
      {/* Title & Intro */}
      <ServiceHero
        title="Trade Finance Services"
        description="Comprehensive solutions to support your business operations and
            international trade activities."
      />

      {/* Tabbed Content */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        className="py-12"
      >
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-32">
          <Tabs defaultValue="services" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="services">Our Services</TabsTrigger>
              <TabsTrigger value="partnerships">Partnerships</TabsTrigger>
            </TabsList>

            {/* Services Tab */}
            <TabsContent value="services" className="space-y-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl py-12 font-medium text-center">
                  Trade Finance Solutions
                </h2>
                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Letters of Credit",
                      items: [
                        "At Sight LC",
                        "Usance 30–350 days",
                        "Back-to-Back LC",
                        "Front-to-Back LC",
                      ],
                    },
                    {
                      title: "Bank Guarantees",
                      items: [
                        "Standby LC",
                        "Bank Guarantee",
                        "Tender Guarantee",
                        "EMD",
                        "Advance Payment Guarantees",
                        "Performance BG",
                        "Retention Guarantee",
                      ],
                    },
                    {
                      title: "Accounts",
                      items: [
                        "Offshore Bank Accounts",
                        "Charge Card Accounts",
                        "Merchant/Payment Gateways",
                      ],
                    },
                    {
                      title: "Financial Instruments",
                      items: [
                        "Proof of Funds",
                        "Blocked Funds",
                        "Pre-Advice Messages",
                        "Comfort Letters",
                        "Ready Willing & Able",
                      ],
                    },
                    {
                      title: "Capital Markets",
                      items: [
                        "Bond Issuance",
                        "IPO Issuance",
                        "Debt Finance & Restructuring",
                        "Equity via Mezzanine",
                        "Infrastructure Loans",
                      ],
                    },
                  ].map((svc) => (
                    <motion.div
                      key={svc.title}
                      whileHover={hoverScale}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card>
                        <CardHeader>
                          <CardTitle>{svc.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          {svc.items.map((item) => (
                            <div
                              key={item}
                              className="flex items-start space-x-2"
                            >
                              <CheckCircle className="h-5 w-5 mt-0.5 text-primary" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  className="mt-8 md:mt-10 p-6 rounded-lg text-center max-w-prose text-pretty mx-auto"
                  whileHover={hoverScale}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <p>
                    Let us know your preferred institution with a pro-forma
                    invoice or sales contract to receive drafts for approval...
                  </p>
                  <p className="mt-4">
                    Compliance requires applicant & beneficiary details, amount,
                    currency, validity, and terms.
                  </p>
                </motion.div>
              </motion.div>
            </TabsContent>

            {/* Partnerships Tab */}
            <TabsContent value="partnerships" className="space-y-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-medium py-8 md:py-10 text-center">
                  Trade Finance Partnerships
                </h2>
                <motion.div
                  className="mt-6 p-6 rounded-lg max-w-prose mx-auto"
                  whileHover={hoverScale}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <p className="font-medium">
                    Partnerships with Africa Bridge Capital Management (London),
                    Bank of China, Afrexim Bank, and more to deliver bespoke
                    finance solutions.
                  </p>
                  <p className="mt-4">
                    Collaborations span pre-export financing, credit
                    enhancement, and structured solutions for public and private
                    sector clients.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-medium mb-8 md:mb-10 text-center">
                  Financing Options & Policies
                </h2>
                <div className="mt-6 grid gap-6 lg:grid-cols-2">
                  {financingOptions.map((option) => (
                    <motion.div
                      key={option.title}
                      whileHover={hoverScale}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card>
                        <CardHeader>
                          <CardTitle>{option.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>{option.desc}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        className="py-16 md:py-40 bg-secondary"
      >
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-semibold">
            Ready to explore trade finance solutions?
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-pretty">
            Contact Frompa & Associates today to learn how our trade finance
            services can benefit your organization.
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
