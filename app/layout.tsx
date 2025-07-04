import type React from "react";
import type { Metadata } from "next";
import { Lato, Playfair_Display, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["100", "300", "400", "700", "900"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template:
      "%s | Frompa & Associates | Accounting, Audit, Advisory & Tax in Uganda",
    default:
      "Frompa & Associates | Accounting, Audit, Advisory & Tax in Uganda",
  },
  description:
    "Frompa & Associates – Certified Public Accountants in Mukono, Uganda. We offer partner-led accounting, audit & assurance, corporate tax, trade finance, CFO advisory and ESG reporting services.",
  keywords:
    "Uganda accountants, audit services Uganda, corporate tax Uganda, trade finance, CFO advisory, ESG reporting, financial advisory",
  authors: [
    {
      name: "Frompa & Associates",
    },
  ],

  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Frompa & Associates | Accounting, Audit, Advisory & Tax in Uganda",
    description:
      "Partner-led accounting, audit & assurance, corporate tax, trade finance, CFO advisory and ESG reporting services – based in Mukono, Uganda.",
    siteName: "Frompa and Associates",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${lato.variable} ${playfair.variable} ${jetbrains.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Toaster position="top-right" richColors />
            <Footer />
            <Analytics />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
