import Link from "next/link";
import { Mail, MapPin, Phone, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className=" mx-auto pt-8 md:pt-16">
        <div className="container grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              FROMPA &amp; ASSOCIATES
            </h3>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for accounting, auditing, and financial
              advisory services.
            </p>
            <address className="not-italic space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 flex-shrink-0" />
                <div className="ml-2">
                  Plot 1920, Block 115, Gulama, Kirowoza
                  <br />
                  Old Jinja Road, Mukono
                  <br />
                  P.O. Box 4660, Kampala, Uganda
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="ml-2">+256 783 416 629</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="ml-2">+256 757 634 878</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span className="ml-2">info@frompaandassociates.com</span>
              </div>
            </address>
          </div>

          {/* Services Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/advisory" className="hover:underline">
                  Advisory
                </Link>
              </li>
              <li>
                <Link href="/accounting" className="hover:underline">
                  Accounting
                </Link>
              </li>
              <li>
                <Link href="/audit-and-assurance" className="hover:underline">
                  Audit &amp; Assurance
                </Link>
              </li>
              <li>
                <Link href="/corporate-tax" className="hover:underline">
                  Corporate Tax
                </Link>
              </li>
              <li>
                <Link href="/trade-finance" className="hover:underline">
                  Trade Finance
                </Link>
              </li>
              <li>
                <Link
                  href="/audit-and-assurance#esg"
                  className="hover:underline"
                >
                  ESG Reporting
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:underline">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:underline">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t py-8 bg-secondary">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} FROMPA &amp; ASSOCIATES. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
