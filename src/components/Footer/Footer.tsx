import SixdesignLogo from "@/icons/Sixdesign-logo";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import footerImage from "@/../public/mouse.png";

const Footerr = () => {
  return (
    <>
    {/* <div className=" max-w-full"> */}

     {/* <Image
        src={footerImage}
        alt="Footer Image"
        width={1000}
        height={200}
        className="w-full object-contain h-80 grayscale"
        /> */}
        {/* </div> */}
      <footer className="bg-white my-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
     
          <div className="flex flex-wrap items-start md:justify-between gap-y-4 md:gap-x-4">
            <div className="md:max-w-lg ">
              <Link href="/" title="" className="flex">
                <div className="text-2xl  sm:justify-center text-black sm:text-3xl lg:text-4xl flex gap-1 font-bold lg:justify-start align-middle mb-3 justify-center ">
                  <SixdesignLogo size="md" />
                  {/* <div className="text-black">SixDesign</div> */}
                </div>
              </Link>

              <p className="my-4 text-base font-normal  text-gray-500">
              We specialize in creating high-quality websites, captivating landing pages, and visually appealing designs tailored for realtors, brokerages, and builders. Please note that the information provided on this website is for general reference only, and we cannot be held liable for any misuse of the content, including copyrighted materials such as logos and images from builders
              </p>
            </div>

            <div className="hidden lg:inline-block">
              <p className="text-xl font-bold tracking-widest text-black mt-12">
                About 
              </p>

              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="/about"
                    title=""
                    className="inline-flex text-base font-normal text-gray-900 transition-all duration-200 hover:translate-x-1 hover:text-red-400"
                  >
                    {" "}
                    Company : Sixdesign
                  </Link>
                </li>

                <li>
                  <Link
                    href="/services"
                    title=""
                    className="inline-flex text-base font-normal text-gray-900 transition-all duration-200 hover:translate-x-1 hover:text-red-400"
                  >
                    {" "}
                    Services : Project Marketing

                  </Link>
                </li>

                <li>
                  <Link
                    href="/services/crm"
                    title=""
                    className="inline-flex text-base font-normal text-gray-900 transition-all duration-200 hover:translate-x-1 hover:text-red-400"
                  >
                    {" "}
                    CRM Integration & Branding for Realtors,

                  </Link>
                </li>

                <li>
                  <Link
                    href="/services"
                    title=""
                    className="inline-flex text-base font-normal text-gray-900 transition-all duration-200 hover:translate-x-1 hover:text-red-400"
                  >
                    {" "}
                    Brokerages & Builderss
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contact"
                    title=""
                    className="inline-flex text-base font-normal text-gray-900 transition-all duration-200 hover:translate-x-1 hover:text-red-400"
                  >
                    {" "}
                    Contact : 647-527-4970
                  </Link>
                </li>
              </ul>
            </div>

            

            {/* <div className="w-full md:max-w-xs">
              <Link href="/" title="" className="flex">
                <div className="text-2xl hidden lg:inline-flex text-black sm:text-3xl lg:text-4xl  gap-1 px-4 font-bold lg:justify-start align-middle mb-2 justify-center ">
                  <SixdesignLogo size="sm" />
                  <div className="text-black mx-1">SixDesign</div>
                </div>
              </Link>
              <div className="listing">
                <section className="py-6 bg-white sm:py-6 lg:py-10">
                  <div className="px-4 mx-auto sm:px-4 lg:px-6 max-w-7xl">
                    <div>
                      <div className="space-y-5">
                        <div className="flex items-start">
                          <svg
                            className="flex-shrink-0 text-red-500 w-7 h-7"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <span className="block ml-3 text-base font-medium text-gray-900">
                            {" "}
                            635 Canal Bank St, Welland, ON L0S 1K0, Canada
                          </span>
                        </div>

                        <div className="flex items-start">
                          <svg
                            className="flex-shrink-0 text-red-500 w-7 h-7"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                          <span className="block ml-3 text-base font-medium text-gray-900">
                            {" "}
                            team@sixdesign.ca
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div> */}
          </div>

        
        </div>
      </footer>
    </>
  );
};

export default Footerr;
