import AboutUsPage from "@/components/about/about-page";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return <AboutUsPage />;
}
