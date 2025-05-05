import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/service-card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 ">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg px-3 py-1 text-sm">
                Trusted Financial Expertise
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                FROMPA & ASSOCIATES
              </h1>
              <p className=" md:text-xl">
                Your trusted partner for accounting, auditing, and financial
                advisory services. We help businesses prepare for tomorrow with
                expert guidance and comprehensive solutions.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="#services">
                  <Button>
                    Our Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline">Contact Us</Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Frompa & Associates"
                width={600}
                height={400}
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Frompa & Associates
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                At Frompa & Associates, we understand the importance of
                transparency and compliance in today's complex business
                environment. Our services are tailored to meet the specific
                needs of each client, helping you navigate regulatory
                requirements and make informed decisions with confidence.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border  p-6 shadow-sm">
                <CheckCircle className="h-12 w-12 " />
                <h3 className="text-xl font-bold">Partner-Led Relationships</h3>
                <p className="text-center text-sm ">
                  Your relationship is always partner-led, built on a strong
                  understanding of what you need to achieve.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border  p-6 shadow-sm">
                <CheckCircle className="h-12 w-12 " />
                <h3 className="text-xl font-bold">Global Expertise</h3>
                <p className="text-center text-sm ">
                  With Frompa & Associates on board, you have global experts on
                  your side – powered by local knowledge and expertise.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border  p-6 shadow-sm">
                <CheckCircle className="h-12 w-12 " />
                <h3 className="text-xl font-bold">Comprehensive Solutions</h3>
                <p className="text-center text-sm ">
                  We offer a wide range of services to meet all your financial,
                  accounting, and advisory needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-12 md:py-24 lg:py-32 ">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Services
              </h2>
              <p className="mx-auto max-w-[700px]  md:text-xl">
                Comprehensive financial services tailored to meet your specific
                needs.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl">
              <ServiceCard
                title="Advisory"
                description="CFO advisory services, strategy consulting, and more to help your business grow."
                link="/advisory"
                icon="LightbulbIcon"
              />
              <ServiceCard
                title="Accounting"
                description="Comprehensive and reliable financial bookkeeping and accounting services."
                link="/accounting"
                icon="CalculatorIcon"
              />
              <ServiceCard
                title="Audit & Assurance"
                description="Ensuring the accuracy and integrity of your financial statements."
                link="/audit-and-assurance"
                icon="CheckCircleIcon"
              />
              <ServiceCard
                title="Corporate Tax"
                description="Efficient tax compliance, structure, and advisory services."
                link="/corporate-tax"
                icon="BarChartIcon"
              />
              <ServiceCard
                title="Trade Finance"
                description="Letters of Credit, Bank Guarantees, and other trade finance solutions."
                link="/trade-finance"
                icon="GlobeIcon"
              />
              <ServiceCard
                title="ESG Reporting"
                description="Environmental, Social, and Governance reporting standards and guidance."
                link="/audit-and-assurance#esg"
                icon="LeafIcon"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Prepare for Tomorrow?
              </h2>
              <p className="mx-auto max-w-[700px]  md:text-xl">
                Contact Frompa & Associates today to learn how our services can
                benefit your organization.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button>
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#services">
                <Button variant="outline">Explore Services</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
