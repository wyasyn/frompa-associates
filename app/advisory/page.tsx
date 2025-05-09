import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import ServiceHero from "@/components/accounting/hero";
import { images } from "@/data/images";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advisory Service",
};

export default function AdvisoryPage() {
  return (
    <div className="flex flex-col">
      {/* Title & Intro */}
      <ServiceHero
        title="Advisory Services"
        description="Frompa & Associates helps you navigate complexity—from growth
            planning and cost control to digital transformation and talent
            management. Prepare today, succeed tomorrow."
      />

      {/* Advisory Overview */}
      <section className="py-12 md:py-40">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold">
              Strategic CFO & Leadership Support
            </h2>
            <p className="mt-4 text-pretty max-w-prose">
              Whether you need fractional CFO expertise, project-based support,
              or co-located advisory, our partner-led teams deliver tailored
              solutions to strengthen your finance function.
            </p>
            <ul className="mt-4 md:mt-8 space-y-3">
              {[
                "Fractional & interim CFO services",
                "Finance team augmentation",
                "Fundraising and IPO readiness",
                "Digitalisation & process optimisation",
                "Risk management and controls",
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mt-1" />
                  <span className="ml-3">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <Image
              src={images.advisotyImage.src}
              alt="Advisory Services"
              width={images.advisotyImage.width}
              height={images.advisotyImage.height}
              priority
              placeholder="blur"
              blurDataURL={images.advisotyImage.blurDataURL}
              className="rounded-lg object-cover shadow-lg border"
            />
          </div>
        </div>
      </section>

      {/* In-Depth Card */}
      <section className="py-12 md:py-40 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <Card className="bg-background/75 p-8">
            <CardHeader>
              <CardTitle>Empower Your Growth with Expert Guidance</CardTitle>
              <CardDescription>
                Our advisory goes beyond numbers. We partner with you to:
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6 sm:grid-cols-2">
              {[
                "Reengineer supply chains for efficiency",
                "Design incentive plans to retain top talent",
                "Structure bond and IPO issuances",
                "Optimise working capital and procurement",
                "Implement digital finance platforms",
              ].map((point) => (
                <div key={point} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <span className="ml-2 text-sm">{point}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-40">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl pb-10 font-semibold">
            Our Advisory Capabilities
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "CFO Advisory",
              "Human Capital Consulting",
              "Strategy & Growth Planning",
              "Managed & Outsourced Services",
              "Supply Chain & Capital Optimization",
              "Bond & IPO Issuance",
              "Procurement Excellence",
              "Digital Transformation",
              "Trade Finance Solutions",
            ].map((service) => (
              <Card key={service} className="p-4">
                <CardTitle className="text-lg text-muted-foreground">
                  {service}
                </CardTitle>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-16 md:py-40 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-semibold">
            Ready to strengthen your finance function?
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-pretty">
            Contact Frompa & Associates today to discover how our advisory
            services can drive your success.
          </p>
          <div className="mt-6">
            <Link href="/contact">
              <Button size="lg">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
