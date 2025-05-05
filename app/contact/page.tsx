import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 ">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Contact Us
              </h1>
              <p className="mx-auto max-w-[700px]  md:text-xl">
                Get in touch with our team to learn more about our services and
                how we can help your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">
                Get In Touch
              </h2>
              <p>
                Fill out the form below and one of our representatives will get
                back to you as soon as possible.
              </p>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input
                      id="first-name"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" placeholder="Enter your last name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Service of Interest</Label>

                  <select
                    name="service"
                    title="Service of Interest"
                    id="service"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select a service</option>
                    <option value="advisory">Advisory</option>
                    <option value="accounting">Accounting</option>
                    <option value="audit">Audit & Assurance</option>
                    <option value="tax">Corporate Tax</option>
                    <option value="trade">Trade Finance</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Enter your message"
                    className="min-h-[120px]"
                  />
                </div>
                <Button type="submit" className="w-full ">
                  Send Message <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">
                Contact Information
              </h2>
              <p>You can also reach us using the contact information below.</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Address</CardTitle>
                    <CardDescription>Our office location</CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-start space-x-2">
                    <MapPin className="h-5 w-5  mt-0.5" />
                    <span>123 Financial Street, Business District</span>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Phone</CardTitle>
                    <CardDescription>Call us directly</CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-start space-x-2">
                    <Phone className="h-5 w-5 " />
                    <span>+1 (555) 123-4567</span>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Email</CardTitle>
                    <CardDescription>Send us an email</CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-start space-x-2">
                    <Mail className="h-5 w-5  mt-0.5" />
                    <span>info@frompa-associates.com</span>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Hours</CardTitle>
                    <CardDescription>Our working hours</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday - Sunday: Closed</p>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-6">
                <iframe
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215266754809!2d-73.9878584!3d40.7484405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9aeb1c6b5%3A0x35b1cfbc89a6097f!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620247254223!5m2!1sen!2sus"
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg w-full h-[300px] border-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
