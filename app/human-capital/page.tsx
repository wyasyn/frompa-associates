import HumanCapitalPage from "@/components/pages/HumanCapital";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Human Capital",
};

export default function page() {
  return <HumanCapitalPage />;
}
