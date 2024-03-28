import Header from "@/components/Navbar/Header";
import Service from "@/components/Services/Service";
import Image from "next/image";
import React from "react";
import logo from "@/../public/crowny-logo.svg";
import hero from "@/../public/hero-img.png";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { CircleArrowRight } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="bg-white">
        <section className="bg-[#FCF8F1] bg-opacity-30 py-10 ">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <p className="font-semibold tracking-wider text-xl text-gray-600">
                  Unleash Your Website&apos;s Potential
                </p>
                <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-7xl underline-offset-3   z-10 underline decoration-yellow-400">
                  Website Design {" "}
                  
                  <span className="decoration-white underline">Service</span>
                </h1>
                <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
                  Elevate your online presence with our professional website
                  redesign solutions, delivering immediate results through Link
                  complete cycle of services. Experience amplified visitor
                  engagement, extended session durations, and boosted conversion
                  rates with our tailored approach to website redesign.
                </p>
                <div className="flex gap-6 mt-5 ">
                  <p className="flex gap-2">
                    <CircleArrowRight color="#000000" />
                    Pilot Run
                  </p>
                  <p className="flex gap-2">
                    <CircleArrowRight color="#000000" />
                    Pilot Run
                  </p>
                  <p className="flex gap-2">
                    <CircleArrowRight color="#000000" />
                    Pilot Run
                  </p>
                </div>

                <Link
                  href="#"
                  title=""
                  className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-md lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400"
                  role="button"
                >
                  Join for free
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

                <p className="m-4 text-xs text-gray-600">
                  <ul className="flex gap-10  list list-disc">
                    <li>No Payment Required</li>
                    <li>No Strings Attached</li>
                    <li>100% Risk-Free</li>
                  </ul>
                </p>
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

export default page;
