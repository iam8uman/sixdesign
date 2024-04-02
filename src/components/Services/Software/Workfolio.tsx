import React from "react";
import CarouselCard from "../../Card/CarouselCard";

const Workfolio = () => {
  return (
    <>
      <section className="pt-10 pb-8 overflow-hidden bg-gray-100 sm:pt-16 lg:pt-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              We create high-quality custom websites
            </h2>
            <p className="max-w-4l mx-auto mt-4 text-xl leading-relaxed text-gray-600">
              There is no too-custom or complex design, nor a too simple or
              small project. Free up your imagination and resources, and
              let&apos;s build the next award-winning website together.
            </p>

            {/* <Carousel added here > */}
          </div>
            <CarouselCard />
        </div>
      </section>
    </>
  );
};

export default Workfolio;
