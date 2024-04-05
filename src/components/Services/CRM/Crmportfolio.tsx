import Image from "next/image";
import React from "react";
import imgone from "@/../public/ourwork/2.png";
import imgtwo from "@/../public/ourwork/4.png";
import imgthree from "@/../public/ourwork/5.png";
import imgfour from "@/../public/ourwork/6.png";
import imgfive from "@/../public/ourwork/7.png";
import imgsix from "@/../public/ourwork/8.png";
import imgseven from "@/../public/ourwork/9.png";
import imgeight from "@/../public/ourwork/10.png";
import imgnine from "@/../public/ourwork/11.png";
import imgten from "@/../public/ourwork/12.png";
import Link from "next/link";

const Crmportfolio = () => {
  return (
    <>
      <section className="py-8 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="sm:flex sm:items-center sm:justify-center sm:space-x-8">
            <div className="text-3xl md:text-4xl aaa inline-block lg:text-5xl font-bold text-gray-900 text-center">
              Peek Inside Our Portfolio
              {/* <span className="text-primary sm:w-full"> Our Works</span> */}
            </div>

           
          </div>

          <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <div className="relative overflow-hidden group rounded-xl">
                <Link
                  href="https://shrutidua.com/"
                  target="_blank"
                  title=""
                  className="block"
                >
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
                  <div className="absolute inset-x-0 bottom-2 p-2 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
                    <p className="text-md leading-tight text-white">
                      Landing page design
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                      ></span>
                    </p>
                  </div>
                </Link>
              </div>
              <div className="text-xl text-center">Shruti Dua</div>
            </div>

            <div>
              <div className="relative overflow-hidden group rounded-xl shadow-md">
                <Link
                  href="https://oakparkvillage.ca/"
                  title=""
                  className="block"
                  target="_blank"
                >
                  <Image
                    height={300}
                    width={300}
                    className="object-cover w-full h-full"
                    src={imgthree}
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
                  <div className="absolute inset-x-0 bottom-2 p-2 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
                    <p className="text-md leading-tight text-white">
                      Social Media Marketing
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                      ></span>
                    </p>
                  </div>
                </Link>
              </div>
              <div className="text-xl text-center text-gray-600">
                {" "}
                Oak Park Village
              </div>
            </div>

            <div>
              <div className="relative overflow-hidden group rounded-xl">
                <Link
                  href="https://empire-wynfield.ca/"
                  title=""
                  className="block"
                  target="_blank"
                >
                  <Image
                    height={300}
                    width={300}
                    className="object-cover w-full h-full"
                    src={imgfour}
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
                  <div className="absolute inset-x-0 bottom-2 p-2 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
                    <p className="text-md leading-tight text-white">
                      Landing page design
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                      ></span>
                    </p>
                  </div>
                </Link>
              </div>
              <div className="text-xl text-center">Empire Wynfield</div>
            </div>

            {/* <div className="relative overflow-hidden group rounded-xl">
              <Link
                href="https://knightsbridge-homes.ca/"
                title=""
                className="block"
                target="_blank"
              >
                <Image
                  height={300}
                  width={300}
                  className="object-cover w-full h-full"
                  src={imgfive}
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
                    Kingsbridge Homes
                    <span
                      className="absolute inset-0"
                      aria-hidden="true"
                    ></span>
                  </p>
                </div>
              </Link>
            </div>

            <div className="relative overflow-hidden group rounded-xl">
              <Link
                href="https://queensland-condos.ca/"
                title=""
                className="block"
                target="_blank"
              >
                <Image
                  height={300}
                  width={300}
                  className="object-cover w-full h-full"
                  src={imgsix}
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
                    Queensland Condos
                    <span
                      className="absolute inset-0"
                      aria-hidden="true"
                    ></span>
                  </p>
                </div>
              </Link>
            </div>

            <div className="relative overflow-hidden group rounded-xl">
              <Link
                href="https://niagara77.ca/"
                target="_blank"
                title=""
                className="block"
              >
                <Image
                  height={300}
                  width={300}
                  className="object-cover w-full h-full"
                  src={imgeight}
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
                    Niagara77 Condos
                    <span
                      className="absolute inset-0"
                      aria-hidden="true"
                    ></span>
                  </p>
                </div>
              </Link>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Crmportfolio;
