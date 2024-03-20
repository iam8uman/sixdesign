import React from "react";

const Feature = () => {
  return (
    <>
      <section className=" bg-gray-50">
        <div className=" mx-auto sm:px-2 lg:px-4">
          <div className="grid items-center max-w-5xl grid-cols-1 mx-auto space-y-8 lg:grid-cols-2 sm:space-y-12 lg:space-x-16 xl:space-x-32">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="absolute -inset-1.5">
                <div
                  className="w-full h-full mx-auto opacity-30 blur-lg filter"
                  style={{
                    background:
                      "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                  }}
                ></div>
              </div>

              <div className="relative overflow-hidden bg-white rounded-2xl">
                <div className="p-8 md:p-11">
                  <div className="space-y-12">
                    <div className="flex items-start">
                      <div className="inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-gray-900 rounded-full">
                        <svg
                          className="w-6 h-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                          />
                        </svg>
                      </div>

                      <div className="ml-5">
                        <h3 className="text-lg font-bold text-gray-900 font-pj">
                          Registration
                        </h3>
                        <p className="mt-3 text-lg font-normal text-gray-600 font-pj">
                          Lorem ipsum dolor sit amet, consectetur adipiscing.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-gray-900 rounded-full">
                        <svg
                          className="w-6 h-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                          />
                        </svg>
                      </div>

                      <div className="ml-5">
                        <h3 className="text-lg font-bold text-gray-900 font-pj">
                          Add Products
                        </h3>
                        <p className="mt-3 text-lg font-normal text-gray-600 font-pj">
                          Lorem ipsum dolor sit amet, consectetur adipiscing.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-gray-900 rounded-full">
                        <svg
                          className="w-6 h-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                      </div>

                      <div className="ml-5">
                        <h3 className="text-lg font-bold text-gray-900 font-pj">
                          Grow Audience
                        </h3>
                        <p className="mt-3 text-lg font-normal text-gray-600 font-pj">
                          Lorem ipsum dolor sit amet, consectetur adipiscing.
                        </p>
                      </div>
                    </div>
                  </div>
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
