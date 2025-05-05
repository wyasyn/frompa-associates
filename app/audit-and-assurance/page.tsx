import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AuditAndAssurancePage() {
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
                AUDIT & ASSURANCE
              </h1>
              <p className=" md:text-xl">
                Welcome to FROMPA & ASSOCIATES - Certified Public Accountants,
                your trusted partner for Audit and Assurance Services. Our team
                of experienced professionals is dedicated to providing
                comprehensive and reliable financial auditing services to ensure
                the accuracy and integrity of your financial statements.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Audit and Assurance Services"
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
          <Tabs defaultValue="audit" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="audit">Audit Services</TabsTrigger>
              <TabsTrigger value="esg" id="esg">
                ESG Reporting
              </TabsTrigger>
            </TabsList>
            <TabsContent value="audit" className="space-y-8">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Our Audit Approach
                  </h2>
                  <p>
                    At FROMPA & ASSOCIATES, we understand the importance of
                    transparency and compliance in today's complex business
                    environment. Our audit services are tailored to meet the
                    specific needs of each client, helping you navigate
                    regulatory requirements and make informed decisions with
                    confidence.
                  </p>
                  <p>
                    With a commitment to excellence and attention to detail, our
                    team works diligently to uncover potential risks and
                    opportunities for improvement, providing valuable insights
                    that drive business growth and success. Whether you are a
                    small business or a large corporation, you can rely on
                    FROMPA & ASSOCIATES for accurate, timely, and professional
                    audit services.
                  </p>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>Audit Tools and Software</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      We use a wide range of audit tools and software's such as:
                    </p>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5  mt-0.5" />
                      <span>Audit Toolbar</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5  mt-0.5" />
                      <span>Smart Audit</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5  mt-0.5" />
                      <span>Draft Worx</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5  mt-0.5" />
                      <span>CaseWare</span>
                    </div>
                    <p className=" mt-4">
                      We select the appropriate tools depending on the needs and
                      environment of the client.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Our Audit Services
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Financial Statement Audits</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Comprehensive examination of financial statements to
                        ensure accuracy and compliance with accounting
                        standards.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Compliance Audits</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Verification of adherence to laws, regulations, and
                        internal policies.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Internal Audits</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Evaluation of internal controls and processes to
                        identify areas for improvement.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Operational Audits</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Assessment of operational efficiency and effectiveness.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Fraud Investigations</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Detection and prevention of fraudulent activities.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Risk Assessment</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Identification and evaluation of potential risks to your
                        business.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="esg" className="space-y-8">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    ESG Reporting Standards
                  </h2>
                  <p>
                    Welcome to FROMPA & ASSOCIATES - your trusted partner for
                    ESG (Environmental, Social, and Governance) Reporting
                    Standards. As businesses increasingly recognize the
                    importance of sustainability and responsible business
                    practices, ESG reporting has become a critical component of
                    corporate transparency and accountability.
                  </p>
                  <p>
                    At FROMPA & ASSOCIATES, we understand the significance of
                    ESG reporting in today's business landscape. Our team of
                    experts is dedicated to helping organizations navigate the
                    complexities of ESG reporting standards and frameworks,
                    ensuring compliance and alignment with best practices.
                  </p>
                  <p>
                    We offer comprehensive ESG reporting services tailored to
                    meet the unique needs of each client, providing guidance on
                    data collection, analysis, and reporting to enhance
                    stakeholder engagement and drive sustainable business
                    performance.
                  </p>
                </div>
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Our ESG Services</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5  mt-0.5" />
                        <div>
                          <h3 className="font-medium">
                            ESG Strategy Development
                          </h3>
                          <p>
                            Creating a comprehensive ESG strategy aligned with
                            your business goals
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5  mt-0.5" />
                        <div>
                          <h3 className="font-medium">
                            ESG Data Collection & Analysis
                          </h3>
                          <p>
                            Gathering and analyzing relevant ESG data for
                            reporting purposes
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5  mt-0.5" />
                        <div>
                          <h3 className="font-medium">
                            ESG Report Preparation
                          </h3>
                          <p>
                            Creating comprehensive ESG reports that meet
                            industry standards
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5  mt-0.5" />
                        <div>
                          <h3 className="font-medium">
                            ESG Framework Alignment
                          </h3>
                          <p>
                            Ensuring compliance with major ESG frameworks and
                            standards
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5  mt-0.5" />
                        <div>
                          <h3 className="font-medium">
                            ESG Performance Improvement
                          </h3>
                          <p>
                            Identifying areas for improvement and developing
                            action plans
                          </p>
                        </div>
                      </div>
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
                Ready to enhance your financial transparency?
              </h2>
              <p className="mx-auto max-w-[700px]  md:text-xl">
                Contact Frompa & Associates today to learn how our audit and
                assurance services can benefit your organization.
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
