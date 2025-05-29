import { Insights } from "@/components/pages/Insights";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Insights & Expertise",
  description:
    "Discover thought leadership, industry insights, and expert analysis from our experienced team of professionals.",
};

export default function page() {
  return <Insights />;
}
