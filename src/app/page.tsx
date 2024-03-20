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
      <Header />
      <Herotailbits />
      <Trustedby />
      <Service />
      <OurWork />
      <Testimonials />
      <Princing />
      <Contact />
      <Footerr />
    </>
  );
}
