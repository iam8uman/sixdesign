import { Navbar } from "@/components/Navbar/Navbar";
import BlogWrapper from "@/components/BlogWrapper";
import Service from "@/components/Services/Service";
import Testimonials from "@/components/Testimonials/Testimonials";
import Footerr from "@/components/Footer/Footer";
import Princing from "@/components/Pricing/Pricing";
import Contact from "@/components/Contact/Contact";
import OurWork from "@/components/Ourwork/Ourwork";
import Herotailbits from "@/components/Hero/Herotailbits";
import Hero from "@/components/Hero/Hero";
import Trustedby from "@/components/Trustedby/Trustedby";

export default function Home() {
  return (
    <>
      <Navbar />
      <Herotailbits />
      <Trustedby />
      <Service  />
      <OurWork />
      <Testimonials />
      <Princing />
      <Contact />
      <Footerr />
    </>
  );
}
