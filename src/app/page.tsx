import Service from "@/components/Services/Service";
import Testimonials from "@/components/Testimonials/Testimonials";

import Contact from "@/components/Contact/Contact";
import OurWork from "@/components/Ourwork/Ourwork";
import Header from "@/components/Hero/Hero";
import Trustedbyy from "@/components/Trustedby/Trustedbyy";
import tonyning from "@/../public/avatarr.jpg"
import shrutidua from "@/../public/avatar_1.jpg"
import samvalji from "@/../public/avatarrr.jpg"

export default function Home() {
  return (
    <>
      <Header />
      <Trustedbyy />
      <div className="mt-20">
        <Service />
      </div>
      <OurWork />
      {/* <Testimonials testimonials1=" “ SixDesign.ca delivers exceptional web design,
                          exceeding expectations with professionalism,
                          creativity, and seamless communication. Highly
                          recommended for outstanding results.” "
                          name1=" - Tony Ning"
                          position1="Real Estate Broker"
                          imglocation={tonyning}

                          testimonials2=" SixDesign.ca delivers exceptional web design
                          exceeding expectations with professionalism"
                          name2 ="Shruti Dua"
                          position2="Sales Representive"
                          imglocation={shrutidua}

                          testimonials3=" SixDesign.ca delivers exceptional web design
                          exceeding expectations with professionalism"
                          name3 ="Shruti Dua"
                          position3="Sales Representive"
                          imglocation={}


                           /> */}
      <Testimonials />
      <Contact />
    </>
  );
}
