"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { images } from "@/data/images";
import ServicesSection from "../home/services";
import { motion } from "framer-motion";
import {
  Award,
  Users,
  Globe,
  Calendar,
  MapPin,
  Download,
  ArrowRight,
  Building2,
  TrendingUp,
  Shield,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 },
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const stats = [
  { icon: Calendar, number: "19+", label: "Years of Excellence" },
  { icon: Users, number: "100+", label: "Clients Served" },
  { icon: Globe, number: "6", label: "Service Areas" },
  { icon: Award, number: "$18M", label: "Largest Audit Led" },
];

const values = [
  {
    icon: Shield,
    title: "Integrity & Trust",
    description:
      "We uphold the highest ethical standards in every engagement, building lasting relationships through transparency and reliability.",
  },
  {
    icon: TrendingUp,
    title: "Excellence & Innovation",
    description:
      "We continuously evolve our methodologies and embrace technology to deliver superior results for our clients.",
  },
  {
    icon: Building2,
    title: "Local Expertise, Global Standards",
    description:
      "Deep understanding of Uganda's business landscape combined with international best practices and compliance standards.",
  },
];

export default function AboutUsPage() {
  return (
    <main className="space-y-0">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />
        <div className="container relative py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Building2 className="h-4 w-4 mr-2" />
              Est. 2005 • Certified Public Accountants
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight mb-8">
              About FROMPA & <span className="text-primary">ASSOCIATES</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              Uganda's premier CPA firm delivering partner-led accounting,
              audit, tax, and advisory services. Building trust through
              expertise, one client at a time.
            </p>
          </motion.div>
        </div>

        {/* Hero Images */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-8 pb-12 md:pb-20"
        >
          <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden group">
            <Image
              src={images.firmOffice.src}
              alt="FROMPA & Associates Modern Office"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              placeholder="blur"
              blurDataURL={images.firmOffice.blurDataURL}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-stone-300">
              <h3 className="text-lg font-semibold text-white">
                Our Modern Office
              </h3>
              <p className="text-sm opacity-90">Mukono, Uganda</p>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden group">
            <Image
              src={images.patnerMeeting.src}
              alt="Strategic Partner Meeting"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              placeholder="blur"
              blurDataURL={images.patnerMeeting.blurDataURL}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-stone-300">
              <h3 className="text-lg font-semibold text-white">
                Partner-Led Approach
              </h3>
              <p className="text-sm opacity-90">Strategic Consultation</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-20 md:py-32 bg-[url('/story-bg.webp')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95 backdrop-blur-sm" />
        <div className="container relative">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold">
                Our <span className="text-primary">Story</span>
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            </div>

            <div className="bg-background/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-border/50 shadow-xl">
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-8">
                Founded by{" "}
                <strong className="text-foreground">CPA Fredricks Owora</strong>
                , formerly Audit Manager at Grant Thornton Uganda and Managing
                Partner at TGS Osillo, FROMPA & ASSOCIATES represents{" "}
                <strong className="text-foreground">19 years</strong> of
                unwavering commitment to excellence in audit, tax advisory,
                corporate restructuring, and financial management.
              </p>
              <div className="bg-primary/10 rounded-2xl p-6 mb-8">
                <p className="text-base md:text-lg text-foreground font-semibold">
                  🏆 Notable Achievement: Led Uganda's largest investigative
                  audit valued at
                  <span className="text-primary"> USD $18 million</span>
                </p>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Today, we serve a diverse portfolio of NGOs, financial
                institutions, government entities, and corporate clients across
                Uganda and beyond, maintaining our founding commitment to
                integrity, expertise, and personalized service.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a href="/firm-profile.pdf" download>
                <Button size="lg" className="group">
                  <Download className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                  Download Firm Profile
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and define our relationships
              with clients
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-background border border-border rounded-3xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-6 transition-colors duration-300">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Visit Our <span className="text-primary">Office</span>
            </h2>
            <div className="flex items-center justify-center text-lg text-muted-foreground mb-8">
              <MapPin className="h-5 w-5 mr-2 text-primary" />
              Plot 1920, Block 115, Gulama, Kirowoza, Old Jinja Road, Mukono
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-border">
              <iframe
                title="FROMPA & Associates Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.2362766705866!2d32.74273881528064!3d0.35413665902877946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc3aaa9d1fbd%3A0xa0e4d3b6a677edbd!2sPlot%201920%2C%20Old%20Jinja%20Rd%2C%20Mukono%2C%20Uganda!5e0!3m2!1sen!2sus!4v1715212345678"
                width="100%"
                height="400"
                className="border-0"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="text-center mt-8">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Plot+1920+Block+115+Old+Jinja+Road+Mukono+Uganda"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="group">
                  <MapPin className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                  Get Directions
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Snapshot */}
      <ServicesSection />

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container text-center">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold">
              Ready to Partner with{" "}
              <span className="text-primary">Experts?</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Experience the FROMPA difference. Let's discuss how our
              comprehensive advisory services can drive your organization's
              success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" asChild className="group">
                <Link href="/contact">
                  Start the Conversation
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
