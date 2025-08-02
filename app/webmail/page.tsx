import { Metadata } from "next";
import WebmailLogin from "./_components/custom-login";

export const metadata: Metadata = {
  title: "Webmail",
  description: "Access your webmail account",
};

export default function WebmailPage() {
  return <WebmailLogin />;
}
