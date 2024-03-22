import SixdesignLogo from "@/icons/Sixdesign-logo";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import footerImage from "@/../public/footer-seperator.svg";

const Footerr = () => {
  return (
    <>
      <Image
        src={footerImage}
        alt="Footer Image"
        width={200}
        height={200}
        className="w-full grayscale"
      />
      <footer className="bg-white">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-wrap items-start md:justify-between gap-y-12 gap-x-24 md:gap-x-12">
            <div className="w-full lg:w-64 xl:w-full xl:max-w-xs">
              <Link href="/" title="" className="flex">
                <div className="text-2xl text-black sm:text-3xl lg:text-4xl flex gap-1 font-bold lg:justify-start align-middle mb-3 justify-center ">
                  <SixdesignLogo size="sm" />
                  <div className="text-black">SixDesign</div>
                </div>
              </Link>

              <p className="my-4 text-base font-normal text-gray-500">
                We specialize in creating high-quality websites, captivating
                landing pages, and visually appealing designs tailored for
                realtors, brokerages, and builders.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                Company
              </p>

              <ul className="mt-8 space-y-5">
                <li>
                  <Link
                    href="/about"
                    title=""
                    className="inline-flex text-base font-medium text-gray-900 transition-all duration-200 hover:translate-x-1 hover:text-blue-600"
                  >
                    {" "}
                    About{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    href="/services"
                    title=""
                    className="inline-flex text-base font-medium text-gray-900 transition-all duration-200 hover:translate-x-1 hover:text-blue-600"
                  >
                    {" "}
                    Services
                  </Link>
                </li>

                <li>
                  <Link
                    href="/blog"
                    title=""
                    className="inline-flex text-base font-medium text-gray-900 transition-all duration-200 hover:translate-x-1 hover:text-blue-600"
                  >
                    {" "}
                    Blogs
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contact"
                    title=""
                    className="inline-flex text-base font-medium text-gray-900 transition-all duration-200 hover:translate-x-1 hover:text-blue-600"
                  >
                    {" "}
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                Help
              </p>

              <ul className="mt-8 space-y-5">
                <li>
                  <Link
                    href="/faqs"
                    title=""
                    className="inline-flex text-base font-medium text-gray-900 transition-all duration-200 hover:translate-x-1 hover:text-blue-600"
                  >
                    {" "}
                    Customer Support{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    href="/faqs"
                    title=""
                    className="inline-flex text-base font-medium text-gray-900 transition-all duration-200 hover:translate-x-1 hover:text-blue-600"
                  >
                    {" "}
                    FAQS
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    title=""
                    className="inline-flex text-base font-medium text-gray-900 transition-all duration-200 hover:translate-x-1 hover:text-blue-600"
                  >
                    {" "}
                    Terms & Conditions{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    title=""
                    className="inline-flex text-base font-medium text-gray-900 transition-all duration-200 hover:translate-x-1 hover:text-blue-600"
                  >
                    {" "}
                    Privacy Policy{" "}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-full md:max-w-xs">
              <Link href="#" title="" className="flex">
                <div className="text-2xl text-black sm:text-3xl lg:text-4xl flex gap-1 px-4 font-bold lg:justify-start align-middle mb-2 justify-center ">
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
                            4517 Washington Ave. Manchester, Kentucky 39495{" "}
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
            </div>
          </div>

          <div className="pt-12  text-center border-t border-gray-200 sm:mb-4 lg:mb-6">
            <p className="text-sm font-normal text-gray-900">
              © Copyright 2022, All Rights Reserved by SixDesign.ca
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footerr;
