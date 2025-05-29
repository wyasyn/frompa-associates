"use client";
import React, { useState, useEffect } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  CheckCircle,
  User,
  MessageSquare,
  Building,
  ArrowRight,
  Calculator,
  FileText,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";

const ModernContactPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    interface MousePosition {
      x: number;
      y: number;
    }

    interface FormData {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      service: string;
      message: string;
    }

    interface Service {
      value: string;
      label: string;
      icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
      color: string;
    }

    interface ContactCard {
      icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
      title: string;
      content: React.ReactNode;
      gradient: string;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  interface InputChangeEvent
    extends React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    > {}

  const handleInputChange = (e: InputChangeEvent) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
    setIsSubmitted(true);

    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  const services = [
    {
      value: "audit",
      label: "Audit & Assurance",
      icon: Shield,
      color: "from-blue-600 to-blue-800",
    },
    {
      value: "tax",
      label: "Tax Advisory",
      icon: Calculator,
      color: "from-amber-500 to-yellow-600",
    },
    {
      value: "accounting",
      label: "Accounting Services",
      icon: FileText,
      color: "from-slate-600 to-slate-800",
    },
    {
      value: "governance",
      label: "Corporate Governance",
      icon: TrendingUp,
      color: "from-blue-700 to-indigo-800",
    },
    {
      value: "hr",
      label: "Human Capital",
      icon: Users,
      color: "from-amber-600 to-orange-700",
    },
  ];

  const contactCards = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      content: (
        <address className="not-italic leading-relaxed text-slate-100">
          Plot 1920, Block 115, Gulama, Kirowoza
          <br />
          Old Jinja Road, Mukono
          <br />
          P.O. Box 4660, Kampala, Uganda
        </address>
      ),
      gradient: "from-blue-600 to-blue-800",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: (
        <div className="space-y-2 text-slate-100">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            <span>+256 783 416 629</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            <span>+256 757 634 878</span>
          </div>
        </div>
      ),
      gradient: "from-amber-500 to-yellow-600",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: (
        <a
          href="mailto:info@frompaandassociates.com"
          className="transition-colors duration-300 underline decoration-transparent hover:decoration-current text-slate-100 hover:text-amber-200"
        >
          info@frompaandassociates.com
        </a>
      ),
      gradient: "from-slate-600 to-slate-800",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: (
        <div className="space-y-1 text-slate-100">
          <div className="flex justify-between">
            <span>Mon - Fri</span>
            <span className="text-amber-300">9:00 AM - 5:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Weekend</span>
            <span className="text-red-300">Closed</span>
          </div>
        </div>
      ),
      gradient: "from-blue-700 to-indigo-800",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-amber-50 dark:from-slate-900 dark:via-blue-900 dark:to-slate-800 overflow-hidden transition-all duration-500">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/20 to-amber-400/20 dark:from-blue-500/15 dark:to-amber-500/15 rounded-full blur-3xl transition-all duration-300"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: "all 0.3s ease-out",
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-slate-400/15 to-blue-400/15 dark:from-slate-500/10 dark:to-blue-500/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-amber-400/15 to-yellow-400/15 dark:from-amber-500/10 dark:to-yellow-500/10 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 pt-20 pb-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-slate-800 via-blue-700 to-amber-600 dark:from-slate-200 dark:via-blue-300 dark:to-amber-300 bg-clip-text text-transparent mb-6 animate-fade-in">
            Let's Connect
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8 animate-fade-in-delay">
            Ready to transform your financial future? Our certified experts are
            here to guide you every step of the way.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-delay-2">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.value}
                  className={`px-4 py-2 rounded-full bg-gradient-to-r ${service.color} text-white text-sm font-medium transform hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg flex items-center space-x-2`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{service.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="bg-white/80 backdrop-blur-lg border-slate-200/60 shadow-xl dark:bg-slate-800/80 dark:backdrop-blur-lg dark:border-slate-700/60 rounded-2xl p-8 border">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  Send us a message
                </h2>
                <p className="text-slate-600 dark:text-slate-300">
                  Fill out the form below and we'll get back to you within one
                  business day.
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12 animate-fade-in">
                  <CheckCircle className="w-16 h-16 text-amber-500 mx-auto mb-4 animate-bounce" />
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Thank you for reaching out. We'll be in touch soon.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        <User className="inline w-4 h-4 mr-2" />
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border bg-white/80 border-slate-300/50 text-slate-900 placeholder-slate-500 focus:ring-blue-600 hover:bg-white/90 dark:bg-slate-700/50 dark:border-slate-600/50 dark:text-white dark:placeholder-slate-400 dark:focus:ring-blue-500 dark:hover:bg-slate-700/70 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div className="group">
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        <User className="inline w-4 h-4 mr-2" />
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border bg-white/80 border-slate-300/50 text-slate-900 placeholder-slate-500 focus:ring-blue-600 hover:bg-white/90 dark:bg-slate-700/50 dark:border-slate-600/50 dark:text-white dark:placeholder-slate-400 dark:focus:ring-blue-500 dark:hover:bg-slate-700/70 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      <Mail className="inline w-4 h-4 mr-2" />
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border bg-white/80 border-slate-300/50 text-slate-900 placeholder-slate-500 focus:ring-blue-600 hover:bg-white/90 dark:bg-slate-700/50 dark:border-slate-600/50 dark:text-white dark:placeholder-slate-400 dark:focus:ring-blue-500 dark:hover:bg-slate-700/70 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300"
                      placeholder="john.doe@example.com"
                      required
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      <Phone className="inline w-4 h-4 mr-2" />
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border bg-white/80 border-slate-300/50 text-slate-900 placeholder-slate-500 focus:ring-blue-600 hover:bg-white/90 dark:bg-slate-700/50 dark:border-slate-600/50 dark:text-white dark:placeholder-slate-400 dark:focus:ring-blue-500 dark:hover:bg-slate-700/70 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300"
                      placeholder="+256 783 416 629"
                      required
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      <Building className="inline w-4 h-4 mr-2" />
                      Service of Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border bg-white/80 border-slate-300/50 text-slate-900 placeholder-slate-500 focus:ring-blue-600 hover:bg-white/90 dark:bg-slate-700/50 dark:border-slate-600/50 dark:text-white dark:placeholder-slate-400 dark:focus:ring-blue-500 dark:hover:bg-slate-700/70 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300"
                      required
                      aria-label="Service of Interest"
                    >
                      <option value="" className="bg-white dark:bg-slate-800">
                        Select a service
                      </option>
                      {services.map((service) => (
                        <option
                          key={service.value}
                          value={service.value}
                          className="bg-white dark:bg-slate-800"
                        >
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      <MessageSquare className="inline w-4 h-4 mr-2" />
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border bg-white/80 border-slate-300/50 text-slate-900 placeholder-slate-500 focus:ring-blue-600 hover:bg-white/90 dark:bg-slate-700/50 dark:border-slate-600/50 dark:text-white dark:placeholder-slate-400 dark:focus:ring-blue-500 dark:hover:bg-slate-700/70 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your needs..."
                      required
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="w-full text-white py-4 px-6 rounded-xl font-semibold bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 focus:ring-blue-600 dark:from-blue-600 dark:to-blue-700 dark:hover:from-blue-700 dark:hover:to-blue-800 dark:focus:ring-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed group shadow-lg"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3" />
                        Sending Message...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        Send Message
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Get in Touch
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                Choose your preferred way to reach us. We're here to help with
                all your accounting and advisory needs!
              </p>
            </div>

            <div className="grid gap-6">
              {contactCards.map((card, index) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={index}
                    className={`bg-gradient-to-r ${card.gradient} p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer group animate-fade-in-up`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {card.title}
                        </h3>
                        <div>{card.content}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Map */}
            <div className="mt-8 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 border border-slate-200/60 dark:border-slate-700/60">
              <iframe
                title="Frompa & Associates Office Location"
                src="https://maps.google.com/maps?q=Plot%201920%2C%20Block%20115%2C%20Gulama%2C%20Kirowoza%2C%20Old%20Jinja%20Road%2C%20Mukono%2C%20Uganda&output=embed"
                allowFullScreen
                loading="lazy"
                className="w-full h-64 border-0 transition-all duration-300 filter brightness-110 contrast-110 dark:contrast-125 dark:saturate-110"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.6s both;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default ModernContactPage;
