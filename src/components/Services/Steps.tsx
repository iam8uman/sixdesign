import Image from "next/image";
import React from "react";
import BlogWrapper from "../BlogWrapper";

const Steps = ({ it, img }: { it: string; img: string }) => {
  return (
    <>
      <BlogWrapper>
        <div className="relative">
          <div className="h-56 bg-gray-900 sm:h-72 md:absolute md:right-0 md:h-full md:w-1/2 ">
            <Image
              height={500}
              width={500}
              className="object-cover w-full h-full contrast-125 opacity-20 2xl:opacity-100 shadodw-2xl rounded-md "
              src={img}
              alt=""
            />
          </div>

          <div className="relative py-12 mx-auto max-w-7xl sm:py-16 lg:py-20 xl:py-24">
            <div className="md:mr-auto md:w-1/2 md:pr-10">
              <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl">
                How <span className="text-primary">{it}</span>  works?
              </h2>
              <p className="mt-4 text-base font-normal leading-7 text-gray-500 lg:text-lg lg:mt-6 lg:leading-8">
                Clarity gives you the blocks & components you need to create a
                truly professional website.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="py-12 bg-white sm:py-16 lg:py-20 xl:py-20"> */}
          <div className="mx-auto  max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-20 lg:gap-x-16">
              <div className="relative flex flex-row items-start lg:flex-col">
                <span
                  className="absolute w-px h-full -ml-px border-l-2 border-gray-200 border-dashed lg:border-l-0 lg:border-t-2 top-16 left-6 sm:left-8 lg:w-full lg:h-0 lg:top-8 lg:left-0"
                  aria-hidden="true"
                ></span>

                <div className="inline-flex items-center justify-center ring-[20px] lg:ring-[36px] ring-white relative w-12 h-12 text-xl font-medium text-white bg-red-600 rounded-full shrink-0 sm:text-3xl sm:h-16 sm:w-16">
                  01
                </div>
                <div className="ml-6 lg:ml-0 lg:mt-8">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Start with a great design
                  </h3>
                  <p className="mt-4 text-sm font-normal text-gray-700">
                    Clarity gives you the blocks & components you need to create
                    a website.
                  </p>
                </div>
              </div>

              <div className="relative flex flex-row items-start lg:flex-col">
                <span
                  className="absolute w-px h-full -ml-px border-l-2 border-gray-200 border-dashed lg:border-l-0 lg:border-t-2 top-16 left-6 sm:left-8 lg:w-full lg:h-0 lg:top-8 lg:left-0"
                  aria-hidden="true"
                ></span>

                <div className="inline-flex items-center justify-center ring-[20px] lg:ring-[36px] ring-white relative w-12 h-12 text-xl font-medium text-white bg-red-600 rounded-full shrink-0 sm:text-3xl sm:h-16 sm:w-16">
                  02
                </div>
                <div className="ml-6 lg:ml-0 lg:mt-8">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Add clever content areas
                  </h3>
                  <p className="mt-4 text-sm font-normal text-gray-700">
                    Clarity gives you the blocks & components you need to create
                    a website.
                  </p>
                </div>
              </div>

              <div className="relative flex flex-row items-start lg:flex-col">
                <span
                  className="absolute w-px h-full -ml-px border-l-2 border-gray-200 border-dashed lg:border-l-0 lg:border-t-2 top-16 left-6 sm:left-8 lg:w-full lg:h-0 lg:top-8 lg:left-0"
                  aria-hidden="true"
                ></span>

                <div className="inline-flex items-center justify-center ring-[20px] lg:ring-[36px] ring-white relative w-12 h-12 text-xl font-medium text-white bg-red-600 rounded-full shrink-0 sm:text-3xl sm:h-16 sm:w-16">
                  03
                </div>
                <div className="ml-6 lg:ml-0 lg:mt-8">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Easily update your site
                  </h3>
                  <p className="mt-4 text-sm font-normal text-gray-700">
                    Clarity gives you the blocks & components you need to create
                    a website.
                  </p>
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
      </BlogWrapper>
    </>
  );
};

export default Steps;
