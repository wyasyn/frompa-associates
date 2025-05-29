import { Metadata } from "next";
import AdvisoryPage from "@/components/pages/advisoryPage";

export const metadata: Metadata = {
  title: "Advisory Service",
};

export default function AdvisoryPageFile() {
  return <AdvisoryPage />;
}
