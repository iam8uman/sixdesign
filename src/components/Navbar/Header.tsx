import SixdesignLogo from "@/icons/Sixdesign-logo";
import { DropdownMenuIcon } from "@radix-ui/react-icons";
import { ChevronDown, PhoneCall, PhoneCallIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <header className="bg-opacity-1 sticky top-0 z-10 w-full bg-white drop-shadow-lg">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0 px-6">
              <Link href="#" title="" className="flex">
                <SixdesignLogo size="sm" />
              </Link>
            </div>

            <button
              type="button"
              className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            >
              <svg
                className="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 8h16M4 16h16"
                />
              </svg>

              <svg
                className="hidden w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
              <a
                href="#"
                title=""
                className="text-base font-medium text-black transition-all duration-200 hover:text-red-600 focus:text-red-600"
              >
                {" "}
                About{" "}
              </a>

              <Link
                href="#"
                title=""
                className="text-base font-medium text-black transition-all duration-200 hover:text-red-600 focus:text-red-600"
              >
                {" "}
                <div className="flex gap-2 justify-center ">
                  Services <ChevronDown size={16} strokeWidth={1.75} absoluteStrokeWidth />
                </div>
              </Link>

              <a
                href="#"
                title=""
                className="text-base font-medium text-black transition-all duration-200 hover:text-red-600 focus:text-red-600"
              >
                {" "}
                Blog{" "}
              </a>

              <a
                href="#"
                title=""
                className="text-base font-medium text-black transition-all duration-200 hover:text-red-600 focus:text-red-600"
              >
                {" "}
                Calculator{" "}
              </a>
            </div>

            <a
              href="#"
              title=""
              className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-primary border border-transparent rounded-md lg:inline-flex hover:bg-red-700 focus:bg-blue-700"
              role="button"
            >
              {" "}
              {/* Book Free Counsultation{" "} */}
              <div className="pr-3">
                <PhoneCall size={28} strokeWidth={1.75} absoluteStrokeWidth />
              </div>
              6475274970{" "}
            </a>
          </nav>

          <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
            <div className="flow-root">
              <div className="flex flex-col px-6 -my-2 space-y-1">
                <a
                  href="#"
                  title=""
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-red-600 focus:text-red-600"
                >
                  {" "}
                  Features{" "}
                </a>

                <a
                  href="#"
                  title=""
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-red-600 focus:text-red-600"
                >
                  {" "}
                  Solutions{" "}
                </a>

                <a
                  href="#"
                  title=""
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-red-600 focus:text-red-600"
                >
                  {" "}
                  Resources{" "}
                </a>

                <a
                  href="#"
                  title=""
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-red-600 focus:text-red-600"
                >
                  {" "}
                  Pricing{" "}
                </a>
              </div>
            </div>

            <div className="px-6 mt-6">
              <Link
                href="#"
                title=""
                className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-primary border border-transparent rounded-md tems-center hover:bg-red-700 focus:bg-blue-700"
                role="button"
              >
                {" "}
                Book Free Counsultation{" "}
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
