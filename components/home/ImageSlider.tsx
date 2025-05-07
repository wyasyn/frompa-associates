"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { imageList } from "@/data/images";

export default function ImageSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const paginate = (newDirection: "left" | "right") => {
    setDirection(newDirection);
    setIndex((prev) =>
      newDirection === "right"
        ? (prev + 1) % imageList.length
        : (prev - 1 + imageList.length) % imageList.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => paginate("right"), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden rounded-xl shadow-lg">
      <AnimatePresence custom={direction}>
        <motion.div
          key={index}
          className="absolute inset-0"
          custom={direction}
          initial={{ x: direction === "right" ? 100 : -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction === "right" ? -100 : 100, opacity: 0 }}
          transition={{ duration: 0.6 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, info) => {
            if (info.offset.x < -50) paginate("right");
            else if (info.offset.x > 50) paginate("left");
          }}
        >
          <Image
            src={imageList[index].src}
            alt={`Slide ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <button
        type="button"
        aria-label="Previous Slide"
        onClick={() => paginate("left")}
        className="absolute top-1/2 left-4 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        type="button"
        aria-label="Next Slide"
        onClick={() => paginate("right")}
        className="absolute top-1/2 right-4 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {imageList.map((_, i) => (
          <button
            type="button"
            aria-label={`Slide ${i + 1}`}
            key={i}
            onClick={() => {
              setDirection(i > index ? "right" : "left");
              setIndex(i);
            }}
            className={`h-2 w-2 rounded-full transition ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
