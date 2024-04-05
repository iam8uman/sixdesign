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
import Benefits from "@/components/Services/CRM/Benefits";

import facebook from "@/../public/services/social/facebook.png";
import tiktok from "@/../public/services/social/tiktok.png";
import instagram from "@/../public/services/social/instagram.png";
import linkedin from "@/../public/services/social/linkedin.png";

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
        feature1desc="We'll develop a strategy to help build your brand on major platforms such as Facebook, Instagram & Tiktok."
        feature1icon={Social_media.src}
        feature2="Social Media Management"
        feature2desc="Our social media management includes creation of high quality content and regular posting to keep your audience engaged."
        feature2icon={integration_management.src}
        feature3="Apps & Messenger Marketing"
        feature3desc="Engage large audiences effectively with Messenger campaigns. Connect with our experts to explore how it can benefit your business."
        feature3icon={massenger.src}
        feature4="Social Content Calendar"
        feature4desc="Creating a content calendar will help you achieve your social media goals quicker and easier."
        feature4icon={reso.src}
        feature5="Social Media Advertising"
        feature5desc=" We can help your brand with Facebook Ads, Instagram Ads, Tiktok Ads & More."
        feature5icon={advertise.src}
        feature6="Social Competitions"
        feature6desc="We are experienced at developing online competitions & can assist from idea inception through to landing pages"
        feature6icon={award.src}
      />

      <Benefits
        title=""
        feature1="Facebook"
        feature1desc="Facebook marketing encompasses page optimization, engaging content creation, targeted ad usage, community building, and performance analysis to drive business growth and engagement."
        feature1icon={facebook.src}
        feature2="TikTok"
        feature2desc="TikTok marketing involves creating catchy videos, engaging with trends, using ads, building community, and tracking performance for brand visibility and growth."
        feature2icon={tiktok.src}
        feature3=""
        feature3desc=""
        feature3icon=""
        feature4="Instagram"
        feature4desc="Instagram marketing means making your profile shine, sharing interesting posts, using ads, connecting with your community, and checking results for business growth."
        feature4icon={instagram.src}
        feature5="Linkedin"
        feature5desc="LinkedIn marketing means polishing your profile, sharing relevant posts, using ads, networking, and tracking progress for professional growth."
        feature5icon={linkedin.src}
        feature6=""
        feature6desc=""
        feature6icon=""
      />

      <Crmportfolio />

      <MovingCard />

      <Contact />
    </>
  );
};

export default page;
