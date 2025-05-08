"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ServiceHero from "@/components/accounting/hero";
import { images } from "@/data/images";

// Animation variants
const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
const hoverScale = { scale: 1.03 };

export default function CorporateTaxPage() {
  return (
    <div className="flex flex-col">
      {/* Title & Intro */}
      <ServiceHero
        title="Corporate Tax Services"
        description="From peace of mind to strength of focus. Our corporate tax solutions
            ensure compliance and optimize your global tax strategy."
      />

      {/* Approach & Card */}
      <motion.section
        className="py-16 md:py-40"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold">Tailored Tax Support</h2>
            <p className="mt-4 md:mt-8 max-w-[50ch]">
              We adapt to your needs—outsourcing, co-sourcing, or
              augmentation—so you can focus on core business activities.
            </p>
            <p className="mt-4 md:mt-8 max-w-[50ch]">
              Our holistic approach minimizes liability, manages disputes, and
              implements long-term strategies without disruption.
            </p>
          </motion.div>
          <motion.div
            className="flex justify-center"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={images.taxImage.src}
              alt="Corporate Tax"
              width={images.taxImage.width}
              height={images.taxImage.height}
              priority
              placeholder="blur"
              blurDataURL={images.taxImage.blurDataURL}
              className="rounded-lg object-cover shadow-lg"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Service Features */}
      <motion.section
        className="py-16 md:py-40 bg-secondary"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-semibold mb-8 md:mb-10">
            How We Support Your Tax Function
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Efficient tax compliance",
              "Strategic tax structuring",
              "Dispute resolution & rulings",
              "Incentives & credits advisory",
              "Transaction & acquisition due diligence",
              "Global transfer pricing guidance",
            ].map((item) => (
              <motion.div
                key={item}
                whileHover={hoverScale}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-start space-x-2 rounded-lg border p-4 shadow-sm">
                  <CheckCircle className="h-5 w-5 mt-0.5 text-primary" />
                  <span>{item}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="py-16 md:py-40"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-semibold">
            Ready to optimize your tax strategy?
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-pretty">
            Contact Frompa & Associates to discover tailored corporate tax
            solutions for your organization.
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
