import React from "react";
import Feature from "@/components/Services/CRM/Feature";
import Contact from "@/components/Contact/Contact";
import HeroService from "@/components/Services/Software/HeroService";
import Trustedbyy from "@/components/Trustedby/Trustedbyy";
import contact_management from "@/../public/services/icons/design support.png";
import responsive from "@/../public/services/icons/responsive.png";
import reso from "@/../public/services/icons/reso.png";
import Seo from "@/../public/services/icons/seo.png";
import MovingCard from "@/components/Card/MovingCard";
import Crmportfolio from "@/components/Services/CRM/Crmportfolio";



const page = () => {
  return (
    <>
      <HeroService
        title="MlS Integration"
        description="Seamless property listings integration, advanced search functionality, interactive maps, and customizable property details."
      />
      <Trustedbyy />

      <Feature title="Customer Relationship Management"
       feature1="Custom Design"
        feature1desc="Tailored website designs that reflect your brand identity and captivate your audience."
        feature1icon={contact_management.src}

        feature2="Responsive Layouts"
        feature2desc="Websites optimized for seamless viewing and navigation across all devices, including desktops, tablets, and smartphones."
        feature2icon={responsive.src}

        feature3="Reso Compliance"
        feature3desc="Development of RESO-compliant websites to ensure adherence to industry standards and compatibility with real estate data services."
        feature3icon={reso.src}

        feature4="SEO Optimization"
        feature4desc="Implementation of SEO best practices to improve search engine visibility and drive organic traffic to your website."
        feature4icon={Seo.src}

      />

      <Crmportfolio />

      <MovingCard />

      <Contact />
    </>
  );
};

export default page;
