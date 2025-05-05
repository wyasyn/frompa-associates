import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AccountingPage() {
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
                ACCOUNTING
              </h1>
              <p className=" md:text-xl">
                Welcome to FROMPA & ASSOCIATES - Certified Public Accountants,
                your trusted partner for accounting Services. Our team of
                experienced professionals is dedicated to providing
                comprehensive and reliable financial bookkeeping and accounting
                services to ensure the accuracy and integrity of your financial
                statements.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Accounting Services"
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
                The Impact of Accounting
              </h2>
              <p>
                Accounting has a tremendous impact on a business. Further,
                accounting services are necessary for every small and large
                organization to run smoothly and efficiently. Accounting is
                engaged every time you document a transaction, file tax
                documents, or plan a cost. No matter what, you'll need to handle
                accounting service sector to run a business smoothly and
                efficiently. However, the issue is one of quality. Your records
                are likely a muddle, and you're barely scraping by if you're not
                considering recordkeeping and accounting. Therefore, at FROMP &
                ASSOCIATES – Certified Public Accountants we offer accounting
                supervision services to many businesses that use accountants to
                do accurate accounting tasks, or those that rely on digital
                accounting software to do so. We ensure that the records are
                accurate by conducting a full 100% reconciliation on each item.
              </p>
              <p className=" mt-4">
                We also offer full accounting services to our clients using
                Tally 9, Tally ERP, Zero, Odoo, Quickbooks and any other
                accounting software the client prefers.
              </p>
            </div>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Our Accounting Services</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5  mt-0.5" />
                    <div>
                      <h3 className="font-medium">Bookkeeping</h3>
                      <p>
                        Accurate and timely recording of financial transactions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5  mt-0.5" />
                    <div>
                      <h3 className="font-medium">
                        Financial Statement Preparation
                      </h3>
                      <p>
                        Comprehensive preparation of balance sheets, income
                        statements, and cash flow statements
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5  mt-0.5" />
                    <div>
                      <h3 className="font-medium">
                        Accounting Software Implementation
                      </h3>
                      <p>
                        Setup and training for Tally 9, Tally ERP, Zero, Odoo,
                        Quickbooks and other accounting software
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5  mt-0.5" />
                    <div>
                      <h3 className="font-medium">Reconciliation Services</h3>
                      <p>
                        Full 100% reconciliation on each item to ensure accuracy
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5  mt-0.5" />
                    <div>
                      <h3 className="font-medium">Financial Analysis</h3>
                      <p>
                        Detailed analysis of financial data to support business
                        decisions
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 ">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to improve your financial recordkeeping?
              </h2>
              <p className="mx-auto max-w-[700px]  md:text-xl">
                Contact Frompa & Associates today to learn how our accounting
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
