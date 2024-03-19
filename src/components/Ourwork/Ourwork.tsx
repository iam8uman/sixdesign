import Image from "next/image";
import React from "react";
import imgone from "@/../public/images/2.png";
import imgtwo from "@/../public/images/3.png";
import imgthree from "@/../public/images/4.png";
import imgfour from "@/../public/images/5.png";
import imgfive from "@/../public/images/6.png";
import imgsix from "@/../public/images/7.png";
import Link from "next/link";

const Ourwork = () => {
  return (
    <>
      <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="sm:flex sm:items-center sm:justify-between sm:space-x-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center">
              Some Glimpses of <span className="text-primary">Our Works</span>
            </h2>

            <div className="mt-6 sm:mt-0 sm:shrink-0">
              <a
                href="#"
                title=""
                className="inline-flex items-center text-base font-medium text-gray-900 group"
              >
                See all our works
                <svg
                  className="w-5 h-5 ml-2 transition-all duration-200 transform group-hover:translate-x-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative overflow-hidden bg-gray-900 group rounded-xl">
              <a href="#" title="" className="block">
                <Image
                  height={300}
                  width={300}
                  className="object-cover w-full h-full"
                  src={imgtwo}
                  alt=""
                />
              </a>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 group-hover:backdrop-blur-[4px] transition-all duration-200 via-gray-800/80 to-transparent"></div>
              <div className="absolute transition-all duration-200 opacity-0 top-4 right-4 group-hover:opacity-100">
                <svg
                  className="w-6 h-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <line x1="17" y1="7" x2="7" y2="17"></line>
                  <polyline points="8 7 17 7 17 16"></polyline>
                </svg>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="transition-all duration-300 transform translate-y-1/2 group-hover:translate-y-0">
                  <p className="text-lg font-bold leading-tight text-white">
                    <a href="#" title="" className="">
                      How to write content about your photographs
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </p>
                  <p className="mt-4 text-xs font-medium text-white/70">
                    April 09, 2022
                  </p>
                  <p className="mt-5 text-sm font-normal leading-6 text-white">
                    Lorem ipsum dolor sit amet, consec tetur adip iscing elit
                    quis auctor...
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden bg-gray-900 group rounded-xl">
              <a href="#" title="" className="block">
                <Image
                  height={300}
                  width={300}
                  className="object-cover w-full h-full"
                  src={imgthree}
                  alt=""
                />
              </a>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 group-hover:backdrop-blur-[4px] transition-all duration-200 via-gray-800/80 to-transparent"></div>
              <div className="absolute transition-all duration-200 opacity-0 top-4 right-4 group-hover:opacity-100">
                <svg
                  className="w-6 h-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <line x1="17" y1="7" x2="7" y2="17"></line>
                  <polyline points="8 7 17 7 17 16"></polyline>
                </svg>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="transition-all duration-300 transform translate-y-1/2 group-hover:translate-y-0">
                  <p className="text-lg font-bold leading-tight text-white">
                    <a href="#" title="" className="">
                      How to write content about your photographs
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </p>
                  <p className="mt-4 text-xs font-medium text-white/70">
                    April 09, 2022
                  </p>
                  <p className="mt-5 text-sm font-normal leading-6 text-white">
                    Lorem ipsum dolor sit amet, consec tetur adip iscing elit
                    quis auctor...
                  </p>
                </div>
              </div>
            </div>

            
            <div className="relative overflow-hidden bg-gray-900 group rounded-xl">
              <a href="#" title="" className="block">
                <Image
                  height={300}
                  width={300}
                  className="object-cover w-full h-full"
                  src={imgfour}
                  alt=""
                />
              </a>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 group-hover:backdrop-blur-[4px] transition-all duration-200 via-gray-800/80 to-transparent"></div>
              <div className="absolute transition-all duration-200 opacity-0 top-4 right-4 group-hover:opacity-100">
                <svg
                  className="w-6 h-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <line x1="17" y1="7" x2="7" y2="17"></line>
                  <polyline points="8 7 17 7 17 16"></polyline>
                </svg>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="transition-all duration-300 transform translate-y-1/2 group-hover:translate-y-0">
                  <p className="text-lg font-bold leading-tight text-white">
                    <a href="#" title="" className="">
                      How to write content about your photographs
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </p>
                  <p className="mt-4 text-xs font-medium text-white/70">
                    April 09, 2022
                  </p>
                  <p className="mt-5 text-sm font-normal leading-6 text-white">
                    Lorem ipsum dolor sit amet, consec tetur adip iscing elit
                    quis auctor...
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden bg-gray-900 group rounded-xl">
              <a href="#" title="" className="block">
                <Image
                  height={300}
                  width={300}
                  className="object-cover w-full h-full"
                  src={imgfive}
                  alt=""
                />
              </a>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 group-hover:backdrop-blur-[4px] transition-all duration-200 via-gray-800/80 to-transparent"></div>
              <div className="absolute transition-all duration-200 opacity-0 top-4 right-4 group-hover:opacity-100">
                <svg
                  className="w-6 h-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <line x1="17" y1="7" x2="7" y2="17"></line>
                  <polyline points="8 7 17 7 17 16"></polyline>
                </svg>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="transition-all duration-300 transform translate-y-1/2 group-hover:translate-y-0">
                  <p className="text-lg font-bold leading-tight text-white">
                    <a href="#" title="" className="">
                      How to write content about your photographs
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </p>
                  <p className="mt-4 text-xs font-medium text-white/70">
                    April 09, 2022
                  </p>
                  <p className="mt-5 text-sm font-normal leading-6 text-white">
                    Lorem ipsum dolor sit amet, consec tetur adip iscing elit
                    quis auctor...
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden bg-gray-900 group rounded-xl">
              <a href="#" title="" className="block">
                <Image
                  height={300}
                  width={300}
                  className="object-cover w-full h-full"
                  src={imgsix}
                  alt=""
                />
              </a>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 group-hover:backdrop-blur-[4px] transition-all duration-200 via-gray-800/80 to-transparent"></div>
              <div className="absolute transition-all duration-200 opacity-0 top-4 right-4 group-hover:opacity-100">
                <svg
                  className="w-6 h-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <line x1="17" y1="7" x2="7" y2="17"></line>
                  <polyline points="8 7 17 7 17 16"></polyline>
                </svg>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="transition-all duration-300 transform translate-y-1/2 group-hover:translate-y-0">
                  <p className="text-lg font-bold leading-tight text-white">
                    <a href="#" title="" className="">
                      How to write content about your photographs
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </p>
                  <p className="mt-4 text-xs font-medium text-white/70">
                    April 09, 2022
                  </p>
                  <p className="mt-5 text-sm font-normal leading-6 text-white">
                    Lorem ipsum dolor sit amet, consec tetur adip iscing elit
                    quis auctor...
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden bg-gray-900 group rounded-xl">
              <a href="#" title="" className="block">
                <Image
                  height={300}
                  width={300}
                  className="object-cover w-full h-full"
                  src={imgtwo}
                  alt=""
                />
              </a>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 group-hover:backdrop-blur-[4px] transition-all duration-200 via-gray-800/80 to-transparent"></div>
              <div className="absolute transition-all duration-200 opacity-0 top-4 right-4 group-hover:opacity-100">
                <svg
                  className="w-6 h-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <line x1="17" y1="7" x2="7" y2="17"></line>
                  <polyline points="8 7 17 7 17 16"></polyline>
                </svg>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="transition-all duration-300 transform translate-y-1/2 group-hover:translate-y-0">
                  <p className="text-lg font-bold leading-tight text-white">
                    <a href="#" title="" className="">
                      How to write content about your photographs
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </p>
                  <p className="mt-4 text-xs font-medium text-white/70">
                    April 09, 2022
                  </p>
                  <p className="mt-5 text-sm font-normal leading-6 text-white">
                    Lorem ipsum dolor sit amet, consec tetur adip iscing elit
                    quis auctor...
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

export default Ourwork;
