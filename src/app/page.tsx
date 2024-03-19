import { Navbar } from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import BlogWrapper from "@/components/BlogWrapper";
import Herotailbits from "@/components/Hero/Herotailbits";
import Service from "@/components/Services/Service";
import Testimonials from "@/components/Testimonials/Testimonials";
import Footerr from "@/components/Footer/Footer";
import Princing from "@/components/Pricing/Pricing";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Herotailbits />
      <Service  />
      <Testimonials />
      <Princing />
      <Contact />
      <Footerr />
    </>
  );
}
