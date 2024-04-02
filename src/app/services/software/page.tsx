import Header from "@/components/Navbar/Header";
import Service from "@/components/Services/Service";
import Image from "next/image";
import React from "react";
import logo from "@/../public/crowny-logo.svg";
import hero from "@/../public/hero-img.png";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { CircleArrowRight } from "lucide-react";
import Link from "next/link";
import Hero from "@/components/Services/Software/HeroService";
import TrustedBy from "@/components/Services/Software/TrustedBy";
import Whyus from "@/components/Services/Whyus";
import Ourclient from "@/components/Services/Ourclient";
import Whatwecan from "@/components/Services/Whatwecan";
import Workfolio from "@/components/Services/Software/Workfolio";
import ServiceTestimonials from "@/components/Testimonials/ServiceTestimonials";
import Feature from "@/components/Services/Software/Feature";
import Crmportfolio from "@/components/Services/CRM/Crmportfolio";
import Contact from "@/components/Contact/Contact";
import MovingCard from "@/components/Card/MovingCard";
import { HeroSection } from "@/components/Hero";

const page = () => {
  return (
    <>
      <HeroSection
       />
      <TrustedBy />
      {/* <Feature title="CRM" /> */}
      <Crmportfolio />
      {/* <Whyus /> */}
      {/* <Ourclient /> */}
      {/* <Whatwecan /> */}
      {/* <Workfolio /> */}
      {/* <ServiceTestimonials /> */}
      <MovingCard />
      <Contact />
    </>
  );
};

export default page;
