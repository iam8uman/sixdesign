import Image from "next/image";
import React from "react";
import Imageee from "@/../public/hero/waverio.svg";
import Imageee2 from "@/../public/hero/logoipsum.svg";
import dolphy from "@/../public/hero/dolphy.svg";
import bay from "@/../public/hero/bay.png";
import dolphine from "@/../public/hero/dolphine.png";
import elixir from "@/../public/hero/elixar.png";
import tonyning from "@/../public/hero/tony.png";
import BlogWrapper from "../BlogWrapper";

const Trustedby = () => {
  return (
    <>
      <section className="bg-white py-12 sm:py-6 lg:py-8 xl:py-12">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex items-center justify-center gap-4 py-2">
              <h2 className="text-3xl font-bold leading-tight text-center text-black sm:text-4xl lg:text-5xl">
                Not Flexing, but just look at our{" "}
                <span className="text-primary ">Clients</span>
              </h2>
            </div>
          <div className="flex flex-wrap mt-5 items-center justify-center w-full gap-6 mx-auto md:gap-12">
            <Image
              height={500}
              width={500}
              className="object-contain w-32 max-w-full lg:scale-150 sm:h-8 md:h-10 sm:w-44 transition-transform duration-300 ease-in-out transform hover:scale-150"
              src={bay}
              alt=""
            />
            <Image
              height={500}
              width={500}
              className="object-contain w-32 max-w-full sm:h-8 md:h-10 sm:w-44 transition-transform duration-300 ease-in-out transform hover:scale-110 backdrop-blur-none"
              src={dolphy}
              alt=""
            />
            <Image
              height={500}
              width={500}
              className="object-contain lg:scale-150 w-32 max-w-full sm:h-8 md:h-10 sm:w-44 transition-transform duration-300 ease-in-out transform hover:scale-150"
              src={dolphine}
              alt=""
            />
            <Image
              height={500}
              width={500}
              className="object-contain w-32 max-w-full sm:h-8 md:h-10 sm:w-44 transition-transform duration-300 ease-in-out transform hover:scale-110"
              src={elixir}
              alt=""
            />
            <Image
              height={500}
              width={500}
              className="object-contain lg:scale-150 w-32 max-w-full sm:h-8 md:h-10 sm:w-44 transition-transform duration-300 ease-in-out transform hover:scale-150"
              src={tonyning}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Trustedby;
