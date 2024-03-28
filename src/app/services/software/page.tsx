import Header from "@/components/Navbar/Header";
import Service from "@/components/Services/Service";
import Image from "next/image";
import React from "react";
import logo from "@/../public/crowny-logo.svg";
import hero from "@/../public/hero-img.png";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { CircleArrowRight } from "lucide-react";
import Link from "next/link";
import Hero from "@/components/Services/Hero";
import TrustedBy from "@/components/Services/TrustedBy";
import Whyus from "@/components/Services/Whyus";
import Ourclient from "@/components/Services/Ourclient";
import Whatwecan from "@/components/Services/Whatwecan";
import Workfolio from "@/components/Services/Workfolio";
import MovingCard from "@/components/Card/MovingCard";
import ServiceTestimonials from "@/components/Testimonials/ServiceTestimonials";

const page = () => {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Whyus />
      <Ourclient />
      <Whatwecan />
      <Workfolio />
      <ServiceTestimonials />
    </>
  );
};

export default page;
