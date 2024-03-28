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

const page = () => {
  return (
    <>
      <Hero />
      <TrustedBy />
      </>
  );
};

export default page;
