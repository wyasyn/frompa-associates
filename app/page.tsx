import { Hero } from "@/components/home/hero";
import { About } from "@/components/home/about";
import ServicesSection from "@/components/home/services";
import { CtaSection } from "@/components/home/call-to-action";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <ServicesSection />

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
}
