import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact/form1";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
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
      {/* <div className="flex h-screen w-full items-center justify-center"> */}
      {/* <h2 classNameName="text-xl font-medium italic">Coming soon...</h2> */}
      {/* </div> */}

      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
        <div className="p-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            {` We're Coming Soon!`}
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            {` We're putting the final touches on an amazing educational platform.
            Stay tuned for our launch!`}
          </p>
          <div className="mt-8">
            <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
              Subscribe for Updates
            </button>
          </div>
        </div>
      </div>
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
