import Service from "@/components/Services/Service";
import Contact from "@/components/Contact/Contact";
import OurWork from "@/components/Ourwork/Ourwork";
import Header from "@/components/Hero/Hero";
import Trustedbyy from "@/components/Trustedby/Trustedbyy";
import Ourclient from "@/components/Services/Ourclient";
import MovingCard from "@/components/Card/MovingCard";
import BeforeAfter from "@/components/beforeafter/BeforeAter";

export default function Home() {
  return (
    <>
      <Header />
      {/* <Trustedbyy /> */}
      <BeforeAfter />
      <div className="mt-10">
        <Service />
      </div>
      <OurWork />

      <MovingCard />
      <Ourclient />
      <Contact />
    </>
  );
}
