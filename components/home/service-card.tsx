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
  gradient?: string;
  iconColor?: string;
  index?: number;
}

export function ServiceCard({
  title,
  description,
  link,
  Icon,
  gradient = "from-primary/10 to-accent/10",
  iconColor = "text-primary",
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.article
      whileHover={{
        scale: 1.02,
        rotateY: 2,
        rotateX: 2,
      }}
      whileTap={{ scale: 0.98 }}
      transition={{
        duration: 0.4,
        ease: [0.25, 0.25, 0.25, 0.75],
      }}
      className="group perspective-1000 h-full"
    >
      <Card className="h-full flex flex-col bg-background/80 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 rounded-2xl border-0 ring-1 ring-border hover:ring-primary/30 relative overflow-hidden">
        {/* Background gradient overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        {/* Animated border effect */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 animate-pulse" />
        </div>

        <CardHeader className="flex-col items-center text-center pb-4 relative z-10">
          <motion.div
            whileHover={{
              rotateY: 180,
              scale: 1.1,
            }}
            transition={{ duration: 0.6 }}
            className="relative mb-4"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            />
            <div className="relative p-4 bg-background/50 rounded-2xl border border-primary/10 group-hover:border-primary/30 transition-colors duration-300">
              <Icon
                className={`h-8 w-8 ${iconColor} transition-all duration-300 group-hover:scale-110`}
                aria-hidden="true"
              />
            </div>
          </motion.div>

          <CardTitle className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
            {title}
          </CardTitle>

          <CardDescription className="text-sm text-muted-foreground max-w-[35ch] leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-grow relative z-10" />

        <CardFooter className="pt-0 relative z-10">
          <Link href={link} passHref legacyBehavior>
            <a className="w-full" aria-label={`Learn more about ${title}`}>
              <Button
                variant="outline"
                className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 rounded-xl h-12 font-medium"
              >
                <span>Learn More</span>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </Button>
            </a>
          </Link>
        </CardFooter>

        {/* Floating elements for visual interest */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-4 left-4 w-1 h-1 bg-accent/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </Card>
    </motion.article>
  );
}
