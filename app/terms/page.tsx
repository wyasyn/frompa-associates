import { TermsOfService } from "@/components/pages/TermsOfService";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for FROMPA & ASSOCIATES",
};

export default function page() {
  return <TermsOfService />;
}
