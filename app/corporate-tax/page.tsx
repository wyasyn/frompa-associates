import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CorporateTaxPage() {
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
                CORPORATE TAX
              </h1>
              <p className=" md:text-xl">
                From peace of mind to strength of focus. Putting the right
                support in the right place is more than dealing with your
                compliance obligations. It's about helping your business focus
                on what matters.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Corporate Tax Services"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                We work however works best for you
              </h2>
              <p>
                We realise that your tax obligations are as diverse as the
                places in which you operate. If the support structure isn't
                right, it's hard to feel confident. This is why we are
                completely focused on delivering precisely the service you need;
                in precisely the way you expect.
              </p>
              <p>
                Managing every part of your cross-border corporate tax in-house
                is complex. Hiring and retention alone is time-consuming – it's
                also expensive and can take you away from your core focus.
                Often, outsourcing or co-sourcing is the right choice.
              </p>
              <p>
                If you need us to take care of an entire part of your corporate
                tax function, we'll get it done. Or if you simply want to
                bolster your existing teams by placing our people with yours, we
                can do that too. You decide how Frompa & Associates works with
                you.
              </p>
            </div>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>
                    All in: an approach that goes beyond best
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We take a holistic approach to your corporate tax function,
                    your global tax obligations and your strategic tax advisory
                    needs. With Frompa & Associates experts on your side
                    worldwide, we consider every angle, in every corner of the
                    globe.
                  </p>
                  <p>
                    Effective tax advisory should aim to appropriately minimise
                    your liability, while sustaining and supporting your tax
                    positions. But experience has taught us to look beyond the
                    obvious. This sometimes means going 'the long way round' –
                    to find the strategy that works for now and tomorrow,
                    without unwelcome pains, risks or disruption to your
                    business.
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
                How Frompa & Associates helps you with corporate tax
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl">
              {[
                "Efficient tax compliance",
                "Efficient tax structure",
                "Negotiating with tax authorities – rulings and disputes",
                "Tax incentives advisory",
                "Transactions structuring",
                "Due diligence into acquisition targets",
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
                Ready to optimize your tax strategy?
              </h2>
              <p className="mx-auto max-w-[700px]  md:text-xl">
                Contact Frompa & Associates today to learn how our corporate tax
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
