import React from "react";
import Feature from "@/components/Services/CRM/Feature";
import Contact from "@/components/Contact/Contact";
import HeroService from "@/components/Services/Software/HeroService";
import Trustedbyy from "@/components/Trustedby/Trustedbyy";
import contact_management from "@/../public/services/icons/contact_management.svg";
import document_management from "@/../public/services/icons/document.svg";
import reso from "@/../public/services/icons/reso.svg";
import integration from "@/../public/services/icons/integration.svg";
import calendar from "@/../public/services/icons/calendar.svg";
import MovingCard from "@/components/Card/MovingCard";
import Crmportfolio from "@/components/Services/CRM/Crmportfolio";
import Trustedbyyyy from "@/components/Trustedby/Trustedbyy";
import Benefits from "@/components/Services/CRM/Benefits";

import efficiency from "@/../public/services/benefits/efficiency.svg";
import productivity from "@/../public/services/benefits/productivity.svg";
import collaboration from "@/../public/services/benefits/collaboration.svg";
import organization from "@/../public/services/benefits/organization.svg";
import engagement from "@/../public/services/benefits/engagement.svg";
import flexibility from "@/../public/services/benefits/flexibility.svg";

const page = () => {
  return (
    <>
      <HeroService
        title="CRM"
        description="With our CRM, agents can effectively nurture leads, close deals & foster long-lasting relationship."
      />
      <Trustedbyy />

      <Feature
        title="CRM"
        feature1="Lead Management"
        feature1desc="Track your leads effectively with our intuitive lead management tools."
        feature1icon={contact_management.src}
        feature2="Contact Management"
        feature2desc="Efficiently manage client info with our integrated contact management solution."
        feature2icon={calendar.src}
        feature3="Document Storage"
        feature3desc="Securely store and access documents anywhere, anytime, eliminating paper clutter."
        feature3icon={document_management.src}
        feature4="Integration"
        feature4desc="Effortlessly integrate CRM with MLS listings and make informed decisions"
        feature4icon={integration.src}
        feature5="Task Management"
        feature5desc="Efficiently manage tasks, set reminders, and track progress effortlessly."
        feature5icon={reso.src}
        feature6="Automated Follow-ups"
        feature6desc="Automate follow-ups, nurture leads, and engage clients effortlessly."
        feature6icon={calendar.src}
      />

      
      <div className="bg-slate-200 lg:bg-white">
        <Benefits
          buttonvalue="Benefits"
          title="Explore The Benefits Of Our CRM"
          feature1="Efficiency"
          feature1desc="Streamline your workflow and save time with automated lead capture, task management, and follow-ups."
          feature1icon={efficiency.src}
          feature2="Productivity"
          feature2desc="Stay on top of your tasks and deadlines, prioritize your activities, and maximize your productivity."
          feature2icon={productivity.src}
          feature3="Collaboration"
          feature3desc="Collaborate seamlessly with team members and share important information in real-time."
          feature3icon={collaboration.src}
          feature4="Organization"
          feature4desc="Keep all your client information, communication history, and documents in one centralized platform for easy access."
          feature4icon={organization.src}
          feature5="Engagement"
          feature5desc="Nurture your leads and stay engaged with your clients effortlessly with automated follow-ups and reminders."
          feature5icon={engagement.src}
          feature6="Flexibility"
          feature6desc="Access your CRM anytime, anywhere, with our mobile-friendly app, and stay connected on the go."
          feature6icon={flexibility.src}
        />
      </div>

      <Crmportfolio />

      <MovingCard />

      <Contact />
    </>
  );
};

export default page;
