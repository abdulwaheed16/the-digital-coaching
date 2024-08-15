import React from "react";
import SocialLinks from "./Common/SocialLinks";
import { Input } from "./ui/input";

const CommingSoon = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          {` We're Coming Soon!`}
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          {` We're putting the final touches on an amazing educational platform.
      Stay tuned for our launch!`}
        </p>
        <div className="mt-6 flex flex-col items-center justify-center md:mt-2 md:flex-row md:gap-8">
          <div className=" text-dark">
            Contact Us{" "}
            <span className="italic text-gray-700 ">+92 308 9141636</span>
          </div>
          <div className="my-3 flex items-center justify-center gap-4">
            <h3 className="font-medium text-dark">Follow us</h3>
            <SocialLinks />
          </div>
        </div>
        <form className="mx-auto mt-8 flex flex-col items-center justify-center gap-3  rounded-lg bg-white px-6 py-8 shadow-md md:w-3/4 md:flex-row">
          <Input
            placeholder="Enter your email address"
            className="text-md focus-visible:ring-primay w-full rounded-md border border-input bg-background bg-white px-3 py-2 font-medium text-gray-700 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
          />
          <button className=" hover:bg-ring-2 text-nowrap rounded bg-dark px-4 py-2 font-bold text-white transition delay-0 duration-200  hover:scale-105 hover:ring-gray-dark">
            Subscribe for Updates
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommingSoon;
