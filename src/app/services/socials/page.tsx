import React from "react";
import Feature from "@/components/Services/CRM/Feature";
import Contact from "@/components/Contact/Contact";
import HeroService from "@/components/Services/Software/HeroService";
import Trustedbyy from "@/components/Trustedby/Trustedbyy";
import reso from "@/../public/services/icons/reso.png";
import MovingCard from "@/components/Card/MovingCard";
import Crmportfolio from "@/components/Services/CRM/Crmportfolio";
import Social_media from "@/../public/services/icons/social media strategy.png";
import document_management from "@/../public/services/icons/mobile device compatibility.png";
import integration_management from "@/../public/services/icons/Integration.png";
import award from "@/../public/services/icons/award.png";
import advertise from "@/../public/services/icons/advertise.png";
import massenger from "@/../public/services/icons/massenger.png";

const page = () => {
  return (
    <>
      <HeroService
        title="Social Media Marketing"
        description="Maximize your online presence with our expert social media management."
      />

      <Trustedbyy />

      <Feature
        title="Social Media Marketing"
        feature1="Social Media Strategy"
        feature1desc="We'll develop a social media strategy to help build your brand on major platforms such as Facebook, Instagram & Tiktok."
        feature1icon={Social_media.src}

        feature2="Social Media Management"
        feature2desc="Our social media management includes creation of high quality content and regular posting to keep your audience engaged."
        feature2icon={integration_management.src}

        feature3="Apps & Messenger Marketing"
        feature3desc="Messenger campaigns are an effective way of driving engagement with large audiences. Speak to an expert from our team about how this could work for your business."
        feature3icon={massenger.src}

        feature4="Social Content Calendar"
        feature4desc="Once you have a social media strategy, you'll need to create a content calendar. Creating a content calendar will help you achieve your social media goals quicker and easier."
        feature4icon={reso.src}

        feature5="Social Media Advertising"
        feature5desc="Social media advertising is the best way to cut through the clutter online. We can help your brand with Facebook Ads, Instagram Ads, Tiktok Ads & More."
        feature5icon={advertise.src}

        feature6="Social Competitions"
        feature6desc="We are experienced at developing online competitions and can assist from idea inception through to landing pages and promotion. We can also write the copy for your online competitions, including any additional promotional material needed."
        feature6icon={award.src}

      />

      <Crmportfolio />

      <MovingCard />

      <Contact />
    </>
  );
};

export default page;
