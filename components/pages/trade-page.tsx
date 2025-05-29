"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  CreditCard,
  Shield,
  Building2,
  Globe,
  DollarSign,
  TrendingUp,
  Banknote,
  FileText,
  Users,
  Zap,
  Target,
  ChevronDown,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";

// Financing options data with enhanced descriptions
const financingOptions = [
  {
    title: "Direct Loan",
    desc: "Client uses project assets as collateral for direct financing solutions",
    minimum: "Minimum €1M",
    icon: <DollarSign className="h-6 w-6" />,
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Monetized SBLC (Full Recourse)",
    desc: "AAA bank issues SBLC with full recourse backing for maximum security",
    minimum: "Minimum €5M",
    icon: <Shield className="h-6 w-6" />,
    color: "from-green-500 to-green-600",
  },
  {
    title: "Monetized SBLC (Non-Recourse)",
    desc: "AAA bank issues SBLC with non-recourse structure for flexible terms",
    minimum: "Minimum €5M",
    icon: <Building2 className="h-6 w-6" />,
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Bank Instruments Lease (Cash Backed)",
    desc: "Facilitation of cash-backed BG/SBLC for enhanced liquidity",
    minimum: "Custom amounts",
    icon: <Banknote className="h-6 w-6" />,
    color: "from-orange-500 to-orange-600",
  },
];

