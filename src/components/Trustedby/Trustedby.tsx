import Image from "next/image";
import React from "react";
import dolphy from "@/../public/hero/dolphy.svg";
import bay from "@/../public/hero/bay.png";
import dolphine from "@/../public/hero/dolphine.png";
import elixir from "@/../public/hero/elixar.png";
import tonyning from "@/../public/hero/tony.png";

const Trustedby = () => {
  return (
    <>
      <section className="bg-white py-12 sm:py-6 lg:py-8 xl:py-12">
        <div className="mx-auto sm:px-2 lg:px-4 max-w-7xl">
          <div className="flex items-center justify-center gap-4 py-2">
            <h2 className="text-3xl font-bold leading-tight text-center  text-black sm:text-4xl lg:text-5xl">
              Not Flexing, but just look at our{" "}
              <span className="text-primary ">Clients</span>
            </h2>
          </div>
          <div className="flex flex-wrap mt-10 items-center justify-center w-full gap-6 mx-auto md:gap-14">
            <Image
              height={1000} // Double the height
              width={1000} // Double the width
              className="object-contain w-64 max-w-full scale-125 sm:h-16 md:h-20 sm:w-88 transition-transform duration-300 ease-in-out transform hover:scale-150 hover:grayscale-0 grayscale"
              src={bay}
              alt=""
            />
            <Image
              height={1000} // Double the height
              width={1000} // Double the width
              className="object-contain scale-125 w-36 max-w-full sm:h-16 md:h-20 sm:w-32 transition-transform duration-300 ease-in-out transform hover:scale-150 backdrop-blur-none hover:grayscale-0 grayscale"
              src={dolphy}
              alt=""
            />
            <Image
              height={1000} // Double the height
              width={1000} // Double the width
              className="object-contain scale-250 w-64 max-w-full sm:h-16 md:h-20 sm:w-88 transition-transform duration-300 ease-in-out transform hover:scale-150 hover:grayscale-0 grayscale"
              src={dolphine}
              alt=""
            />
            <Image
              height={1000} // Double the height
              width={1000} // Double the width
              className="object-contain scale-125 w-36 max-w-full sm:h-16 md:h-20 sm:w-32 transition-transform duration-300 ease-in-out transform hover:scale-150 hover:grayscale-0 grayscale"
              src={elixir}
              alt=""
            />
            <Image
              height={1000} // Double the height
              width={1000} // Double the width
              className="object-contain lg:scale-300 w-64 max-w-full sm:h-16 md:h-20 sm:w-88 transition-transform duration-300 ease-in-out transform hover:scale-150 hover:grayscale-0 grayscale"
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
