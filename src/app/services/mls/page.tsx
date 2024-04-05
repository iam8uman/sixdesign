import React from "react";
import Feature from "@/components/Services/CRM/Feature";
import Contact from "@/components/Contact/Contact";
import HeroService from "@/components/Services/Software/HeroService";
import Trustedbyy from "@/components/Trustedby/Trustedbyy";
import MovingCard from "@/components/Card/MovingCard";
import Crmportfolio from "@/components/Services/CRM/Crmportfolio";
import contact_management from "@/../public/services/icons/design support.png";
import responsive from "@/../public/services/icons/responsive.png";
import reso from "@/../public/services/icons/reso.png";
import Seo from "@/../public/services/icons/seo.png";
import mobile from "@/../public/services/icons/mobile device compatibility.png";
import fastloading from "@/../public/services/icons/simple animation.png";
import Benefits from "@/components/Services/CRM/Benefits";

import expertise from "@/../public/services/mls/expertise.png";
import technical from "@/../public/services/mls/technical.png";
import customization from "@/../public/services/mls/customization.png";
import reliability from "@/../public/services/mls/reliability.png";
import seamless from "@/../public/services/mls/seamless.png";
import support from "@/../public/services/mls/support.png";

const page = () => {
  return (
    <>
      <HeroService
        title="MLS Integration"
        description="Seamless property listings integration, advanced search functionality, interactive maps, and customizable property details."
      />
      <Trustedbyy />

      <Feature
        title="MLS"
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
        feature5="User Friendly Interfaces"
        feature5desc="Integration of MLS listings, property search tools, interactive maps, and other features to enhance user experience and functionality."
        feature5icon={mobile.src}
        feature6="Fast Loading Time"
        feature6desc="Optimized performance for quick loading times, reducing bounce rates and improving user satisfaction."
        feature6icon={fastloading.src}
      />

      <Benefits
      buttonvalue="Why Us"
        title="Why Choose Us For Designing MLS Website"
        feature1="Expertise & Experience"
        feature1desc="Proven expertise in web development and maintenance. Our diverse team of experts covers all your website needs."
        feature1icon={expertise.src}
        feature2="Technical Proficiency"
        feature2desc="Extensive experience, industry-leading solutions. We deliver cutting-edge, high-performance solutions tailored for usability and scalability."
        feature2icon={technical.src}
        feature3="Customization & Flexibility"
        feature3desc="Close collaboration, tailored solutions. From minor updates to major changes, we adapt to your evolving needs seamlessly."
        feature3icon={customization.src}
        feature4="Reliability & Trustworthiness"
        feature4desc="In web development, over 300 businesses trust us for quality work, timely delivery, and exceeding expectations."
        feature4icon={reliability.src}
        feature5="Seamless Communication"
        feature5desc="Nurture your leads and stay engaged with your clients effortlessly with automated follow-ups and reminders."
        feature5icon={seamless.src}
        feature6="Support & Customer Service"
        feature6desc="We're here for you, providing technical guidance and swift issue resolution. Count on personalized support that exceeds expectations."
        feature6icon={support.src}
      />

      <Crmportfolio />

      <MovingCard />

      <Contact />
    </>
  );
};

export default page;
