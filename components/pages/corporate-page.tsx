"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Calculator,
  Shield,
  TrendingUp,
  FileText,
  Users,
  Target,
  Building,
  Briefcase,
  ChevronDown,
  Globe,
  PieChart,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/data/images";

export default function CorporateTaxPage() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

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

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const taxServices = [
    {
      icon: <Calculator className="h-8 w-8" />,
      title: "Tax Compliance & Reporting",
      description:
        "Comprehensive tax return preparation and regulatory compliance",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Strategic Tax Planning",
      description:
        "Optimize your tax position with forward-thinking strategies",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Tax Risk Management",
      description: "Identify and mitigate potential tax exposures",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Dispute Resolution",
      description: "Expert representation in tax audits and appeals",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "International Tax Services",
      description: "Navigate complex cross-border tax requirements",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: <PieChart className="h-8 w-8" />,
      title: "Transfer Pricing",
      description: "Compliant transfer pricing documentation and planning",
      color: "from-red-500 to-red-600",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Tax Credits & Incentives",
      description: "Maximize available tax benefits and credits",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "M&A Tax Advisory",
      description: "Strategic tax guidance for transactions and restructuring",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Tax Technology Solutions",
      description: "Modern tax technology implementation and optimization",
      color: "from-yellow-500 to-yellow-600",
    },
  ];

  const capabilities = [
    "Efficient tax compliance processes",
    "Strategic tax structuring and planning",
    "Comprehensive dispute resolution support",
    "Incentives and credits advisory services",
    "Transaction and acquisition due diligence",
  ];

  const supportFeatures = [
    "Proactive tax strategy development",
    "Real-time compliance monitoring",
    "Cross-jurisdictional expertise",
    "Technology-driven solutions",
    "Dedicated senior-level attention",
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
              <Calculator className="h-4 w-4 mr-2" />
              Tax Excellence & Compliance
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
              Corporate{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">
                Tax Services
              </span>
            </h1>

            <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed text-gray-600 dark:text-gray-200">
              From peace of mind to strength of focus. Our corporate tax
              solutions ensure compliance and optimize your global tax strategy.
              <span className="font-semibold text-gray-800 dark:text-white">
                {" "}
                Navigate complexity with confidence.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-500 dark:to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  Get Tax Advisory
                  <ArrowRight className="ml-2 h-5 w-5 inline-block group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <button className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-8 py-4 font-semibold text-lg transition-colors flex items-center">
                Explore Services
                <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
              </button>
            </div>
          </div>
        </section>

        {/* Enhanced Tax Support Overview */}
        <section className="py-20 md:py-32 bg-white dark:bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div
                id="tax-overview-content"
                data-animate
                className={`transform transition-all duration-1000 ${
                  isVisible["tax-overview-content"]
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-12 opacity-0"
                }`}
              >
                <div className="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-500/20 text-green-800 dark:text-green-300 rounded-full text-sm font-medium mb-6">
                  <Shield className="h-4 w-4 mr-2" />
                  Tailored Tax Excellence
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
                  Tailored Tax Support That Adapts to You
                </h2>

                <p className="text-lg mb-8 leading-relaxed text-gray-600 dark:text-gray-300">
                  We adapt to your needs—outsourcing, co-sourcing, or
                  augmentation—so you can focus on core business activities. Our
                  holistic approach minimizes liability, manages disputes, and
                  implements long-term strategies without disruption.
                </p>

                <div className="space-y-4">
                  {capabilities.map((item, index) => (
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
                id="tax-overview-image"
                data-animate
                className={`relative transform transition-all duration-1000 delay-300 ${
                  isVisible["tax-overview-image"]
                    ? "translate-x-0 opacity-100"
                    : "translate-x-12 opacity-0"
                }`}
              >
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                  <div className="relative">
                    <Image
                      src={images.taxImage.src}
                      alt="Corporate Tax Services"
                      width={images.taxImage.width}
                      height={images.taxImage.height}
                      priority
                      placeholder="blur"
                      blurDataURL={images.taxImage.blurDataURL}
                      className="rounded-2xl object-cover shadow-2xl group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Tax Function Support */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-slate-50 to-green-50 dark:from-slate-800 dark:to-green-900">
          <div className="container mx-auto px-4 md:px-6">
            <div
              id="tax-function-card"
              data-animate
              className={`relative transform transition-all duration-1000 ${
                isVisible["tax-function-card"]
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl blur opacity-20"></div>
              <div className="relative bg-white/90 dark:bg-card/90 border-white/20 dark:border-border/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-500/20 dark:to-blue-500/20 text-green-800 dark:text-green-300 rounded-full font-medium mb-6">
                    <Users className="h-5 w-5 mr-2" />
                    Comprehensive Tax Function
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                    How We Support Your Tax Function
                  </h2>
                  <p className="text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                    Strategic tax expertise that transforms compliance into
                    competitive advantage.
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {supportFeatures.map((feature, index) => (
                    <div
                      key={feature}
                      className="group bg-white/60 dark:bg-card/60 border-white/40 dark:border-border/40 hover:bg-white/80 dark:hover:bg-card/80 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-white" />
                        </div>
                        <span className="ml-4 font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                          {feature}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Services Grid */}
        <section className="py-20 md:py-32 bg-white dark:bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-500/20 text-green-800 dark:text-green-300 rounded-full text-sm font-medium mb-6">
                <Briefcase className="h-4 w-4 mr-2" />
                Tax Service Excellence
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Comprehensive Tax Solutions
              </h2>
              <p className="text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                End-to-end tax services designed to optimize your corporate tax
                strategy
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {taxServices.map((service, index) => (
                <div
                  key={service.title}
                  id={`tax-service-${index}`}
                  data-animate
                  className={`group relative bg-white dark:bg-card border dark:border-border hover:border-gray-300 dark:hover:border-primary/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer transform ${
                    isVisible[`tax-service-${index}`]
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

                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                      {service.description}
                    </p>

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
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-gray-900 via-green-900 to-blue-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-900/50 to-blue-900/50"></div>

          <div className="relative container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-8">
                <Calculator className="h-4 w-4 mr-2" />
                Tax Strategy Optimization
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to optimize your tax strategy?
              </h2>

              <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-12 leading-relaxed">
                Contact Frompa & Associates to discover tailored corporate tax
                solutions that drive compliance excellence and strategic
                advantage.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="group bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                  >
                    Contact Us Today
                    <ArrowRight className="ml-2 h-5 w-5 inline-block group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>

                <Link href="/contact">
                  <button className="text-white hover:text-gray-200 px-8 py-4 font-semibold text-lg transition-colors border border-white/30 rounded-lg hover:bg-white/10 backdrop-blur-sm">
                    Schedule Tax Consultation
                  </button>
                </Link>
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="text-white">
                  <div className="text-3xl font-bold mb-2">1000+</div>
                  <div className="text-gray-300">Tax Returns Filed</div>
                </div>
                <div className="text-white">
                  <div className="text-3xl font-bold mb-2">$50M+</div>
                  <div className="text-gray-300">Tax Savings Achieved</div>
                </div>
                <div className="text-white">
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-gray-300">Compliance Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
