import React from "react";
import dolphy from "@/../public/hero/dolphy.svg";
import bay from "@/../public/hero/bay.png";
import dolphine from "@/../public/hero/dolphine.png";
import elixir from "@/../public/hero/elixar.png";
import Imgoneeee from "@/../public/avatarrrr.jpg";
import Imgoneeeee from "@/../public/avatarrrrr.jpg";
import savemax from "@/../public/savemax.jpg";
import Image from "next/image";

const TrustedBy = () => {
  return (
    <div>
      <section className="py-10 sm:py-16 lg:py-24">
      <div className="flex items-center justify-center gap-4 py-2 ">
            <h2 className="text-3xl font-bold leading-tight text-center aaa text-black sm:text-4xl lg:text-5xl ">
              Just Look at Our Partners
            </h2>
          </div>
        <div className="px-4 mt-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-2 gap-10 sm:gap-y-16 sm:grid-cols-3 xl:grid-cols-6">
            <div>
            <Image
              height={1000}
                width={1000}
                className="object-contain w-auto mx-auto h-20 hover:scale-125 transition-transform duration-300 ease-in-out transform hover:grayscale-0 grayscale"
                src={dolphine}
                alt=""
              />
            </div>

            <div>
            <Image
              height={1000}
                width={1000}
                className="object-contain w-auto mx-auto h-14 hover:scale-125 transition-transform duration-300 ease-in-out transform hover:grayscale-0 grayscale"
                src={dolphy}
                alt=""
              />
            </div>

            <div>
            <Image
              height={1000}
                width={1000}
                className="object-contain w-auto mx-auto h-24 hover:scale-125 transition-transform duration-300 ease-in-out transform hover:grayscale-0 grayscale"
                src={bay}
                alt=""
              />
            </div>

            <div>
            <Image
              height={1000}
                width={1000}
                className="object-contain w-auto mx-auto h-14 hover:scale-125 transition-transform duration-300 ease-in-out transform hover:grayscale-0 grayscale"
                src={elixir}
                alt=""
              />
            </div>

            <div>
            <Image
              height={1000}
                width={1000}
                className="object-contain w-auto mx-auto h-14 hover:scale-125 transition-transform duration-300 ease-in-out transform hover:grayscale-0 grayscale"
                src={Imgoneeee}
                alt=""
              />
            </div>

            <div>
              <Image
              height={1000}
                width={1000}
                className="object-contain w-auto mx-auto h-14 hover:scale-125 transition-transform duration-300 ease-in-out transform hover:grayscale-0 grayscale"
                src={savemax}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrustedBy;
