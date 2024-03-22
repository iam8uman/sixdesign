import Image from "next/image";
import React from "react";

import cover from "@/../public/blog/cover.png";
import image from "@/../public/blog/image.png";

const page = () => {
  return (
    <>
      <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl mx-auto">
              <p className="text-base font-medium text-gray-500">
                November 22, 2021
              </p>
              <h1 className="mt-6 text-4xl font-bold text-gray-900 sm:text-5xl">
                7 Best Growth Hacking Tips for Startups & SaaS
              </h1>
            </div>

            <div className="mt-12 sm:mt-16 aspect-w-16 aspect-h-9 lg:aspect-h-6">
              <Image
                height={500}
                width={500}
                className="object-cover w-full h-full"
                src={cover}
                alt=""
              />
            </div>

            <div className="grid grid-cols-1 mt-12 sm:mt-16 lg:grid-cols-12 lg:gap-x-16 gap-y-8">
              <div className="lg:col-span-5">
                <p className="text-lg font-bold text-gray-900 lg:text-xl">
                  Tincidunt magnis eu, vitae dictumst comm odo dolor in. Aen ean
                  dict umst risus pos uere a at id fermen tum nibh. Luctus nunc
                  bibendum duis egestas scelerisque.
                </p>
              </div>

              <article className="prose lg:col-span-7 prose-blockquote:border-none prose-blockquote:text-lg prose-blockquote:bg-gray-100 prose-blockquote:leading-7 prose-blockquote:font-medium prose-blockquote:text-gray-900 prose-blockquote:px-8 prose-blockquote:py-5">
                <h2>What is growth hack?</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                  pellentesque ut pellentesque varius amet mauris. Tempor,
                  risus, congue gravida nulla tincidunt nec diam. Tincidunt
                  magnis eu, vitae dictumst commodo dolor in. Aenean dictumst
                  risus posuere a at id fermentum nibh. Luctus nunc bibendum
                  duis egestas scelerisque.
                </p>
                <p>
                  Maecenas in pharetra hendrerit neque, tellus eu. Arcu tempus,
                  vel blandit adipiscing a sed cursus. Augue vestibulum tempus
                  lectus gravida condimentum mauris iaculis.
                </p>

                <Image
                  height={500}
                  width={500}
                  className="w-full"
                  src={image}
                  alt=""
                />

                <h2>How to start growing business?</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                  pellentesque ut pellentesque varius amet mauris. Tempor,
                  risus, congue gravida nulla tincidunt nec diam. Tincidunt
                  magnis eu, vitae dictumst commodo dolor in. Aenean dictumst
                  risus posuere a at id fermentum nibh. Luctus nunc bibendum
                  duis egestas scelerisque.
                </p>
                <p>
                  Maecenas in pharetra hendrerit neque, tellus eu. Arcu tempus,
                  vel blandit adipiscing a sed cursus. Augue vestibulum tempus
                  lectus gravida condimentum mauris iaculis.
                </p>
                <p>
                  Incidunt magnis eu, vitae dictumst commodo dolor in. Aenean
                  dictumst risus posuere a at id fermentum nibh. Luctus nunc
                  bibendum duis egestas scelerisque.
                </p>

                <h3>Follow the list below:</h3>
                <ul className="marker:text-gray-900">
                  <li>Id pellentesque ut pellentesque varius amet mauris.</li>
                  <li>Tempor, risus, congue gravida nulla tincidunt.</li>
                  <li>Tincidunt magnis eu, vitae dictumst.</li>
                  <li>Aenean dictumst risus posuere a at id fermentum nibh.</li>
                </ul>

                <blockquote>
                  <svg
                    className="w-8 h-8 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3.691 6.292C5.094 4.771 7.217 4 10 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 6.925 10H10a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2H3a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789zM20 20h-6a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789C16.094 4.771 18.217 4 21 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 17.925 10H21a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2z"></path>
                  </svg>
                  <p>
                    Tempor, risus, congue gravida nulla tincidunt nec diam.
                    Tincidunt magnis eu, vitae dictumst commodo dolor in. Aenean
                    dictumst risus posuere.
                  </p>
                </blockquote>

                <p>
                  Tincidunt magnis eu, vitae dictumst commodo dolor in. Aenean
                  dictumst risus posuere a at id fermentum nibh. Luctus nunc
                  bibendum duis egestas scelerisque.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
