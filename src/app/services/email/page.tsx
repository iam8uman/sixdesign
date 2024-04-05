import React from "react";
import Feature from "@/components/Services/CRM/Feature";
import Contact from "@/components/Contact/Contact";
import HeroService from "@/components/Services/Software/HeroService";
import Trustedbyy from "@/components/Trustedby/Trustedbyy";
import contact_management from "@/../public/services/mls/design.svg";
import document_management from "@/../public/services/icons/document.png";
import responsive from "@/../public/services/icons/responsive.svg";
import MovingCard from "@/components/Card/MovingCard";
import Crmportfolio from "@/components/Services/CRM/Crmportfolio";
import support from "@/../public/services/mls/support.svg";
import mobile from "@/../public/services/mls/mobile.svg";



const page = () => {
  return (
    <>
      <HeroService
        title="Email Markething"
        description="With our CRM, agents can efficiently nurture leads, close deals & foster long-lasting relationships."
      />
      <Trustedbyy />

      <Feature title="CRM"
       feature1="Design Service"
        feature1desc="Tailored website designs that reflect your brand identity and captivate your audience."
        feature1icon={contact_management.src}

        feature2="Responsiveness"
        feature2desc="Websites optimized for seamless viewing and navigation across all devices, including desktops, tablets, and smartphones."
        feature2icon={responsive.src}

        feature3=""
        feature3desc=""
        feature3icon=""

        feature4="Support"
        feature4desc="We are part of your team and we'll never leave you on your own. If you have issues or questions - just let us know. We'll be glad to help you ASAP."
        feature4icon={support.src}

        feature5="Mobile Device Compatibility"
        feature5desc="Intuitive interfaces that enhance user experience and guide visitors towards desired actions."
        feature5icon={mobile.src}

        feature6=""
        feature6desc=""
        feature6icon= ""

      />

      <Crmportfolio />

      <MovingCard />

      <Contact />
    </>
  );
};

export default page;
