import { icons } from "lucide-react";
import React from "react";

const FeatureCard = ({
  icon,
  Feature1,
  Feature1_details,
}: {
  icon:string,
  Feature1: string;
  Feature1_details: string;
}) => {
  return (
    <>
      <div className="overflow-hidden bg-white shadow-md rounded-xl">
        <div className="p-9">
          <svg
            className="w-12 h-12 mx-auto text-gray-400 sm:mx-0"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <h3 className="mt-8 text-2xl font-bold text-gray-900 sm:mt-12 font-pj">
            {Feature1}
          </h3>
          <p className="mt-6 text-base text-gray-600 font-pj">
            {Feature1_details}
          </p>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
