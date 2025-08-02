"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Shield, Mail, AlertCircle } from "lucide-react";
import Image from "next/image";
import { Label } from "@/components/ui/label";

export default function WebmailLogin() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email: string): boolean => {
    // Check if it's a valid email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return false;
    }

    // Check if it's a company email
    if (!email.toLowerCase().endsWith("@frompaandassociates.com")) {
      setEmailError(
        "Please use your FROMPA & ASSOCIATES company email address"
      );
      return false;
    }

    setEmailError("");
    return true;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (value && !validateEmail(value)) {
      // Validation handled in validateEmail function
    } else {
      setEmailError("");
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Validate email before submission
      if (!validateEmail(email)) {
        return;
      }

      // Additional security check on the frontend
      if (!email.toLowerCase().endsWith("@frompaandassociates.com")) {
        throw new Error("Unauthorized email domain");
      }

      // Sanitize email for URL
      const sanitizedEmail = encodeURIComponent(email.toLowerCase().trim());

      // Add additional security parameters
      const timestamp = Date.now();
      const redirectUrl = `https://sh00051.bluehost.com:2096/login/?user=${sanitizedEmail}&t=${timestamp}&secure=1`;

      // Use replace instead of href for better security
      window.location.replace(redirectUrl);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An error occurred during login"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-card/50 flex items-center justify-center px-4">
      <Card className="shadow-2xl max-w-md w-full">
        <CardHeader className="space-y-4">
          {/* Logo Container */}
          <div className="flex justify-center">
            <Image
              src="/android-chrome-512x512.png" // Update this to your actual logo path
              alt="FROMPA & ASSOCIATES"
              width={120}
              height={120}
            />
          </div>

          <CardTitle className="text-center text-2xl font-bold ">
            FROMPA & ASSOCIATES
          </CardTitle>
          <p className="text-center  font-medium">Secure Webmail Access</p>
        </CardHeader>

        <CardContent className="space-y-6">
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className=" text-sm text-muted-foreground/50"
              >
                Company Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
                <Input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Email address"
                  className="pl-10 h-12"
                  disabled={isLoading}
                />
              </div>
              {emailError && (
                <p className="text-sm text-red-600 flex items-center space-x-1">
                  <AlertCircle className="w-4 h-4" />
                  <span>{emailError}</span>
                </p>
              )}
            </div>

            <Button
              type="submit"
              onClick={onSubmit}
              disabled={isLoading || !email || !!emailError}
              className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Connecting...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>Access Webmail</span>
                </div>
              )}
            </Button>
          </div>

          {/* Security Notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-2">
            <div className="flex items-center space-x-2 text-blue-700">
              <Shield className="w-4 h-4" />
              <span className="font-medium text-sm">Security Notice</span>
            </div>
            <p className="text-xs text-blue-600">
              Only authorized FROMPA & ASSOCIATES employees with valid company
              email addresses can access this system. All login attempts are
              monitored and logged.
            </p>
          </div>

          <p className="text-xs text-center text-muted-foreground">
            © 2025 FROMPA & ASSOCIATES | Secure Business Solutions
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
