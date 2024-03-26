import Service from "@/components/Services/Service";
import Testimonials from "@/components/Testimonials/Testimonials";

import Contact from "@/components/Contact/Contact";
import OurWork from "@/components/Ourwork/Ourwork";
import Header from "@/components/Hero/Hero";
import Trustedbyy from "@/components/Trustedby/Trustedbyy";
import tonyning from "@/../public/avatarr.jpg";
import shrutidua from "@/../public/avatar_1.jpg";
import samvalji from "@/../public/avatarrr.jpg";

export default function Home() {
  return (
    <>
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
