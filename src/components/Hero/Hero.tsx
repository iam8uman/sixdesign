import Image from "next/image";
import React from "react";
import Imgone from "@/../public/avatar_1.jpg";
import profile from "@/../public/avatar.jpg";
import Imgonee from "@/../public/avatarr.jpg";
import Imgoneee from "@/../public/avatarrr.jpg";
import imgHead from "@/../public/istockphoto-500558937-612x612.jpg";
import contact from "@/../public/contact-bottom-2.png";
import { Slider } from "../Slider/Slider";
import { Button } from "../ui/button";
import beforeafter from "@/../public/beforeafter.png";
import beff from "@/../public/beff.svg";

const Herotailbits = () => {
  return (
    <>
      <div className="bg-white">
        <section className="sm:py-2 ">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center max-w-7xl grid-cols-1 mx-auto lg:grid-cols-6 md:gap-x-2 xl:gap-x-8  ">
              <div className="lg:col-span-3">
                <div className="max-w-lg">
                  <div className="text-2xl font-medium leading-10 text-black sm:text-4xl lg:text-7xl">
                    <div className="mb-4">We Know</div>
                    <div className="mb-4">
                      Real Estate
                      <span className="text-primary font-bold">.</span>{" "}
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

                    <Button variant="outline" className="m-1 text-md border-2 border-gray-700 text-black px-6 py-6 rounded-md">
                      Book Free Consulation
                    </Button>
                  </div>

                  {/* <div className="flex items-center mt-2 space-x-[-8px]">
                    <Image
                      height={40}
                      width={40}
                      className="object-cover w-10 h-10 rounded-full border-slate-200 border-2"
                      src={Imgone}
                      alt=""
                    />

                    <Image
                      height={40}
                      width={40}
                      className="object-cover w-10 h-10 rounded-full border-slate-200 border-2"
                      src={Imgonee}
                      alt=""
                    />

                    <Image
                      height={40}
                      width={40}
                      className="object-cover w-10 h-10 rounded-full border-slate-200 border-2"
                      src={Imgoneee}
                      alt=""
                    />

                    <Image
                      height={40}
                      width={40}
                      className=" object-cover w-10 h-10 rounded-full border-slate-200 border-2"
                      src={profile}
                      alt=""
                    />

                    <Image
                      height={40}
                      width={40}
                      className="bg-black object-cover w-10 h-10 rounded-full border-slate-200 border-2"
                      src={contact}
                      alt=""
                    />
                    <div className="text-sm pl-4">
                      +100 other expanded their real estate business!
                    </div>
                  </div> */}
                </div>
              </div>

              <div className="lg:col-span-3">
                {/* <Slider /> */}
                <Image
                  height={500}
                  width={500}
                  className="object-cover w-full h-full contrast-125"
                  src={beff}
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

export default Herotailbits;
