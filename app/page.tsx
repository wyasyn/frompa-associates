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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AccountingService",
            name: "Frompa & Associates",
            url: "https://www.frompaandassociates.com/",
            logo: "https://www.frompaandassociates.com/favicon-16x16.png",
            telephone: "+256783416629",
            email: "info@frompaandassociates.com",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "Plot 1920, Block 115, Gulama, Kirowoza, Old Jinja Road",
              addressLocality: "Mukono",
              postalCode: "P.O. Box 4660",
              addressRegion: "Central Region",
              addressCountry: "UG",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 0.375, // adjust to real coords
              longitude: 32.755, // adjust to real coords
            },
            areaServed: "UG",
            description:
              "Certified Public Accountants offering accounting, audit, advisory, corporate tax, trade finance and ESG reporting services in Uganda.",
            openingHours: "Mo-Fr 09:00-17:00",
            sameAs: [
              "https://www.linkedin.com/company/frompa-and-associates",
              "https://www.facebook.com/frompaandassociates",
            ],
          }),
        }}
      />
    </div>
  );
}
