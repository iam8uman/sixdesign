import React from "react";
import Feature from "@/components/Services/CRM/Feature";
import Contact from "@/components/Contact/Contact";
import HeroService from "@/components/Services/Software/HeroService";
import Trustedbyy from "@/components/Trustedby/Trustedbyy";
import responsive from "@/../public/services/icons/responsive.svg";
import lifetime_support from "@/../public/services/landingpage/image 209.svg";
import property from "@/../public/services/icons/property_listing.png";
import MovingCard from "@/components/Card/MovingCard";
import Crmportfolio from "@/components/Services/CRM/Crmportfolio";
import animation from "@/../public/services/icons/simple animation.png";
import Benefits from "@/components/Services/CRM/Benefits";
import { toASCII } from "punycode";

import tailored from "@/../public/services/landingpage/tailored.svg";
import getmore from "@/../public/services/landingpage/getmore.svg";
import loadfast from "@/../public/services/landingpage/loadfast.svg";
import seewhatlooks from "@/../public/services/landingpage/seewhatlooks.svg";
import eyecatchy from "@/../public/services/landingpage/eyecatchy.svg";
import workseverywhere from "@/../public/services/landingpage/workseverywhere.svg";

const page = () => {
  return (
    <>
      <HeroService
        title="Landing Page"
        description="Capture attention and drive conversions with captivating landing pages."
      />
      <Trustedbyy />

      <Feature
        title="Landing Page"
        feature1="Lifetime Support"
        feature1desc="Reliability is of utmost importance to us. If any bugs emerge in the future, even months or years later, just get in touch to get them fixed."
        feature1icon={lifetime_support.src}
        feature2="Responsive by Default"
        feature2desc="Optimization for tablets and mobile devices is nowadays our default. No designs? That's fine. Our developers will handle it. It's part of the deal."
        feature2icon={responsive.src}
        feature3=""
        feature3desc=""
        feature3icon=""
        feature4="Simple Animation"
        feature4desc="Things like simple carousels, tabs, accordions, sliders, lightboxes, popups, tooltips, and burger menus are on us. You don't even have to say it, we will add them."
        feature4icon={animation.src}
        feature5="Property Listing"
        feature5desc="Featured or latest property listings displayed in a visually appealing format, with essential details such as price, location, and key features visible at a glance."
        feature5icon={property.src}
        feature6=""
        feature6desc=""
        feature6icon=""
      />

      <div className="bg-slate-200 lg:bg-white">
        <Benefits
          buttonvalue="Why Us"
          title="Why Choose Us For Designing Landing Page"
          feature1="Tailored Design"
          feature1desc="Tailored design to attract more customers, crafted just for you."
          feature1icon={tailored.src}
          feature2="Get More Leads"
          feature2desc="We specialize in helping you attract more people to your offerings."
          feature2icon={getmore.src}
          feature3="Load Fast"
          feature3desc="Instant loading ensures visitors stay to explore your offerings."
          feature3icon={loadfast.src}
          feature4="See What Works"
          feature4desc="Analyze to see what works and what doesn't, empowering you to improve."
          feature4icon={seewhatlooks.src}
          feature5="Eye-Catching Look"
          feature5desc="Eye-catching design effortlessly grabs attention and prompts immediate action."
          feature5icon={eyecatchy.src}
          feature6="Works Everywhere"
          feature6desc="Access your CRM anywhere with our mobile-friendly app, staying connected on the go."
          feature6icon={workseverywhere.src}
        />
      </div>
      <Crmportfolio />

      <MovingCard />

      <Contact />
    </>
  );
};

export default page;
