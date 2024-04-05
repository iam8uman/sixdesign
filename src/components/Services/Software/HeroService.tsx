import Image from "next/image";
import React from "react";
import hero from "@/../public/hero-img.png";
import { CircleArrowRight } from "lucide-react";
import Link from "next/link";
import { title } from "process";
import mousesvg from "@/../public/services/hero/mouse.svg";
import ServiceHero from "@/../public/services/hero/mobile.svg";
import imgtop from "@/../public/services/hero/tabler_click-1.svg";
import imgbottom from "@/../public/services/hero/tabler_click.svg";
import arrow from "@/../public/services/hero/arrow.svg";
import thuloblack from "@/../public/services/thuloblack.png";

const HeroService = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <>
      <div className="bg-white m-2">
        <section className="bg-[#FCF8F1] bg-opacity-30 py-10 ">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="relative">
                <div className="font-sans  tracking-wider flex gap-1 items-center text-xl text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-minus"
                  >
                    <path d="M5 12h14" />
                  </svg>{" "}
                  Service
                </div>
                <h1 className="mt-4 text-3xl font-extrabold text-black lg:mt-8 sm:text-6xl  leading-10 inline-block text-primary">
                  {/* {title || "SixDesign "} */}

                  <div className="decoration-white underline text-black">
                    Simple. Fast. Safe
                    <span className="span text-primary">.</span>
                  </div>
                </h1>
                <div className="mt-4 text-base font-sans text-black lg:mt-8 sm:text-xl">
                  {description ||
                    "  Elevate your online presence with our professional website redesign solutions, delivering immediate results through Link complete cycle of services. Experience amplified visitor engagement, extended session durations, and boosted conversion rates with our tailored approach to website redesign."}
                </div>

                <div className="underline underline-offset-4  decoration-primary font-semibold text-xs lg:text-base lg:font-bold mt-4">
                  Trusted by 300+ amazing clients across Greater Toronto Area
                </div>

                <Link
                  href="#"
                  title=""
                  className="inline-flex items-center px-6 py-4 font-semibold mt-4 text-white transition-all duration-200 bg-black rounded-md  hover:bg-gray-600 focus:bg-gray-600"
                  role="button"
                >
                  Get a Demo
                </Link>

                <div className="mouseSvg w-44 flex justify-end ">
                  {/* main image */}
                  <Image
                    height={44}
                    width={44}
                    src={mousesvg}
                    className="right-20"
                    alt=""
                  />
                </div>
                <div className="img">
                  <Image
                    height={100}
                    width={100}
                    src={thuloblack}
                    alt=""
                    className="object-contain absolute -top-20 -left-48 contrast-125 border-2 border-black border-r-2 rounded-full pl-1 pt-2 -pb-2 -pr-2"
                  />
                </div>
              </div>

              <div className="relative">
                <span className="imgtop">
                  <Image
                    height={88}
                    width={88}
                    src={imgtop}
                    className="-left-10 absolute -top-10 -rotate-90"
                    alt=""
                  />
                </span>
                <span className="imgmiddle">
                  <Image
                    height={66}
                    width={66}
                    src={arrow}
                    className="absolute -left-36 bottom-32"
                    alt=""
                  />
                </span>
                <Image
                  height={500}
                  width={500}
                  className="w-full "
                  src={ServiceHero}
                  alt=""
                />
                <span className="imgbottom">
                  <Image
                    height={50}
                    width={50}
                    src={imgbottom}
                    className="-right-6 absolute bottom-[316px] rotate-90 "
                    alt=""
                  />
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HeroService;
