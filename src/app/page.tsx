import { Hero } from "@/components/sections/Hero";
import { Programs } from "@/components/sections/Programs";
import { WhyUs } from "@/components/sections/WhyUs";
import { ClassTypes } from "@/components/sections/ClassTypes";
import { Teachers } from "@/components/sections/Teachers";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Programs />
      <WhyUs />
      <ClassTypes />
      <Teachers />
      <Testimonials />
      <CTA />
    </>
  );
}
