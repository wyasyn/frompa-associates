"use client";

import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useMobile } from "@/hooks/use-mobile";
import ModeToggle from "./mode-toggle";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import path from "path";

export function Header() {
  const isMobile = useMobile();
  const scrollDirection = useScrollDirection();

  const pathname = usePathname();

  const headerClasses = clsx(
    "sticky top-0 w-full z-50 transition-all duration-300",
    {
      "bg-background/75 backdrop-blur-sm shadow-md": scrollDirection !== "top",
      "bg-transparent": scrollDirection === "top",
      "-translate-y-full": scrollDirection === "down",
      "translate-y-0": scrollDirection !== "down",
    }
  );

  return (
    <header className={headerClasses}>
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2  ">
          <span className="text-xl font-bold font-serif text-foreground">
            FROMPA & ASSOCIATES
          </span>
        </Link>
        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-auto">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  href="/"
                  className={cn(
                    "text-lg font-medium hover:underline underline-offset-4",
                    pathname === "/" && "border-b border-b-primary"
                  )}
                >
                  Home
                </Link>
                <Link
                  href="/about-us"
                  className={cn(
                    "text-lg font-medium hover:underline underline-offset-4",
                    pathname === "/about-us" && "border-b border-b-primary"
                  )}
                >
                  About Us
                </Link>
                <div className="space-y-3">
                  <span className="text-lg font-medium">Services</span>
                  <div className="flex flex-col gap-2 pl-4">
                    <Link
                      href="/advisory"
                      className="text-base hover:underline underline-offset-4"
                    >
                      Advisory
                    </Link>
                    <Link
                      href="/accounting"
                      className="text-base hover:underline underline-offset-4"
                    >
                      Accounting
                    </Link>
                    <Link
                      href="/audit-and-assurance"
                      className="text-base hover:underline underline-offset-4"
                    >
                      Audit & Assurance
                    </Link>
                    <Link
                      href="/corporate-tax"
                      className="text-base hover:underline underline-offset-4"
                    >
                      Corporate Tax
                    </Link>
                    <Link
                      href="/trade-finance"
                      className="text-base hover:underline underline-offset-4"
                    >
                      Trade Finance
                    </Link>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className={cn(
                    "text-lg font-medium hover:underline underline-offset-4",
                    pathname === "/contact" && "border-b border-b-primary"
                  )}
                >
                  Contact
                </Link>
                <ModeToggle />
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
            <Link
              href="/"
              className={cn(
                "text-sm font-medium hover:underline underline-offset-4",
                pathname === "/" && "border-b border-b-primary"
              )}
            >
              Home
            </Link>

            <Link
              href="/about-us"
              className={cn(
                "text-sm font-medium hover:underline underline-offset-4",
                pathname === "/about-us" && "border-b border-b-primary"
              )}
            >
              About Us
            </Link>

            <div className="relative group">
              <div
                tabIndex={0}
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                className="text-sm font-medium hover:underline underline-offset-4 flex items-center gap-1"
              >
                Services{" "}
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </div>
              <div className="absolute left-0 top-full z-50 mt-2 w-56 rounded-md border backdrop-blur-sm shadow-md group-hover:opacity-100 group-hover:visible opacity-0 invisible transition-all duration-300">
                <div className="p-2 flex flex-col gap-1 bg-background/75 text-muted-foreground backdrop-blur-sm">
                  <Link
                    href="/advisory"
                    className="block px-3 py-2 text-sm rounded-md hover:bg-secondary "
                  >
                    Advisory
                  </Link>
                  <Link
                    href="/accounting"
                    className="block px-3 py-2 text-sm rounded-md hover:bg-secondary "
                  >
                    Accounting
                  </Link>
                  <Link
                    href="/audit-and-assurance"
                    className="block px-3 py-2 text-sm rounded-md hover:bg-secondary "
                  >
                    Audit & Assurance
                  </Link>
                  <Link
                    href="/corporate-tax"
                    className="block px-3 py-2 text-sm rounded-md hover:bg-secondary "
                  >
                    Corporate Tax
                  </Link>
                  <Link
                    href="/trade-finance"
                    className="block px-3 py-2 text-sm rounded-md hover:bg-secondary "
                  >
                    Trade Finance
                  </Link>
                </div>
              </div>
            </div>
            <Link
              href="/contact"
              className={cn(
                "text-sm font-medium hover:underline underline-offset-4",
                pathname === "/contact" && "border-b border-b-primary"
              )}
            >
              Contact
            </Link>
            <ModeToggle />
          </nav>
        )}
      </div>
    </header>
  );
}
