import TradeFinancePage from "@/components/pages/trade-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trade Finance Service",
};

export default function TradePage() {
  return <TradeFinancePage />;
}
