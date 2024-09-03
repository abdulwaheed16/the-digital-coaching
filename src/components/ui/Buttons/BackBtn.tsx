"use client";
import React from "react";
import styles from "@/styles/buttons/back-btn.module.css";
import { useFormState } from "@/components/Contact/FormContext";

const BackBtn = () => {
  const { onHandleBack } = useFormState();
  return (
    <button
      className={`${styles?.back_btn} h-12  w-full bg-primary`}
      onClick={onHandleBack}
    >
      <span className={`${styles?.label}`}>Back</span>
      <span className={`${styles?.icon}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="rotate-180"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            fill="currentColor"
            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
          ></path>
        </svg>
      </span>
    </button>
  );
};

export default BackBtn;
