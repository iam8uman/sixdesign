import Image from "next/image";
import Link from "next/link";
import React from "react";
import map from "@/../public/map.svg";

const Ourclient = () => {
  return (
    <>
      <section className="pt-12 overflow-hidden bg-gray-50 sm:pt-16 lg:pt-20 xl:pt-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 ">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="sm:text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900">
              Our Clients
            </h2>
            <p className="mt-4 text-xl font-normal leading-7 text-gray-600 lg:text-xl lg:mt-6 lg:leading-8">
              We have successfully served over 1000+ clients from countries
              across the globe, including the US, Canada, Ireland, the UK,
              France, and Australia. Our expertise in website redesign has
              helped numerous businesses thrive. We understand the intricacies
              of creating engaging websites, and we&apos;re here to assist you
              in achieving your online goals.
            </p>
            
          </div>

          <div className="w-full text-center my-16 flex justify-center">
            <Image
              height={600}
              width={800}
              className=""
              src={map}
              alt=""
            />
          
          </div>
        </div>
      </section>
    </>
  );
};

export default Ourclient;
