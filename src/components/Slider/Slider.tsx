"use client"

import Image from "next/image";
import { useState } from "react";
import BlogWrapper from "../BlogWrapper";
import BeforeImage from "@/../public/beforeImage.jpg";
import AfterImage from "@/../public/afterimage.jpg";
import { MoveRightIcon, UnfoldHorizontal, ZoomOutIcon } from "lucide-react";

export const Slider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

    setSliderPosition(percent);
  };

  return (
    <>
      <h2 className="text-4xl flex flex-col text-center font-bold mb-4    ">
        Design That Matters
      </h2>
      <div className="w-full relative">
        <div
          className="relative w-full max-w-[700px] aspect-[16/9] m-auto overflow-hidden select-none border-2 border-slate-300"
          onMouseMove={handleMove}
        >
          <Image
            alt=""
            fill
            priority
            src={AfterImage}
            // className="opacity-85 bg-gray-900"
          />

          <div
            className="absolute top-0 left-0 right-0 w-full max-w-[800px] aspect-[16/9] m-auto overflow-hidden select-none"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <Image
              fill
              priority
              alt=""
              src={BeforeImage}
              className="grayscale"
            />
          </div>
          <div
            className="absolute top-0 bottom-0 w-1 bg-red-500 cursor-ew-resize"
            style={{ left: `calc(${sliderPosition}% - 1px)` }}
          >
            <div className="bg-red-500 absolute rounded-full h-8 w-8 -left-3 top-[calc(50%-5px)] flex items-center justify-center">
              <UnfoldHorizontal color="white" size={16} />
              {/* Assuming ZoomOutIcon is a React component */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
