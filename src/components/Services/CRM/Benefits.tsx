import React from "react";
import { CornerDownRight, IndentDecrease } from "lucide-react";
import SixdesignLogo from "@/icons/Sixdesign-logo";
import arrowicon from "@/../public/XMLID_45_.png";
import Image from "next/image";
import design_support from "@/../public/services/icons/design support.png";
import conntact_management from "@/../public/services/icons/contact_management.png";

const Benefits = ({
  title,
  feature1icon,
  feature1,
  feature1desc,
  feature2icon,
  feature2,
  feature2desc,
  feature3,
  feature3desc,
  feature3icon,
  feature4,
  feature4desc,
  feature4icon,
  feature5,
  feature5desc,
  feature5icon,
  feature6,
  feature6desc,
  feature6icon,
  buttonvalue,
}: {
  title: string;
  feature1icon: string;
  feature1: string;
  feature1desc: string;
  feature2icon: string;
  feature2: string;
  feature2desc: string;
  feature3: string;
  feature3desc: string;
  feature3icon: string;
  feature4: string;
  feature4desc: string;
  feature4icon: string;
  feature5: string;
  feature5desc: string;
  feature5icon: string;
  feature6: string;
  feature6desc: string;
  feature6icon: string;
  buttonvalue: string;
}) => {
  return (
    <>
      <section className="py-10 sm:py-16 lg:py-24 mx-4 lg:mx-28 ">
        <div className="px-4 mx-auto max-w-9xl sm:px-6 lg:px-8">
          <div className="transition-all duration-200 flex flex-col justify-center items-center">
            <button className="my-4 px-12 py-2 text-left rounded-full text-2xl font-semibold border-2 border-black shadow-sm drop-shadow-md text-black border-t-[5px] border-l-[5px]">
              {buttonvalue || ""}
            </button>
            <Image
              height={40}
              width={55}
              src={arrowicon}
              alt="Arrow Icon"
              className="relative mix-blend-multiply contrast-200 ml-64 bottom-7"
            />
            <div className="">
              <h3 className="text-4xl lg:text-5xl text-start font-bold text-black">
                {title || ""}
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-2 lg:mt-20 lg:gap-x-8">
            {/* Feature Section 1 */}
            <div className="transition-all duration-200 bg-white">
              <div className="py-4 px-4 flex flex-col items-center lg:flex-row justify-left rounded-sm border-2 border-slate-100 lg:border-none gap-3">
                <div className="logo mt-9">
                  <Image
                    height={100}
                    width={100}
                    src={feature1icon || design_support}
                    alt="image of service"
                    className="object-cover"
                  />
                </div>
                <div className="mx-6 mt-6 lg:mt-0">
                  <h3 className="text-2xl lg:text-xl text-center md:text-start font-bold text-black">
                    {feature1 || "Design Service"}
                  </h3>
                  <p className="mt-1 text-sm text-center md:text-left text-gray-600">
                    {feature1desc ||
                      " Tailored website designs that reflect your brand identity and captivate your audience"}
                  </p>
                </div>
              </div>
            </div>

            {/* Feature Section 2 */}
            <div className="transition-all duration-200 bg-white">
              <div className="py-4 px-4 flex flex-col items-center lg:flex-row justify-left rounded-sm border-2 border-slate-100 lg:border-none gap-3">
                <div className="logo mt-9">
                  <Image
                    height={100}
                    width={100}
                    src={feature2icon || design_support}
                    alt="image of service"
                    className="object-cover"
                  />
                </div>
                <div className="mx-6 mt-6 lg:mt-0">
                  <h3 className="text-2xl lg:text-xl text-center md:text-start font-bold text-black">
                    {feature2 || "Design Service"}
                  </h3>
                  <p className="mt-1 text-sm text-center md:text-left text-gray-600">
                    {feature2desc ||
                      " Tailored website designs that reflect your brand identity and captivate your audience"}
                  </p>
                </div>
              </div>
            </div>

            {/* Feature Section 3 */}
            {feature3icon && (
              <div className="transition-all duration-200 bg-white">
                <div className="py-4 px-4 flex flex-col items-center lg:flex-row justify-left rounded-sm border-2 border-slate-100 lg:border-none gap-3">
                  <div className="logo mt-9">
                    <Image
                      height={100}
                      width={100}
                      src={feature3icon}
                      alt="image of service"
                      className="object-cover"
                    />
                  </div>
                  <div className="mx-6 mt-6 lg:mt-0">
                    <h3 className="text-2xl lg:text-xl text-center md:text-start font-bold text-black">
                      {feature3}
                    </h3>
                    <p className="mt-1 text-sm text-center md:text-left text-gray-600">
                      {feature3desc}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Feature Section 4 */}
            <div className="transition-all duration-200 bg-white">
              <div className="py-4 px-4 flex flex-col items-center lg:flex-row justify-left rounded-sm border-2 border-slate-100 lg:border-none gap-3">
                <div className="logo mt-9">
                  <Image
                    height={100}
                    width={100}
                    src={feature4icon || conntact_management}
                    alt="image of service"
                    className="object-cover"
                  />
                </div>
                <div className="mx-6 mt-6 lg:mt-0">
                  <h3 className="text-2xl lg:text-xl text-center md:text-start font-bold text-black">
                    {feature4 || "Design Service"}
                  </h3>
                  <p className="mt-1 text-sm text-center md:text-left text-gray-600">
                    {feature4desc ||
                      " Tailored website designs that reflect your brand identity and captivate your audience"}
                  </p>
                </div>
              </div>
            </div>

            {/* Feature Section 5 */}
            {feature5icon && (
              <div className="transition-all duration-200 bg-white">
                <div className="py-4 px-4 flex flex-col items-center lg:flex-row justify-left rounded-sm border-2 border-slate-100 lg:border-none gap-3">
                  <div className="logo mt-9">
                    <Image
                      height={100}
                      width={100}
                      src={feature5icon}
                      alt="image of service"
                      className="object-cover"
                    />
                  </div>
                  <div className="mx-6 mt-6 lg:mt-0">
                    <h3 className="text-2xl lg:text-xl text-center md:text-start font-bold text-black">
                      {feature5}
                    </h3>
                    <p className="mt-1 text-sm text-center md:text-left text-gray-600">
                      {feature5desc}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Feature Section 6 */}
            {feature6icon && (
              <div className="transition-all duration-200 bg-white">
                <div className="py-4 px-4 flex flex-col items-center lg:flex-row justify-left rounded-sm border-2 border-slate-100 lg:border-none gap-3">
                  <div className="logo mt-9">
                    <Image
                      height={100}
                      width={100}
                      src={feature6icon}
                      alt="image of service"
                      className="object-cover"
                    />
                  </div>
                  <div className="mx-6 mt-6 lg:mt-0">
                    <h3 className="text-2xl lg:text-xl text-center md:text-start font-bold text-black">
                      {feature6}
                    </h3>
                    <p className="mt-1 text-sm text-center md:text-left text-gray-600">
                      {feature6desc}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefits;