export default function TradeFinancePage() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [activeTab, setActiveTab] = useState("services");
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    // Re-observe elements when tab changes
    const observeElements = () => {
      document.querySelectorAll("[data-animate]").forEach((el) => {
        observer.observe(el);
      });
    };

    // Initial observation
    observeElements();

    // Re-observe after a short delay when tab changes
    const timeoutId = setTimeout(observeElements, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, [activeTab]); // Add activeTab as dependency

  // Force visibility for partnership tab content when tab becomes active
  useEffect(() => {
    if (activeTab === "partnerships") {
      // Force show partnership content after tab switch
      setTimeout(() => {
        setIsVisible((prev) => ({
          ...prev,
          "partnerships-content": true,
          "financing-options": true,
        }));
      }, 50);
    }
  }, [activeTab]);

  const tradeServices = [
    {
      title: "Letters of Credit",
      items: [
        "At Sight LC",
        "Usance 30–350 days",
        "Back-to-Back LC",
        "Front-to-Back LC",
      ],
      icon: <CreditCard className="h-8 w-8" />,
      color: "from-blue-500 to-blue-600",
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
      icon: <Shield className="h-8 w-8" />,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Accounts",
      items: [
        "Offshore Bank Accounts",
        "Charge Card Accounts",
        "Merchant/Payment Gateways",
      ],
      icon: <Building2 className="h-8 w-8" />,
      color: "from-purple-500 to-purple-600",
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
      icon: <FileText className="h-8 w-8" />,
      color: "from-orange-500 to-orange-600",
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
      icon: <TrendingUp className="h-8 w-8" />,
      color: "from-teal-500 to-teal-600",
    },
  ];

  const benefits = [
    "Global network of trusted banking partners",
    "Competitive rates and flexible terms",
    "Expert compliance and regulatory guidance",
    "24/7 dedicated support team",
    "Streamlined application processes",
  ];

  return (
    <div className="flex flex-col">
      <div className="bg-background text-foreground transition-colors duration-300">
        {/* Enhanced Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-slate-50 via-green-50 to-blue-100 dark:from-slate-800 dark:via-green-900 dark:to-blue-900">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="absolute top-10 left-10 w-72 h-72 bg-green-200 dark:bg-green-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob dark:opacity-30"></div>
          <div className="absolute top-10 right-10 w-72 h-72 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 dark:opacity-30"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 dark:opacity-30"></div>

          <div className="relative container mx-auto px-4 md:px-6 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-white/10 dark:backdrop-blur-sm text-green-800 dark:text-white rounded-full text-sm font-medium mb-8 animate-bounce-subtle">
              <Globe className="h-4 w-4 mr-2" />
              Global Trade Finance Excellence
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
              Trade Finance{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>

            <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed text-gray-600 dark:text-gray-200">
              Comprehensive trade finance solutions to support your
              international business operations and unlock global opportunities.
              <span className="font-semibold text-gray-800 dark:text-white">
                {" "}
                Finance today, expand tomorrow.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                className="group bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-500 dark:to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                onClick={() => router.push("/contact")}
              >
                Get Trade Finance
                <ArrowRight className="ml-2 h-5 w-5 inline-block group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-8 py-4 font-semibold text-lg transition-colors flex items-center">
                Explore Solutions
                <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
              </button>
            </div>
          </div>
        </section>

        {/* Enhanced Overview Section */}
        <section className="py-20 md:py-32 bg-white dark:bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div
                id="overview-content"
                data-animate
                className={`transform transition-all duration-1000 ${
                  isVisible["overview-content"]
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-12 opacity-0"
                }`}
              >
                <div className="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-500/20 text-green-800 dark:text-green-300 rounded-full text-sm font-medium mb-6">
                  <Globe className="h-4 w-4 mr-2" />
                  Global Trade Solutions
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
                  Comprehensive Trade Finance Expertise
                </h2>

                <p className="text-lg mb-8 leading-relaxed text-gray-600 dark:text-gray-300">
                  From letters of credit to complex structured financing, our
                  global network and deep expertise ensure your international
                  trade operations run smoothly and efficiently.
                </p>

                <div className="space-y-4">
                  {benefits.map((item, index) => (
                    <div
                      key={item}
                      className={`flex items-start transform transition-all duration-500 delay-${index * 100}`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mt-1">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <span className="ml-4 text-lg text-gray-700 dark:text-gray-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                id="overview-image"
                data-animate
                className={`relative transform transition-all duration-1000 delay-300 ${
                  isVisible["overview-image"]
                    ? "translate-x-0 opacity-100"
                    : "translate-x-12 opacity-0"
                }`}
              >
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                  <div className="relative bg-white dark:bg-card border dark:border-border rounded-2xl p-8 shadow-2xl">
                    <div className="aspect-square bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-500/10 dark:to-blue-500/10 rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <Globe className="h-24 w-24 mx-auto mb-4 text-green-600 dark:text-green-400" />
                        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                          Global Network
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Worldwide banking partnerships
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Tabbed Content */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-slate-50 to-green-50 dark:from-slate-800 dark:to-green-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-500/20 text-green-800 dark:text-green-300 rounded-full text-sm font-medium mb-6">
                <Building2 className="h-4 w-4 mr-2" />
                Complete Solutions
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Our Trade Finance Services
              </h2>
              <p className="text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                Comprehensive trade finance solutions tailored to your business
                needs
              </p>
            </div>

            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2 mb-12 bg-white/60 dark:bg-card/60 backdrop-blur-sm border border-white/20 dark:border-border/20">
                <TabsTrigger
                  value="services"
                  className="data-[state=active]:bg-white dark:data-[state=active]:bg-card"
                >
                  Our Services
                </TabsTrigger>
                <TabsTrigger
                  value="partnerships"
                  className="data-[state=active]:bg-white dark:data-[state=active]:bg-card"
                >
                  Partnerships & Financing
                </TabsTrigger>
              </TabsList>

              {/* Services Tab */}
              <TabsContent value="services" className="space-y-8">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {tradeServices.map((service, index) => (
                    <div
                      key={service.title}
                      id={`service-${index}`}
                      data-animate
                      className={`group relative bg-white/90 dark:bg-card/90 border border-white/40 dark:border-border/40 backdrop-blur-sm hover:bg-white dark:hover:bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer transform ${
                        isVisible[`service-${index}`]
                          ? "translate-y-0 opacity-100"
                          : "translate-y-8 opacity-0"
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                      onMouseEnter={() => setActiveCard(index)}
                      onMouseLeave={() => setActiveCard(null)}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      ></div>

                      <div className="relative">
                        <div
                          className={`inline-flex p-3 bg-gradient-to-r ${service.color} rounded-xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                        >
                          {service.icon}
                        </div>

                        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                          {service.title}
                        </h3>

                        <div className="space-y-3">
                          {service.items.map((item) => (
                            <div
                              key={item}
                              className="flex items-start space-x-3"
                            >
                              <CheckCircle className="h-5 w-5 mt-0.5 text-green-500 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                          <div className="flex items-center font-medium text-green-600 dark:text-green-400">
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  id="compliance-note"
                  data-animate
                  className={`relative transform transition-all duration-1000 ${
                    isVisible["compliance-note"]
                      ? "translate-y-0 opacity-100"
                      : "translate-y-12 opacity-0"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-600 rounded-3xl blur opacity-20"></div>
                  <div className="relative bg-white/90 dark:bg-card/90 border-white/20 dark:border-border/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border text-center">
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-500/20 dark:to-green-500/20 text-blue-800 dark:text-blue-300 rounded-full font-medium mb-6">
                      <Target className="h-5 w-5 mr-2" />
                      Compliance & Requirements
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                      Streamlined Application Process
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 max-w-3xl mx-auto">
                      Let us know your preferred institution with a pro-forma
                      invoice or sales contract to receive drafts for approval.
                      Our compliance team ensures all requirements are met
                      efficiently.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                      Compliance requires applicant & beneficiary details,
                      amount, currency, validity, and terms.
                    </p>
                  </div>
                </div>
              </TabsContent>

              {/* Partnerships Tab - Fixed visibility */}
              <TabsContent value="partnerships" className="space-y-12">
                <div
                  id="partnerships-content"
                  data-animate
                  className={`transform transition-all duration-1000 ${
                    isVisible["partnerships-content"] ||
                    activeTab === "partnerships"
                      ? "translate-y-0 opacity-100"
                      : "translate-y-12 opacity-0"
                  }`}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl blur opacity-20"></div>
                    <div className="relative bg-white/90 dark:bg-card/90 border-white/20 dark:border-border/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border">
                      <div className="text-center mb-8">
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-500/20 dark:to-blue-500/20 text-green-800 dark:text-green-300 rounded-full font-medium mb-6">
                          <Users className="h-5 w-5 mr-2" />
                          Strategic Partnerships
                        </div>
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                          Global Banking Network
                        </h2>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                          <p className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                            Partnerships with Africa Bridge Capital Management
                            (London), Bank of China, Afrexim Bank, and more to
                            deliver bespoke finance solutions.
                          </p>
                          <p className="text-gray-600 dark:text-gray-300">
                            Collaborations span pre-export financing, credit
                            enhancement, and structured solutions for public and
                            private sector clients.
                          </p>
                        </div>
                        <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-500/10 dark:to-blue-500/10 rounded-xl p-6">
                          <div className="text-center">
                            <Building2 className="h-16 w-16 mx-auto mb-4 text-green-600 dark:text-green-400" />
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                              Trusted Partners
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                              Leading global financial institutions
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  id="financing-options"
                  data-animate
                  className={`transform transition-all duration-1000 ${
                    isVisible["financing-options"] ||
                    activeTab === "partnerships"
                      ? "translate-y-0 opacity-100"
                      : "translate-y-12 opacity-0"
                  }`}
                >
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                      Financing Options & Policies
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                      Flexible financing solutions tailored to your project
                      requirements
                    </p>
                  </div>

                  <div className="grid gap-8 lg:grid-cols-2">
                    {financingOptions.map((option, index) => (
                      <div
                        key={option.title}
                        className="group relative bg-white/90 dark:bg-card/90 border border-white/40 dark:border-border/40 backdrop-blur-sm hover:bg-white dark:hover:bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                      >
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${option.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                        ></div>

                        <div className="relative">
                          <div className="flex items-start justify-between mb-6">
                            <div
                              className={`inline-flex p-3 bg-gradient-to-r ${option.color} rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}
                            >
                              {option.icon}
                            </div>
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                              {option.minimum}
                            </span>
                          </div>

                          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                            {option.title}
                          </h3>

                          <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                            {option.desc}
                          </p>

                          <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                            <div className="flex items-center font-medium text-green-600 dark:text-green-400">
                              Get Quote
                              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-gray-900 via-green-900 to-blue-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-900/50 to-blue-900/50"></div>

          <div className="relative container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-8">
                <Rocket className="h-4 w-4 mr-2" />
                Ready to Expand Globally?
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to explore trade finance solutions?
              </h2>

              <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-12 leading-relaxed">
                Contact Frompa & Associates today to learn how our trade finance
                services can benefit your organization and unlock global
                opportunities.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  className="group bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                  onClick={() => router.push("/contact")}
                >
                  Contact Us Today
                  <ArrowRight className="ml-2 h-5 w-5 inline-block group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  className="text-white hover:text-gray-200 px-8 py-4 font-semibold text-lg transition-colors border border-white/30 rounded-lg hover:bg-white/10 backdrop-blur-sm"
                  onClick={() => router.push("/contact")}
                >
                  Get Quote
                </button>
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="text-white">
                  <div className="text-3xl font-bold mb-2">€50B+</div>
                  <div className="text-gray-300">Trade Volume Facilitated</div>
                </div>
                <div className="text-white">
                  <div className="text-3xl font-bold mb-2">150+</div>
                  <div className="text-gray-300">Countries Served</div>
                </div>
                <div className="text-white">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-gray-300">Global Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
