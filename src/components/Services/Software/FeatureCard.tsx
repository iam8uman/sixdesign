import SixdesignLogo from "@/icons/Sixdesign-logo";
import Image from "next/image";
import React from "react";
import logo from "@/../public/crowny-logo.svg";

const FeatureCard = ({
  feature1icon,
  feature1,
  feature1desc,
  feature2icon,
  feature2,
  feature2desc,
}: {
  feature1icon: string;
  feature1: string;
  feature1desc: string;
  feature2icon: string;
  feature2: string;
  feature2desc: string;
}) => {
  return (
    <>
      <div className="transition-all duration-200 bg-white">
        <div className="py-4 px-4 flex gap-3">
          <div className="logo mt-9">
            {/* <SixdesignLogo size="md" /> */}
            <Image
              height={40}
              width={55}
              className="relative contrast-200 ml-72 bottom-7"
              src={feature1icon || logo}
              alt="image of service"
            />
          </div>
          <div className="">
            <h3 className="mt-6 text-xl text-start font-bold text-black">
              {feature1 || "Responsiveness"}
            </h3>
            <p className="mt-1 text-base text-gray-600">
              {feature1desc ||
                "Websites optimized for seamless viewing and navigation across all devices tablets."}
            </p>
          </div>
        </div>
        <div className="py-6 px-4 flex gap-3">
          <div className="logo mt-9">
            {/* <SixdesignLogo size={"md"} /> */}
            <Image
              height={40}
              width={55}
              src={feature2icon || logo}
              alt="image of service"
              className="relative contrast-200 ml-72 bottom-7"
            />
          </div>
          <div className="">
            <h3 className="mt-6 text-xl text-start font-bold text-black">
              {feature2 || "Support"}
            </h3>
            <p className="mt-1 text-base text-gray-600">
              {feature2desc ||
                "We are part of your team and we'll never leave you on your own. If you have issues or questions"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
