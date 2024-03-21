import React from "react";
import Link from "next/link";
import Image from "next/image";
import img1 from "@/../public/images/2.png";
import img2 from "@/../public/services/slack-logo.png";

const Service = () => {
  return (
    <>
      <section className="py-8 sm:py-8 lg:py-12">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              What we offer to grow you{" "}
              <span className="text-primary">Real Estate</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden bg-white rounded shadow">
              <div className="p-8">
                <div className="flex items-center">
                  <Image
                    height={50}
                    width={50}
                    className="flex-shrink-0 w-12 h-auto"
                    src={img1}
                    alt=""
                  />
                  <div className="ml-5 mr-auto">
                    <p className="text-xl font-semibold text-black">Gmail</p>
                    <p className="mt-px text-sm text-gray-600">
                      Direct Integration
                    </p>
                  </div>
                  <svg
                    className="hidden w-5 h-5 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
                <p className="text-base leading-relaxed text-gray-600 mt-7">
                  Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded shadow">
              <Link href="/services/web-development">
                <div className="p-8">
                  <div className="flex items-center">
                    <Image
                      height={50}
                      width={50}
                      className="flex-shrink-0 w-12 h-auto"
                      src={img2}
                      alt=""
                    />
                    <div className="ml-5 mr-auto">
                      <p className="text-xl font-semibold text-black">Slack</p>
                      <p className="mt-px text-sm text-gray-600">
                        Direct Integration
                      </p>
                    </div>
                    <svg
                      className="block w-6 h-6 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                  <p className="text-base leading-relaxed text-gray-600 mt-7">
                    Lorem ipsum dolor sit amet, consectetur adipis cing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
              </Link>
            </div>

            <div className="overflow-hidden bg-white rounded shadow">
              <div className="p-8">
                <div className="flex items-center">
                  <Image
                    className="flex-shrink-0 w-12 h-auto"
                    src={img2}
                    alt=""
                  />
                  <div className="ml-5 mr-auto">
                    <p className="text-xl font-semibold text-black">Shopify</p>
                    <p className="mt-px text-sm text-gray-600">
                      Direct Integration
                    </p>
                  </div>
                  <svg
                    className="hidden w-5 h-5 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
                <p className="text-base leading-relaxed text-gray-600 mt-7">
                  Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded shadow">
              <div className="p-8">
                <div className="flex items-center">
                  <Image
                    className="flex-shrink-0 w-12 h-auto"
                    src={img1}
                    alt=""
                  />
                  <div className="ml-5 mr-auto">
                    <p className="text-xl font-semibold text-black">Intercom</p>
                    <p className="mt-px text-sm text-gray-600">
                      Direct Integration
                    </p>
                  </div>
                  <svg
                    className="hidden w-5 h-5 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
                <p className="text-base leading-relaxed text-gray-600 mt-7">
                  Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded shadow">
              <div className="p-8">
                <div className="flex items-center">
                  <Image
                    className="flex-shrink-0 w-12 h-auto"
                    src={img1}
                    alt=""
                  />
                  <div className="ml-5 mr-auto">
                    <p className="text-xl font-semibold text-black">Twitter</p>
                    <p className="mt-px text-sm text-gray-600">
                      Direct Integration
                    </p>
                  </div>
                  <svg
                    className="hidden w-5 h-5 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
                <p className="text-base leading-relaxed text-gray-600 mt-7">
                  Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded shadow">
              <div className="p-8">
                <div className="flex items-center">
                  <Image
                    className="flex-shrink-0 w-12 h-auto"
                    src={img1}
                    alt=""
                  />
                  <div className="ml-5 mr-auto">
                    <p className="text-xl font-semibold text-black">Sketch</p>
                    <p className="mt-px text-sm text-gray-600">
                      Direct Integration
                    </p>
                  </div>
                  <svg
                    className="hidden w-5 h-5 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
                <p className="text-base leading-relaxed text-gray-600 mt-7">
                  Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="#"
              title=""
              className="inline-flex p-3 font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
            >
              {" "}
              Check all 1,593 applications{" "}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
