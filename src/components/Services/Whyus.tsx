import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Whyus = () => {
  return (
    <>
      <section className="py-12 bg-slate-100 sm:py-16 lg:py-20 xl:py-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-24">
            <div className="lg:order-2">
              <div className="grid gap-4 px-8 relative bottom-40 text-lg rounded-3xl place-items-end">
                {/* list of all the services */}
                <Accordion type="single" collapsible className="w-full text-lg">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg hover:text-yellow-900 hover:no-underline py-6">Is it accessible?</AccordionTrigger>
                    <AccordionContent className="text-md">
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg hover:text-yellow-900 hover:no-underline py-6">Is it accessible?</AccordionTrigger>
                  <AccordionContent className="text-md">
                      Yes. It comes with default styles that matches the other
                      components&apos; aesthetic.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg hover:text-yellow-900 hover:no-underline py-6">Is it accessible?</AccordionTrigger>
                  <AccordionContent className="text-md">
                      Yes. It&apos;s animated by default, but you can disable it
                      if you prefer.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                  <AccordionTrigger className="text-md hover:text-yellow-900 hover:no-underline py-6">Is it accessible?</AccordionTrigger>
                  <AccordionContent className="text-md">
                      Yes. It&apos;s animated by default, but you can disable it
                      if you prefer.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                  <AccordionTrigger className="text-md hover:text-yellow-900 hover:no-underline py-6">Is it accessible?</AccordionTrigger>
                  <AccordionContent className="text-md">
                      Yes. It&apos;s animated by default, but you can disable it
                      if you prefer.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6">
                  <AccordionTrigger className="text-md hover:text-yellow-900 hover:no-underline py-6">Is it accessible?</AccordionTrigger>
                  <AccordionContent className="text-md">
                      Yes. It&apos;s animated by default, but you can disable it
                      if you prefer.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-7">
                  <AccordionTrigger className="text-md hover:text-yellow-900 hover:no-underline py-6">Is it accessible?</AccordionTrigger>
                  <AccordionContent className="text-md">
                      Yes. It&apos;s animated by default, but you can disable it
                      if you prefer.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div className="lg:order-1">
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl underline underline-offset-8 decoration-yellow-400">
                So, Why Us?
              </h2>
              <p className="mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8">
                Transform your website with our comprehensive redesign services,
                delivering stunning visual makeovers and Link seamless
                transition for optimized performance, empowering your online
                presence for accelerated business growth.
              </p>

              <div className="flex flex-col mt-8 space-y-5 sm:mt-12 sm:space-y-0 sm:space-x-5 sm:flex-row">
                <Image
                  height={40}
                  width={40}
                  className="w-full"
                  src="https://landingfoliocom.imgix.net/store/collection/saasui/images/application/5/phone-mockup.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Whyus;
