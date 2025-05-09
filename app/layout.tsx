import type React from "react";
import type { Metadata } from "next";
import { Outfit, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const outfit = Outfit({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Frompa & Associates | Accounting, Audit, Advisory & Tax in Uganda",
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
    url: "https://www.frompaandassociates.com/",
    title: "Frompa & Associates | Accounting, Audit, Advisory & Tax in Uganda",
    description:
      "Partner-led accounting, audit & assurance, corporate tax, trade finance, CFO advisory and ESG reporting services – based in Mukono, Uganda.",
    siteName: "Frompa and Associates",
    images: [{ url: "/opengraph-image.jpg" }],
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
        className={`${outfit.variable} ${playfair.variable} ${jetbrains.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
