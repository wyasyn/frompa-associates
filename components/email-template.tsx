import * as React from "react";

type ContactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: "advisory" | "accounting" | "audit" | "tax" | "trade";
  message: string;
};

// Static assets and company details
const BANNER_URL =
  "https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const COMPANY_NAME = "FROMPA & ASSOCIATES";
const COMPANY_WEBSITE = "https://frampoandadvocates.com";
const FOOTER_TEXT = `© ${new Date().getFullYear()} FROMPA & ASSOCIATES. All rights reserved.`;

export const EmailTemplate: React.FC<ContactFormValues> = ({
  firstName,
  lastName,
  email,
  phone,
  service,
  message,
}) => {
  const capitalizedService = service.charAt(0).toUpperCase() + service.slice(1);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        color: "#333",
        maxWidth: 600,
        margin: "0 auto",
        border: "1px solid #e0e0e0",
        borderRadius: 8,
        overflow: "hidden",
      }}
    >
      {/* Banner */}
      <header style={{ width: "100%" }}>
        <img
          src={BANNER_URL}
          alt="Banner"
          style={{ width: "100%", display: "block" }}
        />
      </header>

      {/* Content */}
      <main style={{ padding: 20 }}>
        <h1 style={{ margin: "0 0 10px", fontSize: 24 }}>
          Message from {firstName} {lastName},
        </h1>
        <p style={{ margin: "0 0 15px", fontSize: 16 }}>
          The user has contact about {capitalizedService} services.
        </p>

        <div
          style={{ backgroundColor: "#f9f9f9", padding: 15, borderRadius: 4 }}
        >
          <p style={{ margin: "5px 0" }}>
            <strong>Email:</strong> {email}
          </p>
          <p style={{ margin: "5px 0" }}>
            <strong>Phone:</strong> {phone}
          </p>
          <p style={{ margin: "5px 0" }}>
            <strong>Service:</strong> {capitalizedService}
          </p>
          <p style={{ margin: "5px 0" }}>
            <strong>Message:</strong>
            <br />
            {message}
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#f4f4f4",
          textAlign: "center",
          padding: 15,
          fontSize: 12,
          color: "#777",
        }}
      >
        <p style={{ margin: 0 }}>{FOOTER_TEXT}</p>
        <p style={{ margin: "5px 0 0" }}>
          <a
            href={COMPANY_WEBSITE}
            style={{ color: "#E50046", textDecoration: "none" }}
          >
            {COMPANY_NAME}
          </a>
        </p>
      </footer>
    </div>
  );
};
