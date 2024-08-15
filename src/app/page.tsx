import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import CommingSoon from "@/components/CommingSoon";
import ScrollUp from "@/components/Common/ScrollUp";
import SocialLinks from "@/components/Common/SocialLinks";
import Contact from "@/components/Contact/form1";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import { Input } from "@/components/ui/input";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "",
  description: "",
  icons: "",
  // other metadata
};

export default function Home() {
  return (
    <>
      <CommingSoon />

      {/* <ScrollUp /> */}
      {/* <Hero /> */}
      {/* <Features /> */}
      {/* <Video /> */}
      {/* <Brands /> */}
      {/* <AboutSectionOne /> */}
      {/* <AboutSectionTwo /> */}
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      {/* <Blog /> */}
      {/* <Contact /> */}
    </>
  );
}
