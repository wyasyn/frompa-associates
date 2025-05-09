import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { images } from "@/data/images";
import ServiceHero from "@/components/accounting/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accounting Service",
};

export default function AccountingPage() {
  return (
    <div className="flex flex-col">
      {/* Title & Intro */}
      <ServiceHero
        title="Accounting Services"
        description="Welcome to FROMPA & ASSOCIATES, Certified Public Accountants.
            Our accounting services are designed to deliver accurate financial
            data, streamline processes, and support your business growth with
            expert bookkeeping, statement preparation, and software
            implementation."
      />

      {/* Services Overview with Image */}
      <section className="w-full bg-secondary">
        <div className="container mx-auto px-4 md:px-6 grid gap-8 lg:grid-cols-2 items-center">
          <div className="py-16">
            <h2 className="text-2xl font-semibold">Why Choose Us?</h2>
            <ul className="mt-4 space-y-4">
              {[
                "Reliable bookkeeping to keep your records up-to-date",
                "Comprehensive financial statement preparation",
                "Seamless accounting software setup and training",
                "100% reconciliation for total accuracy",
                "Actionable financial analysis to guide decisions",
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
              src={images.accountingImage.src}
              alt="Accounting Team"
              width={images.accountingImage.width}
              height={images.accountingImage.height}
              placeholder="blur"
              priority
              blurDataURL={images.accountingImage.blurDataURL}
              className=" object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Detailed Service Cards */}
      <section className="w-full py-12 md:py-40">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-semibold text-center">
            Our Accounting Solutions
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Bookkeeping",
                desc: "Accurate transaction recording and ledger management",
              },
              {
                title: "Statement Prep",
                desc: "Balance sheets, P&L, and cash flow statements",
              },
              {
                title: "Software Setup",
                desc: "Tally, Zero, Odoo, QuickBooks configuration",
              },
              {
                title: "Reconciliation",
                desc: "Full-item checks to ensure perfect accuracy",
              },
              {
                title: "Financial Analysis",
                desc: "Insights and reports to drive strategy",
              },
            ].map((svc) => (
              <Card key={svc.title} className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>{svc.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">{svc.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="w-full py-16 md:py-40 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-semibold">
            Ready to improve your financial recordkeeping?
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-pretty">
            Contact Frompa & Associates today to learn how our accounting
            services can benefit your organization.
          </p>
          <div className="mt-6">
            <Link href="/contact">
              <Button size="lg">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
