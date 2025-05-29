"use client";
import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Heart,
  Brain,
  UserCheck,
  Briefcase,
  Target,
  Zap,
  Shield,
  BarChart3,
  ChevronDown,
  Star,
  Award,
} from "lucide-react";

export default function HumanCapitalPage() {
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

  const services = [
    {
      icon: <UserCheck className="h-8 w-8" />,
      title: "Executive Recruitment",
      description:
        "Find and attract top-tier executive talent for your organization",
      color: "from-blue-500 to-blue-600",
      features: [
        "C-Suite Recruitment",
        "Board Advisory",
        "Leadership Assessment",
      ],
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Talent & Change Management",
      description:
        "Navigate organizational change with strategic talent solutions",
      color: "from-green-500 to-green-600",
      features: [
        "Change Strategy",
        "Talent Development",
        "Culture Transformation",
      ],
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Payroll Management & Software",
      description: "Streamlined payroll solutions with cutting-edge technology",
      color: "from-purple-500 to-purple-600",
      features: [
        "Automated Processing",
        "Compliance Management",
        "Multi-country Support",
      ],
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "HR Technology Solutions",
      description: "Modern HR tech stack to optimize your people operations",
      color: "from-orange-500 to-orange-600",
      features: [
        "HRIS Implementation",
        "Performance Management",
        "Analytics & Reporting",
      ],
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "HR Manuals & Policies",
      description: "Comprehensive HR documentation and policy development",
      color: "from-teal-500 to-teal-600",
      features: [
        "Policy Development",
        "Compliance Documentation",
        "Employee Handbooks",
      ],
    },
  ];

  const capabilities = [
    "Strategic workforce planning and analysis",
    "Executive search and leadership development",
    "HR technology implementation and optimization",
    "Change management and organizational design",
    "Payroll outsourcing and compliance management",
  ];

  const benefitsPoints = [
    "Attract and retain top talent with strategic recruitment",
    "Streamline HR operations with modern technology",
    "Ensure compliance with comprehensive policy frameworks",
    "Drive organizational change with expert guidance",
    "Optimize payroll processes and reduce administrative burden",
  ];

  const stats = [
    { number: "95%", label: "Successful Placements" },
    { number: "40%", label: "Time-to-Hire Reduction" },
    { number: "300+", label: "HR Transformations" },
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
              <Heart className="h-4 w-4 mr-2" />
              People-First Solutions
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
              Human{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">
                Capital
              </span>{" "}
              Services
            </h1>

            <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed text-gray-600 dark:text-gray-200">
              We support organizations in building strong human capital
              foundations. Our services ensure you have the{" "}
              <span className="font-semibold text-gray-800 dark:text-white">
                right talent, structure, and systems to succeed.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-500 dark:to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                Transform Your Workforce
                <ArrowRight className="ml-2 h-5 w-5 inline-block group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-8 py-4 font-semibold text-lg transition-colors flex items-center">
                Discover Our Impact
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
                  <Brain className="h-4 w-4 mr-2" />
                  Strategic People Solutions
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
                  Your People Are Your Greatest Asset
                </h2>

                <p className="text-lg mb-8 leading-relaxed text-gray-600 dark:text-gray-300">
                  From executive recruitment to comprehensive HR technology
                  solutions, we help you build, manage, and optimize your most
                  valuable resource—your people.
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
                        <Users className="h-24 w-24 mx-auto mb-4 text-green-600 dark:text-green-400" />
                        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                          People Excellence
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Strategic human capital solutions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Benefits Card */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-slate-50 to-green-50 dark:from-slate-800 dark:to-green-900">
          <div className="container mx-auto px-4 md:px-6">
            <div
              id="benefits-card"
              data-animate
              className={`relative transform transition-all duration-1000 ${
                isVisible["benefits-card"]
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl blur opacity-20"></div>
              <div className="relative bg-white/90 dark:bg-card/90 border-white/20 dark:border-border/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-500/20 dark:to-blue-500/20 text-green-800 dark:text-green-300 rounded-full font-medium mb-6">
                    <Target className="h-5 w-5 mr-2" />
                    Transform Your Organization
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                    Unlock Your Team's Full Potential
                  </h2>
                  <p className="text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                    Our human capital solutions drive measurable results across
                    your entire organization.
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
                  {benefitsPoints.map((point, index) => (
                    <div
                      key={point}
                      className="group bg-white/60 dark:bg-card/60 border-white/40 dark:border-border/40 hover:bg-white/80 dark:hover:bg-card/80 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-white" />
                        </div>
                        <span className="ml-4 font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                          {point}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  {stats.map((stat, index) => (
                    <div key={stat.label} className="group">
                      <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                        {stat.number}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400 font-medium">
                        {stat.label}
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
                Complete HR Solutions
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Our Human Capital Services
              </h2>
              <p className="text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                Comprehensive expertise to build and optimize your human capital
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => (
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
                      {service.icon}
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors mb-4">
                      {service.description}
                    </p>

                    {/* Service Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-sm text-gray-500 dark:text-gray-400"
                        >
                          <Star className="h-3 w-3 mr-2 text-yellow-500" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
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
                <Award className="h-4 w-4 mr-2" />
                Ready to Excel?
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to build your dream team?
              </h2>

              <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-12 leading-relaxed">
                Partner with Frompa & Associates to transform your human capital
                strategy and unlock your organization's full potential.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  Start Your Transformation
                  <ArrowRight className="ml-2 h-5 w-5 inline-block group-hover:translate-x-1 transition-transform" />
                </button>

                <button className="text-white hover:text-gray-200 px-8 py-4 font-semibold text-lg transition-colors border border-white/30 rounded-lg hover:bg-white/10 backdrop-blur-sm">
                  Schedule Consultation
                </button>
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="text-white">
                    <div className="text-3xl font-bold mb-2">{stat.number}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
