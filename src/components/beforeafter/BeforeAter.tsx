import Image from "next/image";
import React from "react";
import beforeimage from "@/../public/beforeframe.png";
import afterimage from "@/../public/afterframe.png";

const BeforeAter = () => {
  return (
    <>
      <section className="py-10 bg-white sm:py-16 lg:pt-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
              Witness the Difference
            </h2>
            <p className="max-w-4xl mx-auto mt-4 text-sm sm:text-xs text-gray-600">
              Experience the transformational power of our website development
              expertise. From captivating designs to seamless functionality.
            </p>
          </div>

          <div className="flex sm:justify-center sm:gap-y-4 lg:justify-between py-10">
            <div>
              <Image
                height={400}
                width={400}
                className="w-full"
                src={beforeimage}
                alt=""
              />
            </div>
            <div>
              <Image
                height={400}
                width={400}
                className="w-full"
                src={afterimage}
                alt=""
              />
            </div>
          </div>

          
        </div>
      </section>
    </>
  );
};

export default BeforeAter;
