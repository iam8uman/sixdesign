import Steps from "@/components/Services/Steps";
import React from "react";
import crmImg from "@/../public/girl-smiling.png";
import Stats from "@/components/Stats/Stats";
import Feature from "@/components/Hero/Feature";
import CrmTestimonials from "@/components/Services/CRM/CrmTestimonials";

const page = () => {
  return (
    <>
      <Steps
        it="CRM"
        img={crmImg.src}
        one="Start with a great design"
        oneDetails="Clarity gives you the blocks & components you need to create a website."
        two="Add clever content areas"
        twoDetails="Clarity gives you the blocks & components you need to create a website."
        three="Easily update your site
        "
        threeDetails="Clarity gives you the blocks & components you need to create a website."
      />
      <Feature
        Feature1="Load Management"
        Feature1_details="Clarity gives you the blocks & components you need to create a website."
        Feature2="Contact Management"
        Feature2_details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend nullam consectetur placerat pellentesque ut massa volutpat at. Diam pretium orci dui sagittis."
        Feature3="Task Management"
        Feature3_details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend nullam consectetur placerat pellentesque ut massa volutpat at. Diam pretium orci dui sagittis."
        Feature4="Document Storage"
        Feature4_details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend nullam consectetur placerat pellentesque ut massa volutpat at. Diam pretium orci dui sagittis."
      />
      {/* <Stats /> */}

      
      <CrmTestimonials />
    </>
  );
};

export default page;
