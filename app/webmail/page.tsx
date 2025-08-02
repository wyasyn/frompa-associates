export const metadata: Metadata = {
  title: "Webmail Access - FromPA & Associates",
  description:
    "Access your FromPA & Associates email through the webmail portal. Click to open in a new tab.",
};
import { Metadata } from "next";
import BluehostWebmail from "./_components/webmail";

export default function WebmailPage() {
  return <BluehostWebmail />;
}
