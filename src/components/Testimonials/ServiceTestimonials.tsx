import Image from "next/image";
import React from "react";
import avatar from "@/../public/avatar_1.jpg";
import avatarr from "@/../public/avatarr.jpg";
import avatarrr from "@/../public/avatarrr.jpg";
import logo from "@/../public/crowny-logo.svg";
import avatarrrr from "@/../public/avatarrrr.jpg";
import avatarrrrr from "@/../public/avatarrrrr.jpg";
import { Quote } from "lucide-react";

const ServiceTestimonials = () => {
  return (
    <>
      <section className="py-12 bg-white sm:py-16 lg:py-20 xl:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Don&apos;t just take our words. <br /> <span className="text-xl"> Over 1000+ people trust us.</span>
            </h2>
          </div>

          <div className="grid max-w-md grid-cols-1 gap-5 mx-auto mt-12 sm:mt-16 lg:grid-cols-3 lg:max-w-none">
            <div className="bg-gray-100 rounded-2xl xl:-rotate-2">
              <div className="p-8">
                <blockquote>
                  <p className="text-xl font-medium leading-9 text-gray-900">
                    <Quote color="#ff0000" absoluteStrokeWidth />
                    SixDesign.ca delivers exceptional web design, exceeding
                    expectations with professionalism, creativity, and seamless
                    communication. Highly recommended for outstanding results.
                  </p>
                </blockquote>
                <p className="mt-6 text-base font-semibold text-gray-900">
                  Tony Ning
                </p>
                <p className="mt-1 text-base font-normal text-gray-600">
                  Real Estate Broker
                </p>
                <div className="flex items-center justify-between pt-5 mt-5 border-t border-gray-200">
                  <Image
                    height={500}
                    width={500}
                    className="w-auto h-7"
                    src={logo}
                    alt=""
                  />
                  <Image
                    height={500}
                    width={500}
                    className="object-cover w-10 h-10 rounded-full"
                    src={avatarr}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-2xl xl:rotate-2">
              <div className="p-8">
                <blockquote>
                  <p className="text-xl font-medium leading-9 text-gray-900">
                    <Quote color="#ff0000" absoluteStrokeWidth />
                    Transformative web design services by SixDesign.ca redefine
                    online presence. With creativity, professionalism, and
                    seamless communication, they ensure remarkable results.
                    Highly recommended.
                  </p>
                </blockquote>
                <p className="mt-6 text-base font-semibold text-gray-900">
                  Sam Valji
                </p>
                <p className="mt-1 text-base font-normal text-gray-600">
                  Real Estate Broker
                </p>
                <div className="flex items-center justify-between pt-5 mt-5 border-t border-gray-200">
                  <Image
                    height={500}
                    width={500}
                    className="w-auto h-7"
                    src={logo}
                    alt=""
                  />
                  <Image
                    height={500}
                    width={500}
                    className="object-cover w-10 h-10 rounded-full"
                    src={avatarrr}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-2xl xl:-rotate-2">
              <div className="p-8">
                <blockquote>
                  <p className="text-xl font-medium leading-9 text-gray-900">
                    <Quote color="#ff0000" absoluteStrokeWidth />
                    Elevate your online presence with exceptional web design
                    services from SixDesign.ca. Experience creativity,
                    professionalism, and seamless communication for remarkable
                    results.
                  </p>
                </blockquote>
                <p className="mt-6 text-base font-semibold text-gray-900">
                  Shruti Dua
                </p>
                <p className="mt-1 text-base font-normal text-gray-600">
                  Sales Representative{" "}
                </p>
                <div className="flex items-center justify-between pt-5 mt-5 border-t border-gray-200">
                  <Image
                    height={500}
                    width={500}
                    className="w-auto h-7"
                    src={logo}
                    alt=""
                  />
                  <Image
                    height={500}
                    width={500}
                    className="object-cover w-10 h-10 rounded-full"
                    src={avatar}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceTestimonials;
