import ContactPage from "@/components/pages/contatct-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function ContactPageMain() {
  return <ContactPage />;
}
