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
      <section className="py-20 bg-white sm:py-24 lg:py-52">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="sm:flex sm:items-center sm:justify-between sm:space-x-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center">
              Some Glimpse of <span className="text-primary">Our Works</span>
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
            <div className="relative overflow-hidden group rounded-xl">
              <Link href="#" title="" className="block">
                <Image
                  height={300}
                  width={300}
                  className="object-cover w-full h-full"
                  src={imgtwo}
                  alt=""
                />
                <div className="absolute inset-0 transition-all duration-200 opacity-0 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800/80 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div>
                      <svg
                        className="w-6 h-6 text-white absolute top-4 right-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <line x1="17" y1="7" x2="7" y2="17"></line>
                        <polyline points="8 7 17 7 17 16"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-6 p-6 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
                  <p className="text-lg font-bold leading-tight text-white">
                    How to write content about your photographs
                    <span
                      className="absolute inset-0"
                      aria-hidden="true"
                    ></span>
                  </p>
                </div>
              </Link>
            </div>

            
            <div className="relative overflow-hidden group rounded-xl">
              <Link href="#" title="" className="block">
                <Image
                  height={300}
                  width={300}
                  className="object-cover w-full h-full"
                  src={imgtwo}
                  alt=""
                />
                <div className="absolute inset-0 transition-all duration-200 opacity-0 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800/80 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div>
                      <svg
                        className="w-6 h-6 text-white absolute top-4 right-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <line x1="17" y1="7" x2="7" y2="17"></line>
                        <polyline points="8 7 17 7 17 16"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-6 p-6 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
                  <p className="text-lg font-bold leading-tight text-white">
                    How to write content about your photographs
                    <span
                      className="absolute inset-0"
                      aria-hidden="true"
                    ></span>
                  </p>
                </div>
              </Link>
            </div>

            <div className="relative overflow-hidden group rounded-xl">
              <Link href="#" title="" className="block">
                <Image
                  height={300}
                  width={300}
                  className="object-cover w-full h-full"
                  src={imgtwo}
                  alt=""
                />
                <div className="absolute inset-0 transition-all duration-200 opacity-0 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800/80 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div>
                      <svg
                        className="w-6 h-6 text-white absolute top-4 right-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <line x1="17" y1="7" x2="7" y2="17"></line>
                        <polyline points="8 7 17 7 17 16"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-6 p-6 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
                  <p className="text-lg font-bold leading-tight text-white">
                    How to write content about your photographs
                    <span
                      className="absolute inset-0"
                      aria-hidden="true"
                    ></span>
                  </p>
                </div>
              </Link>
            </div>

            <div className="relative overflow-hidden group rounded-xl">
              <Link href="#" title="" className="block">
                <Image
                  height={300}
                  width={300}
                  className="object-cover w-full h-full"
                  src={imgtwo}
                  alt=""
                />
                <div className="absolute inset-0 transition-all duration-200 opacity-0 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800/80 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div>
                      <svg
                        className="w-6 h-6 text-white absolute top-4 right-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <line x1="17" y1="7" x2="7" y2="17"></line>
                        <polyline points="8 7 17 7 17 16"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-6 p-6 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
                  <p className="text-lg font-bold leading-tight text-white">
                    How to write content about your photographs
                    <span
                      className="absolute inset-0"
                      aria-hidden="true"
                    ></span>
                  </p>
                </div>
              </Link>
            </div>

            <div className="relative overflow-hidden group rounded-xl">
              <Link href="#" title="" className="block">
                <Image
                  height={300}
                  width={300}
                  className="object-cover w-full h-full"
                  src={imgtwo}
                  alt=""
                />
                <div className="absolute inset-0 transition-all duration-200 opacity-0 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800/80 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div>
                      <svg
                        className="w-6 h-6 text-white absolute top-4 right-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <line x1="17" y1="7" x2="7" y2="17"></line>
                        <polyline points="8 7 17 7 17 16"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-6 p-6 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
                  <p className="text-lg font-bold leading-tight text-white">
                    How to write content about your photographs
                    <span
                      className="absolute inset-0"
                      aria-hidden="true"
                    ></span>
                  </p>
                </div>
              </Link>
            </div>

            <div className="relative overflow-hidden group rounded-xl">
              <Link href="#" title="" className="block">
                <Image
                  height={300}
                  width={300}
                  className="object-cover w-full h-full"
                  src={imgtwo}
                  alt=""
                />
                <div className="absolute inset-0 transition-all duration-200 opacity-0 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800/80 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div>
                      <svg
                        className="w-6 h-6 text-white absolute top-4 right-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <line x1="17" y1="7" x2="7" y2="17"></line>
                        <polyline points="8 7 17 7 17 16"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-6 p-6 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
                  <p className="text-lg font-bold leading-tight text-white">
                    How to write content about your photographs
                    <span
                      className="absolute inset-0"
                      aria-hidden="true"
                    ></span>
                  </p>
                </div>
              </Link>
            </div>


          </div>
        </div>
      </section>
    </>
  );
};

export default Ourwork;
