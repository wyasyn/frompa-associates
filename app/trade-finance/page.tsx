import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TradeFinancePage() {
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
                TRADE FINANCE SERVICES
              </h1>
              <p className=" md:text-xl">
                We provide comprehensive trade finance solutions to support your
                business operations and international trade activities.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Trade Finance Services"
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
          <Tabs defaultValue="services" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="services">Our Services</TabsTrigger>
              <TabsTrigger value="partnerships">Partnerships</TabsTrigger>
            </TabsList>
            <TabsContent value="services" className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Trade Finance Solutions
                </h2>
                <p>
                  We are providing the following Trade Finance services
                  solutions to our clients:
                </p>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Letters of Credit</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5  mt-0.5" />
                        <span>AT Sight LC</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5  mt-0.5" />
                        <span>USANCE from 30 days to 350 days</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5  mt-0.5" />
                        <span>Back-to-Back LC</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5  mt-0.5" />
                        <span>Front to Back LC</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Bank Guarantees</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5  mt-0.5" />
                        <span>Standby Letters of Credit (SBLC)</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5  mt-0.5" />
                        <span>Bank Guarantee (BG)</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5  mt-0.5" />
                        <span>Tender Guarantee (TG)</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5  mt-0.5" />
                        <span>Earnest Monday Deposit/Guarantee (EMD)</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5  mt-0.5" />
                        <span>Advance Payment Guarantees (APG)</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5  mt-0.5" />
                        <span>Performance Bank Guarantees (PBG)</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5  mt-0.5" />
                        <span>Retention Guarantee (RG)</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Accounts</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5  mt-0.5" />
                        <span>
                          Offshore Bank Accounts for Corporates and Individuals
                        </span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5  mt-0.5" />
                        <span>Charge card accounts</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5  mt-0.5" />
                        <span>
                          Merchant Accounts (Payment Gateway) for online payment
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Financial Instruments</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5  mt-0.5" />
                        <span>Proof of Funds (POF)</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5  mt-0.5" />
                        <span>Blocked Funds (BF)</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5  mt-0.5" />
                        <span>Pre-Advice messages (PA)</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5  mt-0.5" />
                        <span>Bank Comfort letters (BCL)</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5  mt-0.5" />
                        <span>Ready Willing and Able (RWA)</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Capital Markets</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5  mt-0.5" />
                        <span>Bond Issuance services</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5  mt-0.5" />
                        <span>IPO Issuance Services</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5  mt-0.5" />
                        <span>Debt Finance and Restructuring</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5  mt-0.5" />
                        <span>Equity raising through Mezzanine Funds</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5  mt-0.5" />
                        <span>
                          Infrastructure Loans for governments, Municipalities
                          etc
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="mt-8 p-6  rounded-lg">
                  <p>
                    Let us know your preferred institution from the above along
                    with "Pro-forma invoice" or "Sales Contract" to allow us to
                    send appropriate drafts for your approval. If any of the
                    above issuers are not acceptable, please let us know so that
                    we may find alternatives for your specific requirement, from
                    our highly connected network of correspondent banks.
                  </p>
                  <p>
                    To meet our compliance requirements, in general, we need
                    verified details such as Pro-forma invoice, applicant
                    information, beneficiary information, amount, currency,
                    validity period and any available Terms & Conditions.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="partnerships" className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Trade Finance Partnerships
                </h2>
                <div className=" p-6 rounded-lg">
                  <p className=" font-medium">
                    FROMPA & Associates is pleased to announce our partnerships
                    with Africa Bridge Capital Management London.
                  </p>
                  <p className="mt-4">
                    Africa Bridge Capital Management London is a Corporate
                    Finance and an Emerging Markets Investment Banking Advisory
                    Firm based in London, one of very few London firms entirely
                    focused on Sub-Saharan Africa, specifically the Oil and Gas
                    sector. Specialization: Pre-Export financing, we are however
                    sector agnostic.
                  </p>
                  <p className=" mt-4">
                    We work with a select group of international investors
                    namely The Bank of China to identify investment
                    opportunities in Africa with Bank of Industry Nigeria -
                    subsidiary BOITC | mainly Nigerian investment grade clients
                    and top-tier African corporate clients to assist them in
                    securing international financing, usually from the private
                    markets for Senior Debt, Mezzanine Debt and Equity, we are
                    currently working closely with the Afrexim Bank cairo in
                    providing Credit enhancement for our introduced
                    international F.I and or DFI keen on deploying capital in
                    Nigeria and across the continent.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Financing Options, Policy & Procedure
                </h2>
                <div className="grid gap-6 lg:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Direct Loan</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        For this method, Client can use the funded project or
                        company / project shares as collateral for the funding
                        and Client gets 100% of requested amount but if a Surety
                        Bond is required for the funding, client will receive,
                        98% of the requested amount as 2% will be used to
                        procure a Surety Bond from our insurance partner
                        (Allianz).
                      </p>
                      <p className=" mt-4">
                        Eligibility for Direct Loan is subject to our
                        management's approval with a maximum processing period
                        of 15 Business days and a maximum processing cost of
                        €100,000.
                      </p>
                      <p className=" mt-4">
                        Loan Term is up to 20 years and a grace period is up to
                        2 years. The Processing cost is payable only if the
                        client's application is approved. (Minimum funding cap
                        from Euros 1 Million & above).
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Monetized SBLC (Full Recourse LTV)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        For this method, we will have an AAA rated bank issue an
                        SBLC and have a Monetizer Monetize it for the Client for
                        a full Recourse Loan. In this method, the procured SBLC
                        will be used as collateral for the funding and Client
                        gets 85% of SBLC Face Value.
                      </p>
                      <p className=" mt-4">
                        The SBLC issuance cost is 6% of the SBLC face value and
                        Client can pay from the monetized amount after receiving
                        the monetized sum. Eligibility for Monetized SBLC is
                        subject to our management's approval with a maximum
                        processing period of 7 to 10 business Days.
                      </p>
                      <p className=" mt-4">
                        Loan term is 1 year with no grace period. (Minimum
                        funding cap from Euros 5 million & above).
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Monetized SBLC (Non-Recourse LTV)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        For this method, we will have an AAA rated bank issue an
                        SBLC and have a Monetizer Monetize it for the Client for
                        a Non-Recourse Loan. In this method, the procured SBLC
                        will be used as collateral for the funding and Client
                        gets 68% of SBLC Face Value.
                      </p>
                      <p className=" mt-4">
                        The SBLC issuance cost is 6% of the SBLC face value and
                        Client can pay from the monetized amount after receiving
                        the monetized sum. Eligibility for Monetized SBLC is
                        subject to our management's approval with a maximum
                        processing period of 7 to 10 business days.
                      </p>
                      <p className=" mt-4">
                        Loan term is not applicable because the client is not
                        obligated to repay the loan. Therefore, if a client does
                        not repay the loan in 1 year, the monetizer gets to keep
                        the SBLC and the client gets to keep the monetized sum
                        without repayment. (Minimum funding cap from Euros 5
                        Million & above).
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>
                        BANK INSTRUMENTS Lease; BG / SBLC (cash backed)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        We are in the position to facilitate and structure cash
                        backed BG/SBLCs specifically for Lease and Sale and we
                        always deliver on time and precision as Set forth in the
                        agreement.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 ">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to explore trade finance solutions?
              </h2>
              <p className="mx-auto max-w-[700px]  md:text-xl">
                Contact Frompa & Associates today to learn how our trade finance
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
