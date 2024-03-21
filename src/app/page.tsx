import Service from "@/components/Services/Service";
import Testimonials from "@/components/Testimonials/Testimonials";
import Footerr from "@/components/Footer/Footer";
import Princing from "@/components/Pricing/Pricing";
import Contact from "@/components/Contact/Contact";
import OurWork from "@/components/Ourwork/Ourwork";
import Herotailbits from "@/components/Hero/Herotailbits";
import Trustedby from "@/components/Trustedby/Trustedby";
import Header from "@/components/Navbar/Header";

export default function Home() {
  return (
    <>
      <Herotailbits />
      <Trustedby />
      <div className="mt-20">
        <Service />
      </div>
      <OurWork />
      <Testimonials />
      <Princing />
      <Contact />
    </>
  );
}
