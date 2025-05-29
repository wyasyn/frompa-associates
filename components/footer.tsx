"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  LinkedinIcon,
  TwitterIcon,
  FacebookIcon,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./logo";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const services = [
  { name: "Audit & Assurance", href: "/audit-and-assurance" },
  { name: "Tax Advisory", href: "/tax-advisory" },
  { name: "Accounting Services", href: "/accounting" },
  { name: "Human Capital", href: "/human-capital" },
  { name: "Corporate Governance", href: "/corporate-governance" },
  { name: "IT Consulting", href: "/it-consulting" },
];

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Client Portal", href: "/portal" },
  { name: "Careers", href: "/careers" },
  { name: "Insights", href: "/insights" },
  { name: "Contact Us", href: "/contact" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Cookie Policy", href: "/cookies" },
  { name: "Code of Ethics", href: "/ethics" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-gradient-to-br from-muted/30 via-background to-muted/20 border-t border-border/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/20 blur-2xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-accent/20 blur-2xl" />
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="container mx-auto pt-16 md:pt-20 lg:pt-24">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 pb-16"
          >
            {/* Company Info - Takes up more space */}
            <motion.div variants={fadeInUp} className="lg:col-span-5 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 ">
                  <Logo />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  FROMPA & ASSOCIATES
                </h3>
              </div>

              <p className="text-base text-muted-foreground leading-relaxed max-w-md">
                Uganda's premier CPA firm delivering partner-led accounting,
                audit, tax, and advisory services with over 19 years of
                professional excellence.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-start group">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <address className="not-italic ml-3 text-sm text-muted-foreground leading-relaxed">
                    Plot 1920, Block 115, Gulama, Kirowoza
                    <br />
                    Old Jinja Road, Mukono
                    <br />
                    P.O. Box 4660, Kampala, Uganda
                  </address>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center group">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <Phone className="h-4 w-4 text-primary" />
                    </div>
                    <a
                      href="tel:+256783416629"
                      className="ml-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      +256 783 416 629
                    </a>
                  </div>
                  <div className="flex items-center group">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <Phone className="h-4 w-4 text-primary" />
                    </div>
                    <a
                      href="tel:+256757634878"
                      className="ml-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      +256 757 634 878
                    </a>
                  </div>
                  <div className="flex items-center group">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <Mail className="h-4 w-4 text-primary" />
                    </div>
                    <a
                      href="mailto:info@frompaandassociates.com"
                      className="ml-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@frompaandassociates.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary transition-all duration-300 group"
                >
                  <LinkedinIcon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary transition-all duration-300 group"
                >
                  <TwitterIcon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary transition-all duration-300 group"
                >
                  <FacebookIcon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-6">
              <h3 className="text-lg font-semibold text-foreground flex items-center">
                <div className="w-1 h-6 bg-primary rounded-full mr-3" />
                Our Services
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      href={service.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors group flex items-center"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {service.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-6">
              <h3 className="text-lg font-semibold text-foreground flex items-center">
                <div className="w-1 h-6 bg-primary rounded-full mr-3" />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors group flex items-center"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter & Legal */}
            <motion.div variants={fadeInUp} className="lg:col-span-3 space-y-6">
              <h3 className="text-lg font-semibold text-foreground flex items-center">
                <div className="w-1 h-6 bg-primary rounded-full mr-3" />
                Stay Updated
              </h3>

              <div className="bg-background/60 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                <p className="text-sm text-muted-foreground mb-4">
                  Get the latest insights on accounting, tax, and regulatory
                  updates.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                  <Button size="sm" className="px-4">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-foreground">Legal</h4>
                <ul className="space-y-2">
                  {legalLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center group"
                      >
                        <ExternalLink className="h-3 w-3 mr-2 opacity-50 group-hover:opacity-100 transition-opacity" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-border/50 bg-background/80 backdrop-blur-sm"
        >
          <div className="container mx-auto py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6">
                <p className="text-sm text-muted-foreground">
                  © {currentYear} FROMPA & ASSOCIATES. All rights reserved.
                </p>
                <div className="hidden md:flex items-center space-x-4 text-xs text-muted-foreground">
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                    Professional Services
                  </span>
                  <span>•</span>
                  <span>CPA Certified</span>
                  <span>•</span>
                  <span>19+ Years Experience</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-xs text-muted-foreground">
                  Made with ❤️ in Uganda
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/contact" className="group">
                    <span className="text-xs">Get in Touch</span>
                    <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
