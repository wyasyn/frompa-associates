import { ClientPortal } from "@/components/pages/ClientPortal";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Portal",
};

export default function page() {
  return <ClientPortal />;
}
