import Image from "next/image";
import React from "react";
import Imgone from "@/../public/hero/image-1.png";
import Imgtwo from "@/../public/hero/image-2.png";
import {
  AreaChart,
  Command,
  DatabaseZap,
  DatabaseZapIcon,
  MailCheck,
  Network,
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
                    We assist{" "}
                    <span className="text-primary uppercase">Real State</span>{" "}
                    in expanding your business.
                  </h1>

                  <p className="mt-12 text-base font-bold text-black">
                    Join with us to:
                  </p>
                  <div className="flex flex-wrap gap-3 py-4 font-bold">
                    <div className="flex flex-col justify-between gap-3 sm:flex-row">
                      <div className="flex items-center gap-1">
                        <AreaChart className="h-5 w-5 text-red-500" /> Product
                        Development
                      </div>
                      <div className="flex items-center gap-1">
                        <Command className="h-5 w-5 text-red-500" /> Software
                        Development
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      <div className="flex items-center gap-1">
                        <MailCheck className="h-5 w-5 text-red-500" /> Email
                        marketing
                      </div>
                      <div className="flex items-center gap-1">
                        <DatabaseZap className="h-5 w-5 text-red-500" />{" "}
                        Customer Relationship Management
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      <div className="flex items-center gap-1">
                        <DatabaseZapIcon className="h-5 w-5 text-red-500" />{" "}
                        Architecture Design
                      </div>

                      <div className="flex items-center gap-1">
                        <Network className="h-5 w-5 text-red-500" /> Supply
                        Chain Management
                      </div>
                    </div>

                  </div>

                  <form action="#" method="POST" className="max-w-md mt-14">
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-5">
                        <div className="sm:col-span-2">
                          <label htmlFor="" className="sr-only">
                            {" "}
                            Your Name{" "}
                          </label>
                          <input
                            type="text"
                            name=""
                            id=""
                            className="block w-full px-0 py-2 text-base font-medium text-black placeholder-gray-500 bg-transparent border-t-0 border-b border-l-0 border-r-0 border-gray-700 rounded-none focus:border-primary focus:outline-none focus:ring-0"
                            placeholder="Full Name"
                          />
                        </div>

                        <div className="sm:col-span-3">
                          <label htmlFor="" className="sr-only">
                            {" "}
                            Email Address{" "}
                          </label>
                          <input
                            type="email"
                            name=""
                            id=""
                            className="block w-full px-0 py-2 text-base font-medium text-black placeholder-gray-500 bg-transparent border-t-0 border-b border-l-0 border-r-0 border-gray-700 rounded-none focus:border-primary focus:outline-none focus:ring-0"
                            placeholder="Email Address"
                          />
                        </div>
                      </div>

                      <div>
                        <button
                          type="button"
                          className="inline-flex items-center justify-center w-full px-6 py-4 text-xs font-bold tracking-widest text-white uppercase transition-all duration-200 bg-primary border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black focus:ring-offset-gray-900 hover:bg-gray-100"
                        >
                          Contact
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="grid grid-cols-3 gap-8 md:max-w-md lg:max-w-none">
                  <div>
                    <Image
                      height={500}
                      width={500}
                      className="object-cover w-full h-full rounded-lg"
                      src={Imgone}
                      alt=""
                    />
                  </div>

                  <div>
                    <Image
                      height={500}
                      width={500}
                      className="object-cover w-full h-full rounded-lg"
                      src={Imgtwo}
                      alt=""
                    />
                  </div>

                  <div>
                    <Image
                      height={500}
                      width={500}
                      className="object-cover w-full h-full rounded-lg"
                      src={Imgtwo}
                      alt=""
                    />
                  </div>

                  <div>
                    <Image
                      height={500}
                      width={500}
                      className="object-cover w-full h-full rounded-lg"
                      src={Imgone}
                      alt=""
                    />
                  </div>

                  <div>
                    <Image
                      height={500}
                      width={500}
                      className="object-cover w-full h-full rounded-lg"
                      src={Imgtwo}
                      alt=""
                    />
                  </div>

                  <div className="bg-gray-700 rounded-lg"></div>

                  <div className="bg-gray-800 rounded-lg"></div>
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
