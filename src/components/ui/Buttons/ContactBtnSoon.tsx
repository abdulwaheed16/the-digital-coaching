import React from "react";
import styles from "@/styles/buttons/contact-btn-soon.module.css";
import Link from "next/link";

const ContactBtnSoon = () => {
  return (
    <Link
      href={
        "https://docs.google.com/forms/d/e/1FAIpQLSfU6DWedNKI1cjaKtLOMxq_1iYBRXsTVGdHgpjEMz1CYPNVdg/viewform?embedded=true"
      }
      target="_blank"
    >
      <button className={`${styles?.btn_soon} mx-auto w-full md:w-1/2`}>
        <div className={`${styles?.svg_wrapper_1}`}>
          <div className={`${styles?.svg_wrapper}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
              ></path>
            </svg>
          </div>
        </div>
        <span>Contact Us</span>
      </button>
    </Link>
  );
};

export default ContactBtnSoon;
