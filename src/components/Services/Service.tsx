import React from "react";
import Link from "next/link";
import Image from "next/image";
import img2 from "@/../public/services/slack-logo.png";
import crm from "@/../public/services/crm.jpg";
import socials from "@/../public/services/social.webp";
import mls from "@/../public/services/mls.jpeg";
import email from "@/../public/services/email.png";
import landing from "@/../public/services/landing.jpg";
import custom from "@/../public/services/custom.jpg";

const Service = () => {
  return (
    <>
      <section className="py-8 sm:py-8 lg:py-12">
        <div className="px-2 mx-auto sm:px-2 lg:px-4 max-w-7xl">
          <div className="mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              What we offer to grow you{" "}
              <span className="text-primary">Real Estate</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className=" service-item border-2 border-transparent shadow-lg rounded-md transform transition-transform duration-300 hover:scale-105 hover:ease-out delay-100">
              <Link href="/services/crm">
                <div className="p-8">
                  <div className="flex items-center">
                    <Image
                      height={50}
                      width={50}
                      className="flex-shrink-0 w-12 h-auto"
                      src={crm}
                      alt=""
                    />
                    <div className="ml-5 mr-auto">
                      <p className="text-xl font-semibold text-black">
                        CRM for clients
                      </p>
                    </div>
                    <svg
                      className="block w-6 h-6 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                  <p className="text-base leading-relaxed text-gray-600 mt-7">
                    Elevate client satisfaction with our real estate CRM.
                    Efficiently manage leads and personalized communication for
                    seamless transactions and lasting relationships.
                  </p>
                </div>
              </Link>
            </div>

            <div className=" service-item border-2 border-transparent shadow-lg rounded-md transform transition-transform duration-300 hover:scale-105 hover:ease-out delay-100">
              <Link href="/services/socials">
                <div className="p-8">
                  <div className="flex items-center">
                    <Image
                      height={50}
                      width={50}
                      className="flex-shrink-0 w-12 h-auto"
                      src={socials}
                      alt=""
                    />
                    <div className="ml-5 mr-auto">
                      <p className="text-xl font-semibold text-black">
                        Social Media Marketing
                      </p>
                    </div>
                    <svg
                      className="block w-6 h-6 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                  <p className="text-base leading-relaxed text-gray-600 mt-7">
                    Maximize your online presence with our expert social media
                    management. Engage, grow, and build brand authority across
                    platforms effortlessly.
                  </p>
                </div>
              </Link>
            </div>

            <div className=" service-item border-2 border-transparent shadow-lg rounded-md transform transition-transform duration-300 hover:scale-105 hover:ease-out delay-100">
              <Link href="/services/mls">
                <div className="p-8">
                  <div className="flex items-center">
                    <Image
                      height={50}
                      width={50}
                      className="flex-shrink-0 w-12 h-auto"
                      src={mls}
                      alt=""
                    />
                    <div className="ml-5 mr-auto">
                      <p className="text-xl font-semibold text-black">
                        MLS website design
                      </p>
                    </div>
                    <svg
                      className="block w-6 h-6 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                  <p className="text-base leading-relaxed text-gray-600 mt-7">
                    Craft a captivating MLS website that showcases properties
                    effectively. User-friendly design, advanced search
                    functionalities, and seamless navigation for enhanced
                    property browsing experience.
                  </p>
                </div>
              </Link>
            </div>

            <div className="service-item border-2 border-transparent shadow-lg rounded-md transform transition-transform duration-300 hover:scale-105 hover:ease-out delay-100">
              <Link href="/services/email">
                <div className="p-8">
                  <div className="flex items-center">
                    <Image
                      height={50}
                      width={50}
                      className="flex-shrink-0 w-12 h-auto"
                      src={email}
                      alt=""
                    />
                    <div className="ml-5 mr-auto">
                      <p className="text-xl font-semibold text-black">
                        Email Marketing
                      </p>
                    </div>
                    <svg
                      className="block w-6 h-6 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                  <p className="text-base leading-relaxed text-gray-600 mt-7">
                    Elevate your marketing game with targeted email campaigns.
                    Engage, convert, and retain clients effectively with
                    personalized and compelling content strategies.
                  </p>
                </div>
              </Link>
            </div>

            <div className="service-item border-2 border-transparent shadow-lg rounded-md transform transition-transform duration-300 hover:scale-105 hover:ease-out delay-100">
              <Link href="/services/landing">
                <div className="p-8">
                  <div className="flex items-center">
                    <Image
                      height={50}
                      width={50}
                      className="flex-shrink-0 w-12 h-auto"
                      src={landing}
                      alt=""
                    />
                    <div className="ml-5 mr-auto">
                      <p className="text-xl font-semibold text-black">
                        Landing Page
                      </p>
                    </div>
                    <svg
                      className="block w-6 h-6 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                  <p className="text-base leading-relaxed text-gray-600 mt-7">
                    Capture attention and drive conversions with captivating
                    landing pages. Tailored designs, compelling content, and
                    seamless user experience for optimal engagement and lead
                    generation.
                  </p>
                </div>
              </Link>
            </div>

            <div className="service-item border-2 border-transparent shadow-lg rounded-md transform transition-transform duration-300 hover:scale-105 hover:ease-out delay-100">
              <Link href="/services/custom">
                <div className="p-8">
                  <div className="flex items-center">
                    <Image
                      height={50}
                      width={50}
                      className="flex-shrink-0 w-12 h-auto"
                      src={custom}
                      alt=""
                    />
                    <div className="ml-5 mr-auto">
                      <p className="text-xl font-semibold text-black">
                        Custom Solutions
                      </p>
                    </div>
                    <svg
                      className="block w-6 h-6 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                  <p className="text-base leading-relaxed text-gray-600 mt-7">
                    Unlock your business &apos s full potential with our bespoke
                    custom solutions. Tailored to your unique needs, we deliver
                    innovative, efficient, and scalable results
                  </p>
                </div>
              </Link>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="#"
              title=""
              className="inline-flex p-3 font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
            >
              {" "}
              Check all 1,593 applications{" "}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
