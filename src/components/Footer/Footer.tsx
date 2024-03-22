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
              <Link href="#" title="" className="flex">
                <div className="text-2xl text-black sm:text-3xl lg:text-4xl flex gap-1 font-bold lg:justify-start align-middle mb-3 justify-center ">
                  <SixdesignLogo size="sm" />
                  <div className="text-black">SixDesign</div>
                </div>
              </Link>

              <p className="my-4 text-base font-normal text-gray-500">
              We specialize in creating high-quality websites, captivating landing pages, and visually appealing designs tailored for realtors, brokerages, and builders.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                Company
              </p>

              <ul className="mt-8 space-y-5">
                <li>
                  <Link
                    href="#"
                    title=""
                    className="inline-flex text-base font-medium text-gray-900 transition-all duration-200 hover:translate-x-1 hover:text-blue-600"
                  >
                    {" "}
                    About{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    title=""
                    className="inline-flex text-base font-medium text-gray-900 transition-all duration-200 hover:translate-x-1 hover:text-blue-600"
                  >
                    {" "}
                    Features{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    title=""
                    className="inline-flex text-base font-medium text-gray-900 transition-all duration-200 hover:translate-x-1 hover:text-blue-600"
                  >
                    {" "}
                    Works{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    title=""
                    className="inline-flex text-base font-medium text-gray-900 transition-all duration-200 hover:translate-x-1 hover:text-blue-600"
                  >
                    {" "}
                    Career{" "}
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
                    href="#"
                    title=""
                    className="inline-flex text-base font-medium text-gray-900 transition-all duration-200 hover:translate-x-1 hover:text-blue-600"
                  >
                    {" "}
                    Customer Support{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    title=""
                    className="inline-flex text-base font-medium text-gray-900 transition-all duration-200 hover:translate-x-1 hover:text-blue-600"
                  >
                    {" "}
                    Delivery Details{" "}
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
                <div className="text-2xl text-black sm:text-3xl lg:text-4xl flex gap-1 font-bold lg:justify-start align-middle mb-3 justify-center ">
                  <SixdesignLogo size="sm" />
                  <div className="text-black">SixDesign</div>
                </div>
              </Link>
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
