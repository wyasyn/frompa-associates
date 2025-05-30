"use client";

import Link from "next/link";
import { ChevronDown, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useMobile } from "@/hooks/use-mobile";
import ModeToggle from "./mode-toggle";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Logo from "./logo";
import { useState, useEffect } from "react";

// Custom two-line menu icon component
const MenuIcon = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="3" y1="8" x2="21" y2="8" />
    <line x1="3" y1="16" x2="21" y2="16" />
  </svg>
);

export function Header() {
  const isMobile = useMobile();
  const scrollDirection = useScrollDirection();
  const pathname = usePathname();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close services dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setIsServicesOpen(false);
    if (isServicesOpen) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [isServicesOpen]);

  const services = [
    { name: "Advisory", href: "/advisory" },
    { name: "Accounting", href: "/accounting" },
    { name: "Audit & Assurance", href: "/audit-and-assurance" },
    { name: "Corporate Tax", href: "/corporate-tax" },
    { name: "Trade Finance", href: "/trade-finance" },
  ];

  const headerClasses = clsx(
    "sticky top-0 w-full z-50 transition-all duration-500 ease-out",
    {
      "bg-background/80 backdrop-blur-md shadow-lg border-b border-border/50":
        scrollDirection !== "top",
      "bg-transparent": scrollDirection === "top",
      "-translate-y-full": scrollDirection === "down",
      "translate-y-0": scrollDirection !== "down",
    }
  );

  const isActiveLink = (href: string) => pathname === href;

  const NavLink = ({
    href,
    children,
    className = "",
    isActive = false,
  }: {
    href: string;
    children: React.ReactNode;
    className?: string;
    isActive?: boolean;
  }) => (
    <Link
      href={href}
      className={cn(
        "relative text-sm font-medium transition-all duration-300 hover:text-primary px-3 py-2 rounded-md",
        isActive
          ? "text-primary bg-primary/10 shadow-sm"
          : "hover:bg-accent/50",
        className
      )}
    >
      {children}
    </Link>
  );

  const MobileNavLink = ({
    href,
    children,
    onClick,
  }: {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
  }) => (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "text-lg font-medium transition-all duration-300 hover:text-primary px-4 py-3 rounded-lg",
        isActiveLink(href)
          ? "text-primary bg-primary/10 shadow-sm"
          : "hover:bg-accent/50"
      )}
    >
      {children}
    </Link>
  );

  return (
    <header className={headerClasses}>
      <div className="container flex h-16 items-center">
        {isMobile ? (
          <>
            {/* Mobile Layout: Menu - Logo - Toggle */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-accent/50 transition-colors duration-200"
                >
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-80 bg-background/95 backdrop-blur-md border-l border-border/50"
              >
                <nav className="flex flex-col gap-6 mt-8">
                  <MobileNavLink
                    href="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </MobileNavLink>

                  <MobileNavLink
                    href="/about-us"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About Us
                  </MobileNavLink>

                  <div className="space-y-4">
                    <span className="text-lg font-medium text-muted-foreground px-4">
                      Services
                    </span>
                    <div className="flex flex-col gap-2 pl-4 border-l-2 border-border/30">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={cn(
                            "text-base hover:text-primary transition-all duration-200 px-3 py-2 rounded-md",
                            isActiveLink(service.href)
                              ? "text-primary bg-primary/10 shadow-sm"
                              : "hover:bg-accent/50"
                          )}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <MobileNavLink
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </MobileNavLink>
                </nav>
              </SheetContent>
            </Sheet>

            {/* Centered Logo */}
            <div className="flex-1 flex justify-center">
              <Logo />
            </div>

            {/* Mode Toggle on Right */}
            <ModeToggle />
          </>
        ) : (
          <>
            {/* Desktop Layout */}
            <Logo />
            <nav className="ml-auto flex gap-8 items-center">
              <NavLink href="/" isActive={isActiveLink("/")}>
                Home
              </NavLink>

              <NavLink href="/about-us" isActive={isActiveLink("/about-us")}>
                About Us
              </NavLink>

              <div
                className="relative group"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsServicesOpen(!isServicesOpen);
                }}
              >
                <button
                  className={cn(
                    "text-sm font-medium transition-all duration-300 flex items-center gap-1 px-3 py-2 rounded-md",
                    "hover:text-primary",
                    services.some((service) => isActiveLink(service.href))
                      ? "text-primary bg-primary/10 shadow-sm"
                      : "hover:bg-accent/50"
                  )}
                  aria-haspopup="true"
                  aria-expanded={isServicesOpen}
                >
                  Services
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-300",
                      isServicesOpen && "rotate-180"
                    )}
                  />
                </button>

                <div
                  className={cn(
                    "absolute left-0 top-full z-50 mt-3 w-64 rounded-lg",
                    "bg-background/95 backdrop-blur-md border border-border/50 shadow-lg",
                    "transition-all duration-300 origin-top",
                    isServicesOpen
                      ? "opacity-100 visible scale-100 translate-y-0"
                      : "opacity-0 invisible scale-95 -translate-y-2"
                  )}
                >
                  <div className="p-2">
                    {services.map((service, index) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className={cn(
                          "block px-4 py-3 text-sm rounded-md transition-all duration-200",
                          "hover:bg-accent/50 hover:text-primary hover:translate-x-1",
                          "border-l-2 border-transparent hover:border-primary/30",
                          isActiveLink(service.href) &&
                            "bg-primary/10 text-primary border-primary/50 shadow-sm"
                        )}
                        style={{
                          animationDelay: isServicesOpen
                            ? `${index * 50}ms`
                            : "0ms",
                        }}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <NavLink href="/contact" isActive={isActiveLink("/contact")}>
                Contact
              </NavLink>

              <div className="ml-2">
                <ModeToggle />
              </div>
            </nav>
          </>
        )}
      </div>
    </header>
  );
}
