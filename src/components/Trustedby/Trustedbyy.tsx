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
      <section className="py-10  sm:pt-16 lg:pt-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 py-2 ">
            <h2 className="text-3xl font-bold leading-tight text-center  text-black sm:text-4xl lg:text-5xl ">
              Just Look at Our <span className="text-primary ">Partners</span>
            </h2>
          </div>
          <div className=" mt-10 flex justify-center gap-16  sm:snap-x ">
            <div className="scroll-ml-6 snap-start">
              <Image
                height={1000}
                width={1000}
                className="object-contain w-auto mx-4 h-14 mix-blend-multiply sm:w-16 max-w-full scale-125 sm:h-16 md:h-20 transition-transform duration-300 ease-in-out transform hover:scale-150 hover:grayscale-0 grayscale"
                src={bay}
                alt=""
              />
            </div>

            <div className="scroll-ml-6 snap-start">
              <Image
                height={1000}
                width={1000}
                className="object-contain w-auto mx-4 h-14 mix-blend-multiply  sm:w-16 max-w-full scale-125 sm:h-16 md:h-20 transition-transform duration-300 ease-in-out transform hover:scale-150 hover:grayscale-0 grayscale"
                src={dolphine}
                alt=""
              />
            </div>

            <div className="scroll-ml-6 snap-start">
              <Image
                height={1000}
                width={1000}
                className="object-contain w-24 mx-4 h-20 mix-blend-multiply sm:scale-75 lg:scale-125 sm:h-16 md:h-20 transition-transform duration-300 ease-in-out transform lg:hover:scale-150 sm:hover:scale-125 hover:grayscale-0 grayscale"
                src={elixir}
                alt=""
              />
            </div>
            <div className="scroll-ml-6 snap-start">
              <Image
                height={1000}
                width={1000}
                className="object-contain w-24 mx-4 h-20 mix-blend-multiply sm:scale-50 lg:scale-125 sm:h-16 md:h-24 transition-transform duration-300 ease-in-out transform lg:hover:scale-150 sm:hover:scale-75 hover:grayscale-0 grayscale hidden lg:flex"
                src={dolphy}
                alt=""
              />
            </div>

            <div className="scroll-ml-6 snap-start">
              <Image
                height={1000}
                width={1000}
                className="object-contain w-auto mx-4 h-14 mix-blend-multiply  sm:w-16 max-w-full sm:scale-50 lg:scale-125 sm:h-16 md:h-20 transition-transform duration-300 ease-in-out transform lg:hover:scale-150 sm:hover:scale-75 hover:grayscale-0 grayscale"
                src={Imgoneeee}
                alt=""
              />
            </div>

            <div className="scroll-ml-6 snap-start">
              <Image
                height={1000}
                width={1000}
                className="object-contain w-auto mx-4 h-14 mix-blend-multiply  lg:w-24 sm:w-16 max-w-full scale-125 sm:h-16 md:h-20 transition-transform duration-300 ease-in-out transform hover:scale-150 hover:grayscale-0 grayscale"
                src={savemax}
                // style={{ filter:  }}
                alt=""
              />
            </div>

            <div className="scroll-ml-6 snap-start">
              <Image
                height={1000}
                width={1000}
                className="object-contain w-20 mx-4 h-14 mix-blend-multiply  lg:w-24 sm:w-16 max-w-full scale-125 sm:h-16 md:h-20 transition-transform duration-300 ease-in-out transform hover:scale-150 hover:grayscale-0 grayscale"
                src={Imgoneeeee}
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
