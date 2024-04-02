import Image from "next/image";
import logo from "@/../public/crowny-logo.svg";
import React from "react";
import Trustedbyy from "../../Trustedby/Trustedbyy";

const TrustedBy = () => {
  return (
    <>
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        {/* <div className="text-sm text-center my-5">Trusted by 1,000+ businesses and creative agencies worldwide from all shapes and sizes.</div> */}
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
         <Trustedbyy />
        </div>
      </section>
    </>
  );
};

export default TrustedBy;
