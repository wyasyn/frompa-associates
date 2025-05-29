"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";

const testimonials = [
  {
    id: 1,
    quote:
      "FROMPA & ASSOCIATES consistently delivers expert guidance with integrity. Their audit insights helped us unlock critical funding opportunities.",
    author: "Miriam Akello",
    position: "Finance Director",
    company: "ACODE Uganda",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Their deep understanding of Uganda's regulatory landscape combined with international best practices has been invaluable to our operations.",
    author: "James Mukasa",
    position: "Chief Executive Officer",
    company: "Hope SACCO",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "The team's professionalism and attention to detail in our corporate restructuring project exceeded all expectations. Truly exceptional service.",
    author: "Sarah Namugga",
    position: "Managing Director",
    company: "Federation of Uganda Employers",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "FROMPA's tax advisory services have been instrumental in optimizing our compliance strategy while maximizing our operational efficiency.",
    author: "David Okello",
    position: "Head of Finance",
    company: "Royal Norwegian Embassy",
    rating: 5,
  },
];

export function TestimonialStrip() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
  };

  interface Testimonial {
    id: number;
    quote: string;
    author: string;
    position: string;
    company: string;
    rating: number;
  }

  const goToTestimonial = (index: number): void => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="relative bg-gradient-to-br from-muted via-muted/80 to-background py-16 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/20 blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-accent/20 blur-xl animate-pulse delay-1000" />
      </div>

      <div className="container px-4 md:px-6 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading organizations across Uganda and beyond
          </p>
        </motion.div>

        {/* Main testimonial card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative bg-background/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-border/50"
          >
            {/* Quote icon */}
            <motion.div
              initial={{ opacity: 0, rotate: -12 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -top-4 -left-4 bg-primary rounded-full p-3 shadow-lg"
            >
              <Quote className="h-6 w-6 text-primary-foreground" />
            </motion.div>

            {/* Stars */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center mb-6"
            >
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
                >
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                </motion.div>
              ))}
            </motion.div>

            {/* Testimonial content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <blockquote className="text-lg md:text-xl lg:text-2xl leading-relaxed text-foreground mb-8 italic">
                  "{currentTestimonial.quote}"
                </blockquote>

                <div className="space-y-2">
                  <div className="font-semibold text-lg text-foreground">
                    {currentTestimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {currentTestimonial.position}
                  </div>
                  <div className="text-sm font-medium text-primary">
                    {currentTestimonial.company}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex items-center justify-center mt-8 space-x-6"
          >
            {/* Previous button */}
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="rounded-full p-2 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Dots indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  title={`Go to testimonial ${index + 1}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            {/* Next button */}
            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="rounded-full p-2 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </motion.div>

          {/* Auto-play indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center mt-4"
          >
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {isAutoPlaying ? "Auto-playing" : "Paused"} • Click to{" "}
              {isAutoPlaying ? "pause" : "resume"}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
