"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import BlogWrapper from "@/components/BlogWrapper";
import Image from "next/image";
import avatar from "@/../public/woman.png";
import avatarr from "@/../public/avatarr.jpg";
import avatarrr from "@/../public/contact-bottom-2.png";
import logo from "@/../public/crowny-logo.svg";
import { Quote, QuoteIcon } from "lucide-react";

export default function CrmTestmonials() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    const interval = setInterval(() => {
      const nextSlide = (current % count) + 1;
      api.scrollTo(nextSlide - 1); // Since carousel index starts from 0
      setCurrent(nextSlide);
    }, 3000);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [api, current, count]);

  // Carousel content for 3 carousel items
  const testimonials = [
    {
      image: avatar,
      company: "Company 1",
      testimonial:
        "“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.”",
      logo: logo,
      position: "CEO",
    },
    {
      image: avatarr,
      company: "Company 2",
      testimonial:
        "“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.”",
      logo: logo,
      position: "Manager",
    },
    {
      image: avatarrr,
      company: "Company 3",
      testimonial:
        "“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.”",
      logo: logo,
      position: "Director",
    },
  ];

  return (
    <BlogWrapper>
      <h2 className="text-4xl text-center font-bold first-letter:text-primary my-10">
        What People Say About Us!
      </h2>
      <div>
        <Carousel
          setApi={setApi}
          className="w-full flex justify-center max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card>
                  <section className="py-12 bg-gray-50 sm:py-12 lg:py-16">
                    <div className="px-4 mx-auto w-full sm:px-6 lg:px-8">
                      <div className="grid items-center grid-cols-1 md:grid-cols-2 md:gap-16 gap-y-10">
                        <div className="-mx-4 sm:mx-0">
                          <Image
                            height={500}
                            width={500}
                            src={testimonial.image}
                            alt={`Company ${index + 1}`}
                            className="w-full object-fill max-h-96 max-w-md mx-auto rounded-se-3xl "
                          />
                        </div>

                        <div className="xl:pr-24">
                          <Image
                            height={500}
                            width={500}
                            src={testimonial.logo}
                            alt={`Logo ${index + 1}`}
                            className="w-auto h-7 "
                          />

                          <blockquote className="mt-8 md:mt-16">
                            <p className="text-2xl font-bold leading-relaxed text-gray-900 font-pj">
                              <span>
                              <Quote size={32} color="#ff0000" strokeWidth={3} absoluteStrokeWidth />                              </span>{" "}
                              {testimonial.testimonial}
                            </p>
                          </blockquote>
                          <p className="mt-5 text-base font-bold text-gray-400 md:mt-7 font-pj">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
        <div className="py-2 text-center text-sm text-muted-foreground">
          Slide {current} of {count}
        </div>
      </div>
    </BlogWrapper>
  );
}
