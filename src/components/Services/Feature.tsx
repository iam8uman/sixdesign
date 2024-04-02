import React from "react";
import { CornerDownRight, IndentDecrease } from "lucide-react";
import SixdesignLogo from "@/icons/Sixdesign-logo";

const Feature = () => {
  return (
    <>
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-9xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-3 lg:mt-20 lg:gap-x-8">
            <div className="transition-all duration-200 bg-white ">
              <button className="my-2 mx-16 px-6 py-1   text-center rounded-3xl text-3xl font-semibold border-2 border-black  text-black">
                Features
              </button>
              <div className=" mx-16">
                <h3 className="mt-6 text-4xl  text-start font-bold text-black">
                  Explore The Features Of Our Email Marketing
                </h3>
                <CornerDownRight size={64} className="relative ml-60" />
              </div>
            </div>

            <div className="transition-all duration-200 bg-white ">
              <div className="py-4 px-4 flex gap-3">
                <div className="logo mt-9">
                  <SixdesignLogo size="md" />
                </div>
                <div className="">
                  <h3 className="mt-6 text-xl text-start font-bold text-black">
                    Mobile Device Compatibility
                  </h3>
                  <p className="mt-1 text-base text-gray-600">
                    Intuitive interfaces that enhance user experience and guide
                    visitors towards desired actions.
                  </p>
                </div>
              </div>
              <div className="py-6 px-4 flex gap-3">
                <div className="logo mt-9">
                  <SixdesignLogo size={"md"} />
                </div>
                <div className="">
                  <h3 className="mt-6 text-xl text-start font-bold text-black">
                    Design Service
                  </h3>
                  <p className="mt-1 text-base text-gray-600">
                    Tailored website designs that reflect your brand identity
                    and captivate your audience.
                  </p>
                </div>
              </div>
            </div>

            <div className="transition-all duration-200 bg-white">
              <div className="py-4 px-4 flex gap-3">
                <div className="logo mt-9">
                  <SixdesignLogo size="md" />
                </div>
                <div className="">
                  <h3 className="mt-6 text-xl text-start font-bold text-black">
                    Responsiveness
                  </h3>
                  <p className="mt-1 text-base text-gray-600">
                    Websites optimized for seamless viewing and navigation
                    across all devices tablets.
                  </p>
                </div>
              </div>
              <div className="py-6 px-4 flex gap-3">
                <div className="logo mt-9">
                  <SixdesignLogo size={"md"} />
                </div>
                <div className="">
                  <h3 className="mt-6 text-xl text-start font-bold text-black">
                    Support
                  </h3>
                  <p className="mt-1 text-base text-gray-600">
                    We are part of your team and we&apos;ll never leave you on your
                    own. If you have issues or questions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
