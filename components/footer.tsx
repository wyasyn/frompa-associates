import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t ">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">FROMPA & ASSOCIATES</h3>
            <p className="text-sm ">
              Your trusted partner for accounting, auditing, and financial
              advisory services.
            </p>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 " />
              <span className="text-sm ">
                123 Financial Street, Business District
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 " />
              <span className="text-sm ">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 " />
              <span className="text-sm ">info@frompa-associates.com</span>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/advisory" className="text-sm  hover:underline">
                  Advisory
                </Link>
              </li>
              <li>
                <Link href="/accounting" className="text-sm  hover:underline">
                  Accounting
                </Link>
              </li>
              <li>
                <Link
                  href="/audit-and-assurance"
                  className="text-sm  hover:underline"
                >
                  Audit & Assurance
                </Link>
              </li>
              <li>
                <Link
                  href="/corporate-tax"
                  className="text-sm  hover:underline"
                >
                  Corporate Tax
                </Link>
              </li>
              <li>
                <Link
                  href="/trade-finance"
                  className="text-sm  hover:underline"
                >
                  Trade Finance
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm  hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm  hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm  hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm  hover:underline">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm  hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm  hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-sm  hover:underline">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <p className="text-center text-sm ">
            &copy; {new Date().getFullYear()} FROMPA & ASSOCIATES. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
