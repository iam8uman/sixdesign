import Image from "next/image";
import React from "react";
import Imageee from "@/../public/hero/waverio.svg";
import Imageee2 from "@/../public/hero/logoipsum.svg";
import dolphy from "@/../public/hero/dolphy.svg";
import bay from "@/../public/hero/baystreet.png";
import dolphine from "@/../public/hero/dolphin.png";
import elixir from "@/../public/hero/elixar.png";
import tonyning from "@/../public/hero/tony.png";
import BlogWrapper from "../BlogWrapper";

const Trustedby = () => {
  return (
    <>
      <section className="py-12 bg-gray-50 sm:py-16 lg:py-20 xl:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <BlogWrapper>
        <hr />
            <div className="flex items-center justify-center gap-4 py-6">
              <div className="text-4xl font-bold text-gray-900 flex items-center gap-2">
                Some Of Our{" "}
              </div>
                <span className="text-primary text-4xl font-bold uppercase">
                 Trusted Clients
                </span>
            </div>
          </BlogWrapper>
          <div className="flex flex-wrap items-center justify-center max-w-5xl gap-8 mx-auto mt-12 sm:mt-16 sm:gap-y-12 md:gap-16">
            <Image
              height={500}
              width={500}
              className="object-contain w-32 max-w-full sm:h-8 md:h-10 sm:w-44"
              src={dolphy}
              alt=""
            />
            <Image
              height={500}
              width={500}
              className="object-contain w-32 max-w-full sm:h-8 md:h-10 sm:w-44"
              src={dolphy}
              alt=""
            />
            <Image
              height={500}
              width={500}
              className="object-contain w-32 max-w-full sm:h-8 md:h-10 sm:w-44"
              src={elixir}
              alt=""
            />
            <Image
              height={500}
              width={500}
              className="object-contain w-32 max-w-full sm:h-8 md:h-10 sm:w-44"
              src={elixir}
              alt=""
            />
            {/* <Image
              height={500}
              width={500}
              className="object-contain w-32 max-w-full sm:h-8 md:h-10 sm:w-40"
              src={tonyning}
              alt=""
            /> */}
          </div>

          <div className="flex items-center justify-center max-w-5xl pt-10 mx-auto mt-12 space-x-6 border-t border-gray-200 sm:mt-16 lg:mt-20">
            <Image className="" src={Imageee} alt="" />
            <div>
              <div className="flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="w-6 h-6 text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="w-6 h-6 text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="w-6 h-6 text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="w-6 h-6 text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="mt-2 text-xs font-semibold tracking-widest text-gray-900 uppercase">
                4.4 on Capterra
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trustedby;
