import * as React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Link,
  Tailwind,
} from "@react-email/components";

type ContactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service:
    | "audit"
    | "tax"
    | "accounting"
    | "governance"
    | "trade"
    | "advisory"
    | "hr";
  message: string;
};

const COMPANY_NAME = "FROMPA & ASSOCIATES";
const COMPANY_WEBSITE = "https://frompaandassociates.com";

export const ContactFormEmail: React.FC<ContactFormValues> = ({
  firstName,
  lastName,
  email,
  phone,
  service,
  message,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <Html>
      <Tailwind>
        <Head />
        <Body className="bg-white font-sans">
          <Container className="max-w-2xl mx-auto border border-gray-200 rounded-lg overflow-hidden">
            <Section className="text-center py-6">
              <img
                src="https://www.frompaandassociates.com/android-chrome-512x512.png"
                alt={`${COMPANY_NAME} Logo`}
                width={128}
                height={128}
                className="mx-auto w-32 h-auto"
              />
            </Section>
            {/* Main Content */}
            <Section className="p-8">
              <Heading className="text-2xl font-bold text-gray-800 mb-4 mt-0">
                You have received a new message from {firstName} {lastName}
              </Heading>
              <Text className="text-base text-gray-800 mb-5 leading-relaxed">
                A client has reached out regarding{" "}
                <strong className="font-semibold">{service}</strong> services.
              </Text>

              <Section className="bg-gray-50 p-5 rounded border my-5">
                <Text className="text-sm text-gray-800 my-2 leading-snug">
                  <strong className="font-semibold">Email:</strong> {email}
                </Text>
                <Text className="text-sm text-gray-800 my-2 leading-snug">
                  <strong className="font-semibold">Phone:</strong> {phone}
                </Text>
                <Text className="text-sm text-gray-800 my-2 leading-snug">
                  <strong className="font-semibold">Service:</strong> {service}
                </Text>
                <Text className="text-sm text-gray-800 my-2 leading-snug">
                  <strong className="font-semibold">Message:</strong>
                </Text>
                <Text className="text-sm text-gray-800 mt-2 mb-0 leading-snug whitespace-pre-wrap">
                  {message}
                </Text>
              </Section>
            </Section>

            {/* Footer */}
            <Section className="bg-gray-100 text-center p-4">
              <Text className="text-xs text-gray-600 m-0">
                © {currentYear} {COMPANY_NAME}. All rights reserved.
              </Text>
              <Text className="text-xs mt-1 mb-0">
                <Link
                  href={COMPANY_WEBSITE}
                  className="text-pink-600 no-underline"
                >
                  {COMPANY_NAME}
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormEmail;
