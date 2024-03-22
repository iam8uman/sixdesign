import Service from "@/components/Services/Service";
import Testimonials from "@/components/Testimonials/Testimonials";

import Contact from "@/components/Contact/Contact";
import OurWork from "@/components/Ourwork/Ourwork";
import Herotailbits from "@/components/Hero/Herotailbits";
import Header from "@/components/Hero/Hero";
import Trustedbyy from "@/components/Trustedby/Trustedbyy";

export default function Home() {
  return (
    <>
      {/* <Herotailbits /> */}
      <Header />
      <Trustedbyy />
      <div className="mt-20">
        <Service />
      </div>
      <OurWork />
      <Testimonials />
      <Contact />
    </>
  );
}
