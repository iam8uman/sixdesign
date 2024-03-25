import BlogWrapper from "@/components/BlogWrapper";
import Image from "next/image";
import Link from "next/link";
import image1 from "@/../public/blog/thumbnail-1.png";
import image2 from "@/../public/blog/thumbnail-2.png";
import image3 from "@/../public/blog/thumbnail-3.png";
import React from "react";

const page = () => {
  return (
    <>
      <BlogWrapper>
        <section className="py-4 bg-white sm:py-6 lg:py-8">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid max-w-md grid-cols-1 mx-auto mt-12 gap-y-12 md:grid-cols-3 gap-x-8 sm:mt-16 md:max-w-none">
              <div className="flex flex-col group">
                <Link
                  href="/blog/blog-one"
                  title=""
                  className="flex overflow-hidden shrink-0 aspect-w-16 aspect-h-9"
                >
                  <Image
                    height={500}
                    width={500}
                    className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                    src={image2}
                    alt=""
                  />
                </Link>
                <Link
                  href="blog/blog-one"
                  title=""
                  className="flex flex-col flex-1"
                >
                  <p className="mt-6 text-2xl font-bold text-gray-900">
                    Recent Business Meet of Sixdesign at KTM
                  </p>
                  <p className="mt-4 text-sm leading-6 text-gray-500 line-clamp-2">
                    Lorem ipsum dolor sit amet, consec tetur adip iscing elit.
                    Sit quis auctor odio arcu et dolor.
                  </p>
                </Link>
                <div className="mt-6 lg:mt-8">
                  <Link
                    href="blog/blog-one"
                    title=""
                    className="inline-flex items-center text-xs font-bold tracking-widest text-gray-900 uppercase group"
                  >
                    Continue Reading
                    <svg
                      className="w-4 h-4 ml-2 transition-all duration-200 transform group-hover:translate-x-1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="flex flex-col group">
                <Link
                  href="blog/blog-two"
                  title=""
                  className="flex overflow-hidden shrink-0 aspect-w-16 aspect-h-9"
                >
                  <Image
                    height={500}
                    width={500}
                    className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                    src={image1}
                    alt=""
                  />
                </Link>
                <Link
                  href="blog/blog-two"
                  title=""
                  className="flex flex-col flex-1"
                >
                  <p className="mt-6 text-2xl font-bold text-gray-900">
                    The unseen of spending three years at Pixelgrade
                  </p>
                  <p className="mt-4 text-sm leading-6 text-gray-500 line-clamp-2">
                    Lorem ipsum dolor sit amet, consec tetur adip iscing elit.
                    Sit quis auctor odio arcu et dolor.
                  </p>
                </Link>
                <div className="mt-6 lg:mt-8">
                  <Link
                    href="blog/blog-two"
                    title=""
                    className="inline-flex items-center text-xs font-bold tracking-widest text-gray-900 uppercase group"
                  >
                    Continue Reading
                    <svg
                      className="w-4 h-4 ml-2 transition-all duration-200 transform group-hover:translate-x-1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="flex flex-col group">
                <Link
                  href="#"
                  title=""
                  className="flex overflow-hidden shrink-0 aspect-w-16 aspect-h-9"
                >
                  <Image
                    height={500}
                    width={500}
                    className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                    src={image3}
                    alt=""
                  />
                </Link>
                <Link href="#" title="" className="flex flex-col flex-1">
                  <p className="mt-6 text-2xl font-bold text-gray-900">
                    The unseen of spending three years at Pixelgrade
                  </p>
                  <p className="mt-4 text-sm leading-6 text-gray-500 line-clamp-2">
                    Lorem ipsum dolor sit amet, consec tetur adip iscing elit.
                    Sit quis auctor odio arcu et dolor.
                  </p>
                </Link>
                <div className="mt-6 lg:mt-8">
                  <Link
                    href="#"
                    title=""
                    className="inline-flex items-center text-xs font-bold tracking-widest text-gray-900 uppercase group"
                  >
                    Continue Reading
                    <svg
                      className="w-4 h-4 ml-2 transition-all duration-200 transform group-hover:translate-x-1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </BlogWrapper>
    </>
  );
};

export default page;
