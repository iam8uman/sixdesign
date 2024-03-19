import { Navbar } from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import BlogWrapper from "@/components/BlogWrapper";
import Herotailbits from "@/components/Hero/Herotailbits";
import Service from "@/components/Services/Service";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <BlogWrapper>
        <Hero />
      </BlogWrapper> */}
      <Herotailbits />
      <Service  />
      <Testimonials />
    </>
  );
}
