import Image from "next/image";
import React from "react";
import hero from "@/../public/hero-img.png";
import { CircleArrowRight } from "lucide-react";
import Link from "next/link";
import { title } from "process";

const HeroService = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <>
      <div className="bg-white">
        <section className="bg-[#FCF8F1] bg-opacity-30 py-10 ">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <div className="font-sans  tracking-wider text-xl text-gray-600">
                  Unleash Your Business&apos;s Potential In
                </div>
                <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-7xl leading-10 inline-block text-primary">
                  {title || "SixDesign "}

                  <div className="decoration-white underline text-black">Service</div>
                </h1>
                <div className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
                 {description || "  Elevate your online presence with our professional website redesign solutions, delivering immediate results through Link complete cycle of services. Experience amplified visitor engagement, extended session durations, and boosted conversion rates with our tailored approach to website redesign."}
                </div>
                

                <Link
                  href="#"
                  title=""
                  className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-black rounded-md lg:mt-16 hover:bg-gray-600 focus:bg-gray-600"
                  role="button"
                >
                  Contact Us
                  <svg
                    className="w-6 h-6 ml-8 -mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </Link>

                <div className="m-4 text-xs text-gray-600">
                  <ul className="flex gap-10  list list-disc">
                    <li>No Payment Required</li>
                    <li>No Strings Attached</li>
                    <li>100% Risk-Free</li>
                  </ul>
                </div>
              </div>

              <div>
                <Image
                  height={500}
                  width={500}
                  className="w-full"
                  src={hero}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HeroService;
