import { images } from "@/data/images";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export function About() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        {/* Heading & Intro */}
        <div className="mx-auto max-w-2xl text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight mb-4 md:mb-8 sm:text-4xl md:text-5xl">
            Who We Are
          </h2>
          <p className="max-w-prose mx-auto text-pretty">
            For over two decades, Frompa & Associates has been illuminating
            financial paths for businesses of all sizes. With deep local roots
            and global insight, we empower you with clarity, confidence, and the
            tools to thrive in an ever-changing landscape.
          </p>
        </div>

        {/* Image + Points */}
        <div className=" mt-8 md:mt-20 grid gap-8 items-stretch md:grid-cols-2">
          {/* Left: Full‑height Image */}
          <div className="relative h-[400px] md:h-auto">
            <Image
              src={images.hero3.src}
              alt="Frompa & Associates Team"
              fill
              className="rounded-lg object-cover shadow-lg"
            />
          </div>

          {/* Right: Highlights */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-8 w-8 text-primary" />
              <div>
                <h3 className="text-xl font-semibold">
                  Partner‑Led Relationships
                </h3>
                <p className="mt-1 text-sm text-muted-foreground max-w-[40ch]">
                  Every engagement is guided by a partner, ensuring you get
                  tailored advice and direct access to senior expertise.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="h-8 w-8 text-primary" />
              <div>
                <h3 className="text-xl font-semibold">
                  Local Roots, Global Reach
                </h3>
                <p className="mt-1 text-sm text-muted-foreground max-w-[40ch]">
                  We blend deep knowledge of Uganda’s market with international
                  best practices—giving you the best of both worlds.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="h-8 w-8 text-primary" />
              <div>
                <h3 className="text-xl font-semibold">End‑to‑End Solutions</h3>
                <p className="mt-1 text-sm text-muted-foreground max-w-[40ch]">
                  From audit & assurance to corporate finance and tax advisory,
                  our comprehensive services cover every step of your journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
