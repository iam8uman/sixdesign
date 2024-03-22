"use client";
import Image from "next/image";
import React from "react";
import contact from "@/../public/contact-bottom-2.png";

export default function Contact() {
  return (
    <>
      <section className="py-2 bg-white sm:py-4 lg:py-8">
        <div className="mx-auto sm:px-6 lg:px-8 w-full">
          <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
            <div className="flex justify-center">
              <Image src={contact} alt="Contact Us" width={200} height={200} />
            </div>
            <div className="overflow-hidden bg-white rounded-xl">
              <div className="px-6 py-8 sm:p-6">
                <h3 className=" text-3xl font-bold text-center text-gray-900 sm:text-4xl xl:text-5xl">
                  Register today!
                </h3>

                <form action="#" method="POST" className="mt-4 mx-20">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                    <div className="sm:col-span-2">
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          id="name"
                          className="block px-2.5 pb-4 pt-4 w-full text-md text-gray-600 bg-transparent rounded-lg border-2 border-gray-200 bg-slate-100 appearance-none dark:text-white dark:border-red-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-grey-600 peer"
                          placeholder=""
                        />
                        <label
                          htmlFor="name"
                          className="absolute  text-md text-gray-400 dark:text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-slate-100 pointer-events-none dark:bg-gray-600 px-2 peer-focus:px-2 peer-focus:text-black peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
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
                            className="block px-2.5 pb-4 pt-4 w-full text-md bg-slate-100 text-gray-600 bg-transparent rounded-lg border-2 border-slate-200 appearance-non dark:border-red-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-grey-600 peer"
                            placeholder=""
                          />
                          <label
                            htmlFor="phone"
                            className="absolute text-md text-gray-400 bg-slate-100 dark:text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] dark:bg-gray-600 pointer-events-none px-2 peer-focus:px-2 peer-focus:text-black peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                          >
                            Phone Number
                          </label>
                        </div>
                        <div className="w-1/2 ml-2.5 relative">
                          <input
                            type="email"
                            id="email"
                            className="block px-2.5 pb-4 pt-4 w-full text-md text-gray-600 bg-transparent rounded-lg border-2 border-slate-200 bg-slate-100 appearance-none dark:text-white dark:border-red-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-grey-600 peer"
                            placeholder=""
                          />
                          <label
                            htmlFor="email"
                            className="absolute text-md text-gray-400 pointer-events-none bg-slate-100 dark:text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  dark:bg-gray-600 px-2 peer-focus:px-2 peer-focus:text-black peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                          >
                            Email Address
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <div className="mt-2.5 relative">
                        <textarea
                          name="textarea"
                          id="textarea"
                          placeholder=" "
                          className="block w-full px-4 py-4 text-gray-600 placeholder-gray-500 transition-all duration-200 bg-slate-100 border border-slate-200 rounded-md resize-y focus:outline-none"
                          rows={4}
                        ></textarea>
                        <label
                          htmlFor="textarea"
                          className="absolute text-md text-gray-400 pointer-events-none bg-slate-100 dark:text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  dark:bg-gray-600 px-2 peer-focus:px-2 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                        >
                          Your Message Here...
                        </label>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <p className="text-xs text-center w-full">
                        I consent to receive future communications about Empire
                        Canals in Welland. I understand I can opt out at anytime
                        by sending an email.
                      </p>
                    </div>
                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-primary border border-transparent rounded-md focus:outline-none hover:bg-red-700 focus:bg-red-700"
                      >
                        Send Message!
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
