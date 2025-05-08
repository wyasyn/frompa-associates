"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export function ServiceCard({
  title,
  description,
  link,
  Icon,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Card className="h-full flex flex-col bg-background/30">
        <CardHeader className="flex-col items-center text-center pb-0">
          <Icon className="h-12 w-12 text-primary mb-3 transition-colors group-hover:text-accent" />
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground max-w-[40ch]">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-grow" />

        <CardFooter className="pt-0">
          <Link href={link} passHref className="mx-auto">
            <Button
              variant="outline"
              className="w-full justify-center group-hover:bg-primary group-hover:text-white transition"
              aria-label={`Learn more about ${title}`}
            >
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
