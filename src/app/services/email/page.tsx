import React from "react";
import Feature from "@/components/Services/CRM/Feature";
import Contact from "@/components/Contact/Contact";
import HeroService from "@/components/Services/Software/HeroService";
import Trustedbyy from "@/components/Trustedby/Trustedbyy";
import contact_management from "@/../public/services/icons/contact_management.png";
import document_management from "@/../public/services/icons/document.png";
import integration_management from "@/../public/services/icons/Integration.png";
import MovingCard from "@/components/Card/MovingCard";
import Crmportfolio from "@/components/Services/CRM/Crmportfolio";



const page = () => {
  return (
    <>
      <HeroService
        title="Email Markething"
        description="With our CRM, agents can efficiently nurture leads, close deals & foster long-lasting relationships."
      />
      <Trustedbyy />

      <Feature title="Customer Relationship Management"
       feature1="Lead Management"
        feature1desc="Organize and track your leads effectively with our intuitive lead management tools. Never miss an opportunity with automated lead capture and assignment features."
        feature1icon={contact_management.src}

        feature2="Contact Management"
        feature2desc="Keep all your client information in one place with our comprehensive contact management system. Easily access client details, communication history, and important documents whenever you need them."
        feature2icon={contact_management.src}

        feature3="Document Storage"
        feature3desc="Store all your important documents securely in the cloud and access them from anywhere, anytime. Say goodbye to paper clutter and never lose a document again."
        feature3icon={document_management.src}

        feature4="Integration"
        feature4desc="Integrate our CRM seamlessly with MLS listings, email marketing, transaction management, and other tools. Streamline workflow, eliminate data silos, and make informed decisions effortlessly."
        feature4icon={integration_management.src}

      />

      <Crmportfolio />

      <MovingCard />

      <Contact />
    </>
  );
};

export default page;
