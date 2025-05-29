import { CodeOfEthics } from "@/components/pages/CodeOfEthics";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Code of Ethics",
  description:
    "Our Code of Ethics outlines the principles and standards that guide our professional conduct and decision-making.",
};

export default function page() {
  return <CodeOfEthics />;
}
