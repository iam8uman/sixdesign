import Image from "next/image";
import React from "react";
import Imgone from "@/../public/avatar_1.jpg";
import dolphy from "@/../public/hero/dolphy.svg";
import bay from "@/../public/hero/bay.png";
import dolphine from "@/../public/hero/dolphine.png";
import elixir from "@/../public/hero/elixar.png";
import Imgoneeee from "@/../public/avatarrrr.jpg";
import Imgoneeeee from "@/../public/avatarrrrr.jpg";
import savemax from "@/../public/savemax.jpg";

const Trustedbyy = () => {
  return (
    <>
      <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 py-2">
            <h2 className="text-3xl font-bold leading-tight text-center  text-black sm:text-4xl lg:text-5xl">
              Just Look at Our{" "}
              <span className="text-primary ">Partners</span>
            </h2>
          </div>
          <div className="grid items-center mt-10 grid-cols-3  sm:grid-cols-3 xl:grid-cols-7">
            <div>
              <Image
                height={1000}
                width={1000}
                className="object-contain w-auto mx-auto h-14  sm:w-16 max-w-full scale-125 sm:h-16 md:h-20 transition-transform duration-300 ease-in-out transform hover:scale-150 hover:grayscale-0 grayscale"
                src={bay}
                alt=""
              />
            </div>

            <div>
              <Image
                height={1000}
                width={1000}
                className="object-contain w-auto mx-auto h-14  sm:w-16 max-w-full scale-125 sm:h-16 md:h-20 transition-transform duration-300 ease-in-out transform hover:scale-150 hover:grayscale-0 grayscale"
                src={dolphine}
                alt=""
              />
            </div>

            <div>
              <Image
                height={1000}
                width={1000}
                className="object-contain w-auto mx-auto h-14  sm:w-16 sm:scale-50 lg:w-24 max-w-full lg:scale-125 sm:h-16 md:h-20 transition-transform duration-300 ease-in-out transform lg:hover:scale-150 sm:hover:scale-75  hover:grayscale-0 grayscale"
                src={dolphy}
                alt=""
              />
            </div>

            <div>
              <Image
                height={1000}
                width={1000}
                className="object-contain w-auto mx-auto h-14 hidden md:inline-flex  sm:w-16 max-w-full sm:scale-50 lg:scale-125 sm:h-16 md:h-20 transition-transform duration-300 ease-in-out transform lg:hover:scale-150 sm:hover:scale-75 hover:grayscale-0 grayscale"
                src={elixir}
                alt=""
              />
            </div>

            <div>
              <Image
                height={1000}
                width={1000}
                className="object-contain w-auto mx-auto h-14 hidden md:inline-flex  sm:w-16 max-w-full sm:scale-50 lg:scale-125 sm:h-16 md:h-20 transition-transform duration-300 ease-in-out transform lg:hover:scale-150 sm:hover:scale-75 hover:grayscale-0 grayscale"
                src={Imgoneeee}
                alt=""
              />
            </div>

            <div>
              <Image
                height={1000}
                width={1000}
                className="object-contain w-auto mx-auto h-14 hidden md:inline-flex  lg:w-24 sm:w-16 max-w-full scale-125 sm:h-16 md:h-20 transition-transform duration-300 ease-in-out transform hover:scale-150 hover:grayscale-0 grayscale"
                src={Imgoneeeee}
                alt=""
              />
            </div>
            <div>
              <Image
                height={1000}
                width={1000}
                className="object-contain w-auto mx-auto h-14 hidden md:inline-flex lg:w-24 sm:w-16 max-w-full scale-125 sm:h-16 md:h-20 transition-transform duration-300 ease-in-out transform hover:scale-150 hover:grayscale-0 grayscale"
                src={savemax}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trustedbyy;
