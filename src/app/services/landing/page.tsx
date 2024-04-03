import React from "react";
import Feature from "@/components/Services/CRM/Feature";
import Contact from "@/components/Contact/Contact";
import HeroService from "@/components/Services/Software/HeroService";
import Trustedbyy from "@/components/Trustedby/Trustedbyy";
import responsive from "@/../public/services/icons/responsive.png";
import lifetime_support from "@/../public/services/icons/lifetime_support.png";
import property from "@/../public/services/icons/property_listing.png";
import MovingCard from "@/components/Card/MovingCard";
import Crmportfolio from "@/components/Services/CRM/Crmportfolio";
import animation from "@/../public/services/icons/simple animation.png";



const page = () => {
  return (
    <>
      <HeroService
        title="Landing Page"
        description="Capture attention and drive conversions with captivating landing pages."
      />
      <Trustedbyy />

      <Feature title="Landing Page"
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
        feature6icon= ""

      />

      <Crmportfolio />

      <MovingCard />

      <Contact />
    </>
  );
};

export default page;
