import AccountingPage from "@/components/pages/accounting";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Accounting Services | FROMPA & ASSOCIATES",
  description:
    "Expert accounting services including bookkeeping, financial statements, software implementation, and business analysis. Certified Public Accountants serving your business needs.",
};

export default function AccountingPagFile() {
  return <AccountingPage />;
}
