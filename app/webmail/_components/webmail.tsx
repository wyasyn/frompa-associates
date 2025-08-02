"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, ExternalLink, Shield } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function BluehostWebmail() {
  const handleWebmailAccess = () => {
    window.open(
      "http://webmail.frompaandassociates.com",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="min-h-screen bg-background/80  flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-xl">
          <CardHeader className="text-center space-y-4 pb-6">
            <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <Mail className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold">
                Webmail Access
              </CardTitle>
              <CardDescription className=" mt-2">
                Access your FromPA & Associates email
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <Alert className="border-amber-200 bg-amber-50">
              <Shield className="h-4 w-4 text-black/75 dark:text-blue-950" />
              <AlertDescription className="text-amber-800 text-sm">
                This will open the webmail portal in a new tab
              </AlertDescription>
            </Alert>

            <Button
              onClick={handleWebmailAccess}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 text-base transition-all duration-200 transform hover:scale-[1.02]"
              size="lg"
            >
              <Mail className="w-4 h-4 mr-2" />
              Open Webmail
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>

            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                Having trouble? Contact IT support
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
