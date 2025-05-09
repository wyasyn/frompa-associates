import CorporateTaxPage from "@/components/pages/corporate-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Tax Service",
};

export default function CorporatePage() {
  return <CorporateTaxPage />;
}
