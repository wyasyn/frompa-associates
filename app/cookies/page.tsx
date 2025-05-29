import { CookiePolicy } from "@/components/pages/CookiePolicy";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
};

export default function page() {
  return <CookiePolicy />;
}
