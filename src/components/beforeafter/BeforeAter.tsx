import Image from "next/image";
import React from "react";
import beforeimage from "@/../public/beforeframe.png";
import afterimage from "@/../public/afterframe.png";

const BeforeAter = () => {
  return (
    <>
      <section className=" bg-white py-24 ">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold inline-block leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight aaa">
              Witness the Difference
            </h2>
           
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
