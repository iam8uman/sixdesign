import Image from "next/image";
import React from "react";
import avatar from "@/../public/avatar_1.jpg";
import avatarcontact from "@/../public/contact-bottom-2.png";
import { Slider } from "@/components/Slider/Slider";

const page = () => {
  return (
    <>
    
      <section className="py-12 bg-gray-50 sm:py-2 lg:py-4 xl:py-10">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-16 xl:gap-x-32">
            <div className="flex flex-col self-stretch justify-between">
              <div className="flex-1">
                <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                  Love to hear from you, Get in touch 👋
                </h2>
                <p className="mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8">
                  Clarity gives you the blocks & components you need to create a
                  truly professional website, landing page or admin panel for
                  your SaaS and gives the blocks.
                </p>
              </div>

              <div className="relative mt-10 overflow-hidden bg-black lg:mt-0 rounded-3xl -rotate-3">
                <div className="absolute bottom-0 right-0 -mb-72 -mr-24 border-[6px] opacity-20 border-white rounded-full w-96 h-96"></div>

                <div className="relative p-6 sm:px-8 sm:py-9">
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 text-yellow-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="w-6 h-6 text-yellow-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="w-6 h-6 text-yellow-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="w-6 h-6 text-yellow-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="w-6 h-6 text-yellow-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <blockquote className="mt-8">
                    <p className="text-xl font-normal text-white">
                      We love Landingfolio! Our designers were using it for
                      their projects, so we already knew what kind of design
                      they want
                    </p>
                  </blockquote>
                  <div className="flex items-center mt-6">
                    <Image
                      height={44}
                      width={44}
                      className="object-cover rounded-full w-11 h-11 shrink-0"
                      src={avatar}
                      alt=""
                    />
                    <div className="ml-4">
                      <p className="text-base font-semibold text-white">
                        Devon Lane
                      </p>
                      <p className="text-sm font-normal text-gray-300">
                        Co-Founder, Design.co
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-xl rounded-2xl">
              <div className="p-6 sm:p-10">
                <h3 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                  Send us a message
                </h3>
                <form action="#" method="POST" className="mt-8 space-y-6">
                  <div>
                    <label htmlFor="fullName" className="sr-only">
                      {" "}
                      Your name{" "}
                    </label>
                    <div>
                      <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        placeholder="Your name"
                        className="block w-full px-px py-4 text-base text-gray-900 placeholder-gray-600 bg-white border-b-2 focus:outline-none focus:border-blue-600 focus:ring-0"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="sr-only">
                      {" "}
                      Email address{" "}
                    </label>
                    <div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email address"
                        className="block w-full px-px py-4 text-base text-gray-900 placeholder-gray-600 bg-white border-b-2 focus:outline-none focus:border-blue-600 focus:ring-0"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="sr-only">
                      {" "}
                      Phone{" "}
                    </label>
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder="+1-222-333-4444"
                        className="block w-full px-px py-4 text-base text-gray-900 placeholder-gray-600 bg-white border-b-2 focus:outline-none focus:border-blue-600 focus:ring-0"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="sr-only">
                      {" "}
                      Write your message{" "}
                    </label>
                    <div>
                      <textarea
                        name="email"
                        id="email"
                        placeholder="Write your message"
                        rows={4}
                        className="block w-full px-px py-4 text-base text-gray-900 placeholder-gray-600 bg-white border-b-2 focus:outline-none focus:border-blue-600 focus:ring-0"
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-12 py-4 text-base font-medium text-white transition-all duration-200 bg-black border border-transparent rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                  >
                    Send message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Slider />
    </>
  );
};

export default page;
