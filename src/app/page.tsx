import Service from "@/components/Services/Service";
import Contact from "@/components/Contact/Contact";
import OurWork from "@/components/Ourwork/Ourwork";
import Header from "@/components/Hero/Hero";
import Trustedbyy from "@/components/Trustedby/Trustedbyy";
import Ourclient from "@/components/Services/Ourclient";
import MovingCard from "@/components/Card/MovingCard";

export default function Home() {
  return (
    <>
      <Header />
      <Trustedbyy />
      <div className="mt-20">
        <Service />
      </div>
      <OurWork />

      <MovingCard />
      <Ourclient />
      <Contact />
    </>
  );
}
