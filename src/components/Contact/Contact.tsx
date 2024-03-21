"use client";
import React from "react";

export default function Contact() {
  return (
    <>
      <section className="py-2 bg-white sm:py-4 lg:py-8">
        <div className="mx-auto sm:px-6 lg:px-8 w-full">
          <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
            <div className="mt-6 overflow-hidden bg-white rounded-xl">
              <div className="px-6 py-12 sm:p-12">
                <h3 className="text-3xl font-semibold text-center text-gray-900">
                  Send us a message
                </h3>

                <form action="#" method="POST" className="mt-14">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                    <div className="sm:col-span-2">
                      <div className="mt-2.5 relative">
                      <input
                              type="text"
                              id="name"
                              className="block px-2.5 pb-4 pt-4 w-full text-sm text-gray-600 bg-transparent rounded-lg border-2 border-gray-600 appearance-none dark:text-white dark:border-red-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-grey-600 peer"
                              placeholder=""
                            />
                            <label
                              htmlFor="name"
                              className="absolute text-sm text-gray-400 dark:text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-600 px-2 peer-focus:px-2 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                            >
                              Your Name
                            </label>
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <div className="flex">
                        <div className="w-1/2 mr-2.5 relative">
                          <input
                            type="phone"
                            id="phone"
                            className="block px-2.5 pb-4 pt-4 w-full text-sm text-gray-600 bg-transparent rounded-lg border-2 border-gray-600 appearance-none dark:text-white dark:border-red-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-grey-600 peer"
                            placeholder=""
                          />
                          <label
                            htmlFor="phone"
                            className="absolute text-sm text-gray-400 dark:text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-600 px-2 peer-focus:px-2 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                          >
                            Phone Number
                          </label>
                        </div>
                        <div className="w-1/2 ml-2.5 relative">
                          <input
                            type="email"
                            id="email"
                            className="block px-2.5 pb-4 pt-4 w-full text-sm text-gray-600 bg-transparent rounded-lg border-2 border-gray-600 appearance-none dark:text-white dark:border-red-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-grey-600 peer"
                            placeholder=""
                          />
                          <label
                            htmlFor="email"
                            className="absolute text-sm text-gray-400 dark:text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-600 px-2 peer-focus:px-2 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                          >
                            Email Address
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <div className="mt-2.5 relative">
                        <textarea
                          name=""
                          id=""
                          placeholder=" "
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-600 rounded-md resize-y focus:outline-none focus:border-red-600 caret-red-600"
                          rows={4}
                        ></textarea>
                        <label
                          htmlFor=""
                          className="absolute top-0 left-0 px-4 py-4 text-gray-500 transition-all duration-200 pointer-events-none"
                        >
                          Your message here...
                        </label>
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-primary border border-transparent rounded-md focus:outline-none hover:bg-red-700 focus:bg-red-700"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
