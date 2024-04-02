"use client";
import React from "react";
import { ImageRevealCard } from "@/components/ui/text-reveal-card";
import BeforeImage from "@/../public/beforeImage.jpg";
import AfterImage from "@/../public/afterimage.jpg";

export default function BeforeAfter() {
  return (
    <div className="flex items-center justify-center  rounded-2xl w-full">
      <ImageRevealCard
        beforeImage={BeforeImage.src}
        afterImage={AfterImage.src}
      ></ImageRevealCard>
    </div>
  );
}
