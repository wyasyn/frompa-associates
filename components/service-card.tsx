import Link from "next/link";
import {
  LightbulbIcon,
  CalculatorIcon,
  CheckCircleIcon,
  BarChartIcon,
  GlobeIcon,
  LeafIcon,
  ArrowRight,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
  icon: string;
}

export function ServiceCard({
  title,
  description,
  link,
  icon,
}: ServiceCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "LightbulbIcon":
        return <LightbulbIcon className="h-10 w-10 " />;
      case "CalculatorIcon":
        return <CalculatorIcon className="h-10 w-10 " />;
      case "CheckCircleIcon":
        return <CheckCircleIcon className="h-10 w-10 " />;
      case "BarChartIcon":
        return <BarChartIcon className="h-10 w-10 " />;
      case "GlobeIcon":
        return <GlobeIcon className="h-10 w-10 " />;
      case "LeafIcon":
        return <LeafIcon className="h-10 w-10 " />;
      default:
        return <LightbulbIcon className="h-10 w-10 " />;
    }
  };

  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="flex justify-center mb-4">{getIcon()}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {/* Content can be added here if needed */}
      </CardContent>
      <CardFooter>
        <Link href={link} className="w-full">
          <Button variant="outline" className="w-full ">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
