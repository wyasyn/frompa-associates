import ITConsulting from "@/components/pages/ITConsulting";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Consulting Services",
  description:
    "Expert IT consulting services to help your business thrive in the digital age. From strategy to implementation, we provide tailored solutions for your IT needs.",
};

export default function page() {
  return <ITConsulting />;
}
