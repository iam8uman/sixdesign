import Image from "next/image";
import React from "react";
import Imgone from "@/../public/avatar.jpg";
import Imgonee from "@/../public/avatarr.avif";
import Imgoneee from "@/../public/avatarrr.avif";
import imgHead from "@/../public/istockphoto-500558937-612x612.jpg";
import {
  AreaChart,
  CircleFadingPlus,
  Dribbble,
  MailCheck,
  Network,
  NotebookText,
} from "lucide-react";

const Herotailbits = () => {
  return (
    <>
      <div className="bg-white">
        <section className="py-12 sm:py-16 lg:pb-20">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center max-w-6xl grid-cols-1 mx-auto lg:grid-cols-5 lg:gap-x-4 xl:gap-x-24 gap-y-12">
              <div className="lg:col-span-3">
                <div className="max-w-lg">
                  <h1 className="text-2xl font-bold text-black sm:text-4xl">
                    We Know
                    <span className="text-primary rounded-md px-3">
                      Real Estate
                    </span>{" "}
                  </h1>
                  <div className="text-2xl  mt-4">
                    Providing expertise and solution in
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-4 pt-6 font-bold">
                    <div>
                      <div className="flex flex-col justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <AreaChart className="h-5 w-5 text-red-500" /> CRM for
                          agents
                        </div>
                        <div className="flex items-center gap-2">
                          <Dribbble color="#ff0000" /> MLS Website
                        </div>
                        <div className="flex items-center gap-2">
                          <MailCheck className="h-5 w-5 text-red-500" />
                          Email Marketing
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                          <CircleFadingPlus color="#ff0000" />
                          Social Media Management
                        </div>
                        <div className="flex items-center gap-2">
                          <NotebookText color="#ff0000" />
                          Landing Page
                        </div>
                        <div className="flex items-center gap-2">
                          <Network className="h-5 w-5 text-red-500" /> Custom
                          Solutions
                        </div>
                      </div>
                    </div>
                  </div>

                  <section className="bg-white">
                    <div className="px-2 mt-12 mx-auto sm:px-1 lg:px-2">
                      <div className="lg:max-w-3xl">
                        <div className="text-md text-black">
                          Get Your First Website Build For Free!
                        </div>
                      </div>
                    </div>
                  </section>

                  <form action="#" method="POST" className="max-w-md mt-2">
                    <div className="space-y-6">
                      <div className="grid grid-cols-2  sm:grid-cols-5">
                        <div className="sm:col-span-3">
                          <label htmlFor="email" className="sr-only">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            className="block w-full px-4 py-2 text-base font-medium text-black placeholder-gray-500 bg-transparent  border-primary border-2 rounded-s-md focus:ring-primary focus:border-primary focus:outline-none"
                            placeholder="Email Address"
                          />
                        </div>
                        <div className="sm:col-span-2 flex justify-center items-center">
                          <button
                            type="button"
                            className="w-full px-8 py-2 text-sm sm:w-full text-white  transition-all duration-200 bg-primary  border-primary border-4 rounded-e-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary hover:bg-primary"
                          >
                            Make it for me
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="flex items-center mt-2 space-x-[-6px]">
                    <Image
                      height={40}
                      width={40}
                      className="object-cover w-10 h-10 rounded-full border-white border-2"
                      src={Imgone}
                      alt=""
                    />

                    <Image
                      height={40}
                      width={40}
                      className="object-cover w-10 h-10 rounded-full border-white border-2"
                      src={Imgonee}
                      alt=""
                    />

                    <Image
                      height={40}
                      width={40}
                      className="object-cover w-10 h-10 rounded-full border-white border-2"
                      src={Imgoneee}
                      alt=""
                    />
                    <div className="text-md pl-4">
                      +100 other expanded their real estate business!
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2">
                <Image
                  height={700}
                  width={500}
                  src={imgHead}
                  alt="hero image"
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
