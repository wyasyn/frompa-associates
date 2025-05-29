"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Calculator,
  TrendingUp,
  Shield,
  Clock,
  Users,
  BarChart3,
  Zap,
  DollarSign,
  ChevronDown,
} from "lucide-react";

import { images } from "@/data/images";

import { useRouter } from "next/navigation";

export default function AccountingPage() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

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

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const keyBenefits = [
    {
      icon: Shield,
      title: "100% Accuracy Guarantee",
      description: "Complete reconciliation and error-free financial records",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: Clock,
      title: "Real-Time Updates",
      description: "Stay current with up-to-date bookkeeping and reporting",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: TrendingUp,
      title: "Growth-Focused Analysis",
      description: "Strategic insights to drive your business forward",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Personal attention from certified professionals",
      color: "from-orange-500 to-orange-600",
    },
  ];

  const coreServices = [
    {
      icon: Calculator,
      title: "Professional Bookkeeping",
      description:
        "Comprehensive transaction recording, ledger management, and daily financial operations to keep your books pristine.",
      features: [
        "Daily transaction recording",
        "Account reconciliation",
        "Expense categorization",
        "Multi-currency support",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: BarChart3,
      title: "Financial Statement Preparation",
      description:
        "Complete financial reporting including balance sheets, profit & loss statements, and cash flow analysis.",
      features: [
        "Balance sheets",
        "P&L statements",
        "Cash flow reports",
        "Custom reporting",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      icon: TrendingUp,
      title: "Software Implementation & Training",
      description:
        "Setup and optimization of accounting software tailored to your business needs with comprehensive training.",
      features: [
        "Tally configuration",
        "QuickBooks setup",
        "Odoo implementation",
        "Staff training included",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Shield,
      title: "Compliance & Risk Management",
      description:
        "Ensure regulatory compliance and implement robust financial controls to protect your business.",
      features: [
        "Tax compliance",
        "Audit preparation",
        "Internal controls",
        "Risk assessment",
      ],
      color: "from-red-500 to-red-600",
    },
    {
      icon: Zap,
      title: "Process Automation",
      description:
        "Streamline your financial processes with cutting-edge automation and digital workflows.",
      features: [
        "Automated invoicing",
        "Payment processing",
        "Digital workflows",
        "Cloud integration",
      ],
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: DollarSign,
      title: "Financial Analysis & Insights",
      description:
        "Transform your financial data into actionable insights that drive strategic decision-making.",
      features: [
        "KPI dashboards",
        "Trend analysis",
        "Forecasting",
        "Budget planning",
      ],
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description:
        "We analyze your current financial processes and identify optimization opportunities.",
    },
    {
      step: "02",
      title: "Custom Solution Design",
      description:
        "Develop a tailored accounting framework that fits your business model and goals.",
    },
    {
      step: "03",
      title: "Implementation & Migration",
      description:
        "Deploy systems, migrate data, and establish robust financial processes seamlessly.",
    },
    {
      step: "04",
      title: "Ongoing Excellence",
      description:
        "Continuous monitoring, reporting, and strategic financial guidance for sustained growth.",
    },
  ];

  const whyChooseFeatures = [
    "Reliable bookkeeping to keep your records up-to-date",
    "Comprehensive financial statement preparation",
    "Seamless accounting software setup and training",
    "100% reconciliation for total accuracy",
    "Actionable financial analysis to guide decisions",
  ];

  return (
    <div className="flex flex-col bg-background text-foreground transition-colors duration-300">
      {/* Enhanced Hero Section with Animated Background */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-slate-50 via-emerald-50 to-blue-100 dark:from-slate-800 dark:via-emerald-900 dark:to-blue-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-200 dark:bg-emerald-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob dark:opacity-30"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 dark:opacity-30"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 dark:opacity-30"></div>

        <div className="relative container mx-auto px-4 md:px-6 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 dark:bg-white/10 dark:backdrop-blur-sm text-emerald-800 dark:text-white rounded-full text-sm font-medium mb-8 animate-bounce-subtle">
            <Calculator className="h-4 w-4 mr-2" />
            Professional Accounting Excellence
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
            Accounting{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-emerald-400 dark:to-blue-400 bg-clip-text text-transparent">
              Services
            </span>
          </h1>

          <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed text-gray-600 dark:text-gray-200">
            FROMPA & ASSOCIATES delivers precision accounting services that
            transform your financial data into strategic insights.
            <span className="font-semibold text-gray-800 dark:text-white">
              {" "}
              Accurate records, actionable insights, accelerated growth.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              className="group bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-emerald-500 dark:to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              onClick={() => router.push("/contact")}
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 inline-block group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-8 py-4 font-semibold text-lg transition-colors flex items-center">
              Learn More
              <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
            </button>
          </div>
        </div>
      </section>

      {/* Trust Indicators with Glassmorphism */}
      <section className="w-full py-8 border-b bg-white/60 dark:bg-card/60 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 bg-white/40 dark:bg-card/40 backdrop-blur-sm rounded-full px-4 py-2">
              <Shield className="h-4 w-4 text-primary" />
              <span>Certified Public Accountants</span>
            </div>
            <div className="flex items-center gap-2 bg-white/40 dark:bg-card/40 backdrop-blur-sm rounded-full px-4 py-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>100% Accuracy Guaranteed</span>
            </div>
            <div className="flex items-center gap-2 bg-white/40 dark:bg-card/40 backdrop-blur-sm rounded-full px-4 py-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>Real-Time Financial Updates</span>
            </div>
            <div className="flex items-center gap-2 bg-white/40 dark:bg-card/40 backdrop-blur-sm rounded-full px-4 py-2">
              <Users className="h-4 w-4 text-primary" />
              <span>Dedicated Account Managers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Us Section */}
      <section className="w-full py-20 md:py-32 bg-white dark:bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div
              id="why-choose-content"
              data-animate
              className={`transform transition-all duration-1000 ${
                isVisible["why-choose-content"]
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-12 opacity-0"
              }`}
            >
              <div className="inline-flex items-center px-3 py-1 bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 rounded-full text-sm font-medium mb-6">
                <CheckCircle className="h-4 w-4 mr-2" />
                Why Choose FROMPA & ASSOCIATES
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
                Accounting Excellence That Drives Results
              </h2>

              <p className="text-lg mb-8 leading-relaxed text-gray-600 dark:text-gray-300">
                We combine technical expertise with strategic thinking to
                deliver accounting services that go beyond compliance. Our
                certified professionals ensure your financial foundation is
                rock-solid while providing insights that fuel growth.
              </p>

              <div className="space-y-4">
                {whyChooseFeatures.map((item, index) => (
                  <div
                    key={item}
                    className={`flex items-start transform transition-all duration-500 delay-${index * 100}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mt-1">
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
              id="why-choose-image"
              data-animate
              className={`relative transform transition-all duration-1000 delay-300 ${
                isVisible["why-choose-image"]
                  ? "translate-x-0 opacity-100"
                  : "translate-x-12 opacity-0"
              }`}
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative">
                  <Image
                    src={images.accountingImage.src}
                    alt="Professional Accounting Team at FROMPA & ASSOCIATES"
                    width={images.accountingImage.width}
                    height={images.accountingImage.height}
                    placeholder="blur"
                    priority
                    blurDataURL={images.accountingImage.blurDataURL}
                    className="rounded-2xl object-cover shadow-2xl"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-emerald-500 to-blue-600 text-white p-4 rounded-lg shadow-lg backdrop-blur-sm">
                    <div className="text-center">
                      <div className="text-xl font-bold">CPA</div>
                      <div className="text-xs">Certified</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits with Floating Cards */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-800 dark:to-emerald-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-100 to-blue-100 dark:from-emerald-500/20 dark:to-blue-500/20 text-emerald-800 dark:text-emerald-300 rounded-full font-medium mb-6">
              <TrendingUp className="h-5 w-5 mr-2" />
              Key Benefits
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Why Businesses Trust Our Accounting Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the difference that professional accounting excellence
              makes for your business growth.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {keyBenefits.map((benefit, index) => (
              <div
                key={benefit.title}
                id={`benefit-${index}`}
                data-animate
                className={`group relative bg-white/80 dark:bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/40 dark:border-border/40 transform ${
                  isVisible[`benefit-${index}`]
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${benefit.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                <div className="relative text-center">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${benefit.color} group-hover:scale-110 transition-transform duration-300 mb-4`}
                  >
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Grid */}
      <section className="py-20 md:py-32 bg-white dark:bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-500/20 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
              <BarChart3 className="h-4 w-4 mr-2" />
              Comprehensive Solutions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Accounting Solutions
            </h2>
            <p className="text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              Complete financial management services tailored to your business
              needs
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service, index) => (
              <div
                key={service.title}
                id={`service-${index}`}
                data-animate
                className={`group relative bg-white dark:bg-card border dark:border-border hover:border-gray-300 dark:hover:border-primary/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer transform ${
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
                    <service.icon className="h-8 w-8" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors mb-4">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                      >
                        <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="flex items-center font-medium text-blue-600 dark:text-blue-400">
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

      {/* Enhanced Process Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900">
        <div className="container mx-auto px-4 md:px-6">
          <div
            id="process-section"
            data-animate
            className={`relative transform transition-all duration-1000 ${
              isVisible["process-section"]
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-3xl blur opacity-20"></div>
            <div className="relative bg-white/90 dark:bg-card/90 border-white/20 dark:border-border/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-100 to-blue-100 dark:from-emerald-500/20 dark:to-blue-500/20 text-emerald-800 dark:text-emerald-300 rounded-full font-medium mb-6">
                  <Zap className="h-5 w-5 mr-2" />
                  Our Process
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                  How We Transform Your Finances
                </h2>
                <p className="text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                  Our proven methodology ensures seamless implementation and
                  ongoing success.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {processSteps.map((step, index) => (
                  <div key={step.step} className="relative text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-bold text-lg mb-4 shadow-lg">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-6 -right-4 w-8 h-px bg-gradient-to-r from-emerald-500 to-blue-600"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section with Glassmorphism */}
      <section className="w-full py-16 md:py-24 bg-white dark:bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white/60 dark:bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40 dark:border-border/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl md:text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                500+
              </div>
              <div className="text-sm text-muted-foreground">
                Clients Served
              </div>
            </div>
            <div className="bg-white/60 dark:bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40 dark:border-border/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                99.9%
              </div>
              <div className="text-sm text-muted-foreground">Accuracy Rate</div>
            </div>
            <div className="bg-white/60 dark:bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40 dark:border-border/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                15+
              </div>
              <div className="text-sm text-muted-foreground">
                Years Experience
              </div>
            </div>
            <div className="bg-white/60 dark:bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40 dark:border-border/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-orange-400 mb-1">
                24/7
              </div>
              <div className="text-sm text-muted-foreground">
                Support Available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-900 via-emerald-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-emerald-900/50 to-blue-900/50"></div>

        <div className="relative container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-8">
              <Calculator className="h-4 w-4 mr-2" />
              Ready to Optimize Your Finances?
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Elevate Your Financial Management?
            </h2>

            <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-12 leading-relaxed">
              Join hundreds of businesses that trust FROMPA & ASSOCIATES for
              their accounting needs. Let's discuss how we can streamline your
              finances and drive growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                className="group bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                onClick={() => router.push("/contact")}
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5 inline-block group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                className="text-white hover:text-gray-200 px-8 py-4 font-semibold text-lg transition-colors border border-white/30 rounded-lg hover:bg-white/10 backdrop-blur-sm"
                onClick={() => router.push("/#services")}
              >
                View All Services
              </button>
            </div>

            <p className="text-sm text-gray-300">
              Free initial consultation • No obligation • Quick response
              guaranteed
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
