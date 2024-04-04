import Image from "next/image";
import React from "react";
import heroimg from "@/../public/heroimg.jpg";
import { Button } from "../ui/button";


const Herotailbits = () => {
  return (
    <>
      <div className="bg-white pb-12">
        <section className="sm:py-2">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between pt-20 max-w-7xl mx-auto md:gap-x-2">
              {/* Image part */}
              <div className="  lg:mt-16 md:order-2 flex  md:left-96  sm:justify-center">
                <Image
                  height={400}
                  width={300}
                  className="mx-auto"
                  src={heroimg}
                  alt=""
                />
              </div>

              {/* Text part */}
              <div className="flex flex-col mt-10 md:mt-0 ml-6 max-w-lg md:w-1/2 md:order-1">
                <div>
                  <div className="text-2xl lg:mt-10 sm:mt-28 lg:font-medium leading-10 sm:font-bold text-black sm:text-6xl lg:text-7xl">
                    <div className="text-5xl font-extrabold lg:mb-0 lg:text-6xl">
                      We Know
                    </div>
                    <div className="text-5xl font-extrabold lg:text-6xl">
                      Real Estate
                      <span className="text-primary font-extrabold text-5xl lg:text-7xl">
                        .
                      </span>{" "}
                    </div>
                  </div>
                  <div className="text-md text-black leading-7 mt-8">
                    We build CRM for agents, MLS Website, Email Marketing,
                    Social Media Management, Landing Page, and Custom Solutions
                    with expert finesse and irresistible appeal.
                  </div>

                  <div className="button flex lg:gap-1 sm:gap-0 mt-12 ">
                    <Button className="bg-black text-md text-white mt-2 mr-2 px-10 py-6 rounded-md hover:bg-black/80">
                      Contact Us
                    </Button>

                    <Button
                      variant="outline"
                      className="m-2 text-md shrink border-t-[1px] border-black  text-black px-4 pt-[22px] pb-[24px] rounded-md lg:inline-flex"
                    >
                      Book Free Consulation
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Herotailbits;
