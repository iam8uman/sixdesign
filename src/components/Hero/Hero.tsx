import Image from "next/image";
import React from "react";
import Imgone from "@/../public/avatar_1.jpg";
import profile from "@/../public/avatar.jpg";
import Imgonee from "@/../public/avatarr.jpg";
import Imgoneee from "@/../public/avatarrr.jpg";
import heroimg from "@/../public/heroimg.jpg";
import contact from "@/../public/contact-bottom-2.png";
import { Slider } from "../Slider/Slider";
import { Button } from "../ui/button";
import beforeafter from "@/../public/beforeafter.png";
import uncle from "@/../public/uncle.png";
import uncletwo from "@/../public/unclekochora.png";
import thulopink from "@/../public/services/thulopink.png";
import thuloblack from "@/../public/services/thuloblack.png";
import sanoblack from "@/../public/services/sanoblck.png";
import sanopink from "@/../public/services/sanopink.png";

const Herotailbits = () => {
  return (
    <>
      <div className="bg-white pb-12">
        <section className="sm:py-2 ">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center max-w-7xl grid-cols-1 mx-auto lg:grid-cols-6 md:gap-x-2 xl:gap-x-8  ">
              <div className="lg:col-span-3">
                <div className="max-w-lg mt-10">
                  <div className="text-2xl lg:font-medium leading-10 sm:font-bold  text-black sm:text-6xl lg:text-7xl">
                    <div className="text-5xl font-bold lg:mb-4   lg:text-7xl">
                      We Know
                    </div>
                    <div className="text-5xl font-bold lg:text-7xl">
                      Real Estate
                      <span className="text-primary font-bold text-5xl lg:text-7xl">
                        .
                      </span>{" "}
                    </div>
                  </div>
                  <div className="text-md text-gray-600 mt-8">
                    We build CRM for agents, MLS Website, Email Marketing,
                    Social Media Management, Landing Page, and Custom Solutions
                    with expert finesse and irresistible appeal.
                  </div>

                  <div className="button flex gap-1 mt-12 mx-auto">
                    <Button className="bg-black text-md text-white m-2  border-transparent px-10 py-6 rounded-md hover:bg-black/80">
                      Contact Us
                    </Button>

                    <Button
                      variant="outline"
                      className="m-1 text-md border-2 border-gray-700 text-black px-6 py-6 rounded-md hidden lg:inline-flex"
                    >
                      Book Free Consulation
                    </Button>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 mt-8">
                <div className="mero flex justify-between lg:gap-16 gap-10 ml-4 lg:ml-32 sm:w-[12rem] lg:w-[28rem]">
                  <div className="imgone">
                    <Image
                      height={150}
                      width={200}
                      className="object-contain ml-10 contrast-100  relative bottom-6  border-t-gray-700 rounded-full border-r-gray-700 border-t-[5px] border-r-[5px] hover:object-cover hover:scale-105 transition-transform delay-150 ease-linear"
                      src={uncle}
                      alt=""
                    />
                    <div className="flex justify-center gap-12">
                      <Image
                        height={40}
                        width={40}
                        className="object-cover w-12 h-12 contrast-125 rounded-full border-slate-200 border-2 relative bottom-8"
                        src={thuloblack}
                        alt=""
                      />
                      <Image
                        height={80}
                        width={80}
                        className="object-cover rounded-full mt-1 ml-2 contrast-125 border-black border-[1px] border-t-[3px] mr-3  border-r-[4px]"
                        src={sanopink}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="imgtwo">
                    {" "}
                    <div className="flex justify-center gap-12">
                      <Image
                        height={80}
                        width={80}
                        className="object-cover rounded-full mt-1 ml-2 contrast-125 border-black border-[1px] border-t-[3px] border-r-[4px]"
                        src={sanoblack}
                        alt=""
                      />
                      <Image
                        height={50}
                        width={50}
                        className="object-cover w-12 h-12 contrast-125 rounded-full border-slate-200 border-2 relative top-12"
                        src={thulopink}
                        alt=""
                      />
                    </div>
                    <Image
                      height={150}
                      width={200}
                      className="object-contain contrast-100 ml-10 relative top-16 border-t-gray-700 rounded-full border-r-gray-700  shadow-gray-600 shadow-sm drop-shadow-md   border-t-[5px] border-r-[5px] hover:object-cover hover:scale-105 transition-transform delay-150 ease-linear"
                      quality={100}
                      src={uncletwo}
                      alt=""
                    />
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
