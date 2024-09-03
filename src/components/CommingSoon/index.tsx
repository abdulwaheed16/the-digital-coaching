import React from "react";
import SocialLinks from "../Common/SocialLinks";
import { Input } from "../ui/input";
import EmailForm from "./Form";
import Link from "next/link";
import { Button } from "../ui/button";
import ContactBtnSoon from "../ui/Buttons/ContactBtnSoon";

const CommingSoon = () => {
  return (
    <div className="relative z-20 flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-100">
      <div className="p-8 text-center">
        <h1 className="text-4xl font-semibold text-gray-800">
          {` We're Coming Soon!`}
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          {` We're putting the final touches on an amazing educational platform.
      Stay tuned for our launch!`}
        </p>
        {/* <div className="mt-6 flex flex-col items-center justify-center md:mt-2 md:flex-row md:gap-8">
          <div className=" text-dark">
            Contact Us{" "}
            <span className="italic text-gray-700 ">+92 308 9141636</span>
          </div>
          <div className="my-3 flex items-center justify-center gap-4">
            <h3 className="font-medium text-dark">Follow us</h3>
            <SocialLinks />
          </div>
        </div> */}
        {/* Email Form */}
        {/* <EmailForm /> */}
        <div className="py-6">
          <ContactBtnSoon />
        </div>
      </div>

      {/* Page bg-Styling */}
      <div className="absolute left-0 top-0 z-[-1]">
        <svg
          width="1440"
          height="969"
          viewBox="0 0 1440 969"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_95:1005"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="1440"
            height="969"
          >
            <rect width="1440" height="969" fill="#090E34" />
          </mask>
          <g mask="url(#mask0_95:1005)">
            <path
              opacity="0.1"
              d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
              fill="url(#paint0_linear_95:1005)"
            />
            <path
              opacity="0.1"
              d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
              fill="url(#paint1_linear_95:1005)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_95:1005"
              x1="1178.4"
              y1="151.853"
              x2="780.959"
              y2="453.581"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_95:1005"
              x1="160.5"
              y1="220"
              x2="1099.45"
              y2="1192.04"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default CommingSoon;
