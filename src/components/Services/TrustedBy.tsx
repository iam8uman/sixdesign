import Image from "next/image";
import logo from "@/../public/crowny-logo.svg";
import React from "react";

const TrustedBy = () => {
  return (
    <>
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="text-sm text-center my-5">Trusted by 1,000+ businesses and creative agencies worldwide from all shapes and sizes.</div>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-2 gap-10 sm:gap-y-16 sm:grid-cols-3 xl:grid-cols-6">
            <div>
              <Image
                height={100}
                width={100}
                className="object-contain w-auto mx-auto grayscale h-14"
                src={logo}
                alt=""
              />
            </div>

            <div>
              <Image
                height={100}
                width={100}
                className="object-contain w-auto mx-auto grayscale h-14"
                src={logo}
                alt=""
              />
            </div>

            <div>
              <Image
                height={100}
                width={100}
                className="object-contain w-auto mx-auto grayscale h-14"
                src={logo}
                alt=""
              />
            </div>

            <div>
              <Image
                height={100}
                width={100}
                className="object-contain w-auto mx-auto grayscale h-14"
                src={logo}
                alt=""
              />
            </div>

            <div>
              <Image
                height={100}
                width={100}
                className="object-contain w-auto mx-auto grayscale h-14"
                src={logo}
                alt=""
              />
            </div>

            <div>
              <Image
                height={100}
                width={100}
                className="object-contain w-auto mx-auto grayscale h-14"
                src={logo}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustedBy;
