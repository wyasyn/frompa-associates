import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AdvisoryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 ">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg  px-3 py-1 text-sm ">
                FROMPA & ASSOCIATES
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                ADVISORY
              </h1>
              <p className=" md:text-xl">
                As demands multiply, so do the opportunities. Growth does not
                arrive alone. With it comes the pressure to make sure investors
                are reassured, processes tightened, costs controlled, regulators
                satisfied, and talent retained. All against a backdrop of
                relentless digitalisation.
              </p>
              <p className=" md:text-xl font-medium">
                What if we could help you to prepare now, for tomorrow?
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Advisory Services"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CFO Advisory Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                For Chief Financial Officers. And leaders who need a CHIEF
                FINANCIAL OFFICER.
              </h2>
              <p>
                Our CHIEF FINANCIAL OFFICER advisory service is where many
                businesses first get to know Frompa & Associates.
              </p>
              <p>
                Perhaps you're a CHIEF FINANCIAL OFFICER looking to bolster your
                existing function. Maybe you need the skills of a CHIEF
                FINANCIAL OFFICER but don't need full-time support – or you
                could be looking to bring in expertise before you make a
                permanent hire.
              </p>
              <p>
                Whatever the reason, our CHIEF FINANCIAL OFFICER advisory team
                will help you to strengthen your finance function, especially
                valuable if you are considering fundraising or an IPO.
              </p>
              <p>
                With Frompa & Associates, you know that your relationship is
                always partner-led, built on a strong understanding of what you
                need to achieve. All backed by the international team, services
                and contacts you need to succeed.
              </p>
            </div>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>
                    Where will growth come from? Where will risks emerge?
                  </CardTitle>
                  <CardDescription>
                    The more complex your global operations, the harder it can
                    be to achieve efficiencies – and avoid missteps.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    With Frompa & Associates on board, you have global experts
                    on your side – powered by local knowledge and expertise.
                  </p>
                  <p className=" mt-4">
                    For example, that could mean transforming your accounting
                    function, giving you the key data you need to make decisions
                    and spur growth. And yes, we offer co-located services as
                    well as outsourcing.
                  </p>
                  <p className=" mt-4">
                    It could mean looking at how you engage, develop and
                    incentivise your people, bringing a growth focus to the way
                    you approach human resources. Or it could be about
                    understanding the strengths, weaknesses and opportunities
                    across complex supply chains, then reengineering them to fit
                    your commercial goals and investors' ambitions.
                  </p>
                  <p className=" mt-4 font-medium">
                    Wherever the opportunities, we add the scale and expertise
                    you need.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 ">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Frompa & Associates shall help you with consulting
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl">
              {[
                "CHIEF FINANCIAL OFFICER advisory services",
                "Human capital",
                "Strategy consulting",
                "Outsourcing and managed services",
                "Supply chain and working capital consulting",
                "Procurement",
                "Bond issuance",
                "IPO issuance",
                "Trade Finance",
              ].map((service, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-2 rounded-lg border  p-4 shadow-sm"
                >
                  <CheckCircle className="h-5 w-5  mt-0.5" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to strengthen your finance function?
              </h2>
              <p className="mx-auto max-w-[700px]  md:text-xl">
                Contact Frompa & Associates today to learn how our advisory
                services can benefit your organization.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button>
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
