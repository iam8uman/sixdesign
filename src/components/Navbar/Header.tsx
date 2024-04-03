"use client";

import SixdesignLogo from "@/icons/Sixdesign-logo";
import { PhoneCall } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { NavigationMenuDemoz } from "./NavigationMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="bg-opacity-1 sticky top-0 z-10 w-full bg-white mt-10">
        <div className="px-2 mx-auto max-w-7xl lg:px-2">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0 px-6">
              <Link href="/" title="" className="flex">
                <SixdesignLogo size="sm" />
              </Link>
            </div>

            <button
              type="button"
              className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              <svg
                className="block w-6 h-6 transform transition-transform duration-200"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"}
                />
              </svg>
            </button>

            <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
              <Link
                href="/about"
                title=""
                className="text-base font-medium text-black transition-all duration-200 hover:text-red-600 focus:text-red-600"
              >
                {" "}
                About{" "}
              </Link>

              <div className=" text-base font-medium text-black transition-all duration-200 hover:text-red-600 focus:text-red-600">
                {" "}
                <div className="flex gap-2 justify-center bg-transparent relative lg:right-2">
                  <NavigationMenuDemoz />
                </div>
              </div>

              <Link
                href="/blog"
                title=""
                className="text-base font-medium text-black transition-all duration-200 hover:text-red-600 focus:text-red-600 relative lg:right-3"
              >
                {" "}
                Blog{" "}
              </Link>

              <Link
                href="/calculator"
                title=""
                className="text-base font-medium text-black transition-all duration-200 hover:text-red-600 focus:text-red-600"
              >
                {" "}
                Calculator{" "}
              </Link>
            </div>

            <Link
              href="/contact"
              title=""
              className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-primary border border-transparent rounded-md lg:inline-flex hover:bg-red-700 focus:bg-blue-700"
              role="button"
            >
              {" "}
              <div className="pr-3">
                <PhoneCall size={28} strokeWidth={1.75} absoluteStrokeWidth />
              </div>
              6475274970{" "}
            </Link>
          </nav>

          <nav
            className={`pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden ${
              isOpen ? "block" : "hidden"
            }`}
            style={{ transition: "height 0.3s ease" }}
          >
            <div className="flow-root">
              <div className="flex flex-col px-6 -my-2 space-y-1">
                <Link
                  href="/about"
                  title=""
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-red-600 focus:text-red-600"
                >
                  About
                </Link>

                <Link
                  href="/services"
                  title=""
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-red-600 focus:text-red-600"
                >
                  <div className="flex justify-start bg-transparent relative right-5">
                    <NavigationMenuDemoz />
                  </div>
                </Link>

                <Link
                  href="#"
                  title=""
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-red-600 focus:text-red-600"
                >
                  Blog
                </Link>

                <Link
                  href="#"
                  title=""
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-red-600 focus:text-red-600"
                >
                  {" "}
                  Calculator
                </Link>
              </div>
            </div>

            <div className="px-6 mt-6">
              <Link
                href="#"
                title=""
                className="inline-flex justify-center px-4 py-3 text-base font-semibold w-full text-white transition-all duration-200 bg-primary border border-transparent rounded-md tems-center hover:bg-red-700 focus:bg-red-700"
                role="button"
              >
                {" "}
                <div className="pr-5">
                  <PhoneCall size={28} strokeWidth={1.75} absoluteStrokeWidth />
                </div>
                6475274970{" "}
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
