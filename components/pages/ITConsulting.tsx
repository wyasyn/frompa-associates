"use client";
import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Shield,
  Server,
  Search,
  Settings,
  Database,
  Cloud,
  Lock,
  Zap,
  ChevronDown,
  Monitor,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function ITConsulting() {
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

  const services = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "IT Strategic Development & Implementation",
      description:
        "Comprehensive technology roadmaps aligned with your business objectives",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Risk Assessment & Assurance",
      description:
        "Identify vulnerabilities and implement robust security frameworks",
      color: "from-red-500 to-red-600",
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Systems Technology Diagnostics",
      description:
        "Deep-dive analysis of your current infrastructure and performance",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Xero Implementation",
      description: "Seamless cloud accounting setup and integration",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Software Evaluation & Advisory",
      description: "Expert guidance on technology selection and optimization",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Migration & Management",
      description: "Seamless cloud transformation and ongoing optimization",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Management & Analytics",
      description: "Transform data into actionable business insights",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Digital Transformation",
      description: "Modernize your business operations and processes",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Cybersecurity Solutions",
      description: "Comprehensive security frameworks and threat protection",
      color: "from-pink-500 to-pink-600",
    },
  ];

  const capabilities = [
    "Comprehensive system diagnostics & analysis",
    "Strategic IT roadmap development",
    "Infrastructure optimization & modernization",
    "Security assessment & implementation",
    "Technology vendor evaluation & selection",
  ];

  const transformationPoints = [
    "Modernize legacy systems for peak performance",
    "Implement robust cybersecurity frameworks",
    "Optimize cloud infrastructure for scalability",
    "Integrate advanced analytics and reporting",
    "Streamline IT operations and processes",
  ];

  return (
    <div className="flex flex-col">
      <div className="bg-background text-foreground transition-colors duration-300">
        {/* Enhanced Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-800 dark:via-blue-900 dark:to-indigo-900">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob dark:opacity-30"></div>
          <div className="absolute top-10 right-10 w-72 h-72 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 dark:opacity-30"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 dark:bg-pink-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 dark:opacity-30"></div>

          <div className="relative container mx-auto px-4 md:px-6 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-white/10 dark:backdrop-blur-sm text-blue-800 dark:text-white rounded-full text-sm font-medium mb-8 animate-bounce-subtle">
              <Server className="h-4 w-4 mr-2" />
              IT Consulting Excellence
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
              Information{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Technology
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                Consulting
              </span>
            </h1>

            <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed text-gray-600 dark:text-gray-200">
              FROMPA & ASSOCIATES delivers cutting-edge IT consulting solutions
              that transform your business operations, fortify security
              infrastructure, and strategically align technology with your
              organizational vision.
              <span className="font-semibold text-gray-800 dark:text-white">
                {" "}
                Optimize today, succeed tomorrow.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                className="group bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
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

        {/* Enhanced IT Overview */}
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
                <div className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-500/20 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
                  <Shield className="h-4 w-4 mr-2" />
                  Technology Leadership
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
                  Strategic IT Consulting & Infrastructure Excellence
                </h2>

                <p className="text-lg mb-8 leading-relaxed text-gray-600 dark:text-gray-300">
                  Whether you need comprehensive system diagnostics, strategic
                  IT planning, or security enhancement, our expert teams deliver
                  tailored solutions to optimize your technology infrastructure
                  and operations.
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
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                  <div className="relative bg-white dark:bg-card border dark:border-border rounded-2xl p-8 shadow-2xl">
                    <div className="aspect-square bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-500/10 dark:to-purple-500/10 rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <Monitor className="h-24 w-24 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
                        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                          IT Excellence
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Comprehensive technology solutions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Transformation Card */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900">
          <div className="container mx-auto px-4 md:px-6">
            <div
              id="transformation-card"
              data-animate
              className={`relative transform transition-all duration-1000 ${
                isVisible["transformation-card"]
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-20"></div>
              <div className="relative bg-white/90 dark:bg-card/90 border-white/20 dark:border-border/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-500/20 dark:to-purple-500/20 text-blue-800 dark:text-blue-300 rounded-full font-medium mb-6">
                    <Zap className="h-5 w-5 mr-2" />
                    Digital Transformation
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                    Transform Your IT Infrastructure with Expert Guidance
                  </h2>
                  <p className="text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                    Our IT consulting goes beyond technology. We partner with
                    you to revolutionize your digital landscape.
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {transformationPoints.map((point, index) => (
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
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Services Grid */}
        <section className="py-20 md:py-32 bg-white dark:bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-500/20 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
                <Server className="h-4 w-4 mr-2" />
                Comprehensive Solutions
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Our IT Consulting Capabilities
              </h2>
              <p className="text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                End-to-end technology expertise across all aspects of your IT
                infrastructure
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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

                    <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                      {service.description}
                    </p>

                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
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

        {/* Enhanced CTA Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-900/50 to-purple-900/50"></div>

          <div className="relative container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-8">
                <Monitor className="h-4 w-4 mr-2" />
                Ready to Transform?
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to optimize your IT infrastructure?
              </h2>

              <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-12 leading-relaxed">
                Contact FROMPA & ASSOCIATES today to discover how our IT
                consulting services can modernize your technology and accelerate
                your business growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  className="group bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                  onClick={() => router.push("/contact")}
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 inline-block group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  className="text-white hover:text-gray-200 px-8 py-4 font-semibold text-lg transition-colors border border-white/30 rounded-lg hover:bg-white/10 backdrop-blur-sm"
                  onClick={() => router.push("/contact")}
                >
                  Schedule Assessment
                </button>
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="text-white">
                  <div className="text-3xl font-bold mb-2">300+</div>
                  <div className="text-gray-300">IT Projects Delivered</div>
                </div>
                <div className="text-white">
                  <div className="text-3xl font-bold mb-2">99%</div>
                  <div className="text-gray-300">System Uptime</div>
                </div>
                <div className="text-white">
                  <div className="text-3xl font-bold mb-2">15+</div>
                  <div className="text-gray-300">Years IT Expertise</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
