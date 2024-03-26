import React from "react";
import FeatureCard from "./FeatureCard";

const Feature = ({
  Feature1,
  Feature1_details,
  Feature2,
  Feature2_details,
  Feature3,
  Feature3_details,
  Feature4,
  Feature4_details,
}: {
  Feature1: string;
  Feature1_details: string;
  Feature2: string;
  Feature2_details: string;
  Feature3: string;
  Feature3_details: string;
  Feature4: string;
  Feature4_details: string;
}) => {
  return (
    <>
      <section className="py-12 bg-gray-50 sm:py-20 lg:py-32">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold leading-tight text-center  text-gray-900 sm:text-4xl xl:text-5xl font-pj lg:pb-10">
            Illuminate Your Experience with Our Best!
          </h2>

          <div className="grid max-w-4xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 sm:mt-12 lg:mt-20 sm:text-left">
            <div className="space-y-4 sm:space-y-8">
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

              {/* feature card another  */}
              {/* <FeatureCard icon="email" Feature1="Email Marketing" Feature1_details="Hello we are from the one and only also the most trusted source of organizaation" /> */}

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
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                  <h3 className="mt-8 text-2xl font-bold text-gray-900 sm:mt-12 font-pj">
                    {Feature2}
                  </h3>
                  <p className="mt-6 text-base text-gray-600 font-pj">
                    {Feature2_details}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-8">
              <div className="relative">
                <div className="absolute -inset-1">
                  <div
                    className="w-full h-full rotate-180 opacity-30 blur-lg filter"
                    style={{
                      background:
                        "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                    }}
                  ></div>
                </div>

                <div className="relative overflow-hidden bg-white shadow-md rounded-xl">
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
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                      />
                    </svg>
                    <h3 className="mt-8 text-2xl font-bold text-gray-900 sm:mt-12 font-pj">
                      {Feature3}
                    </h3>
                    <p className="mt-6 text-base text-gray-600 font-pj">
                      {Feature3_details}
                    </p>
                  </div>
                </div>
              </div>

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
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    />
                  </svg>
                  <h3 className="mt-8 text-2xl font-bold text-gray-900 sm:mt-12 font-pj">
                    {Feature4}
                  </h3>
                  <p className="mt-6 text-base text-gray-600 font-pj">
                    {Feature4_details}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
