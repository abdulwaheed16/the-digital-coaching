import React from "react";
import styles from "@/styles/loader-main.module.css";

const Loading = () => {
  return (
    <div className="z-50 flex h-screen items-center justify-center bg-transparent">
      <div className={`${styles?.loader} `}>
        <div className={`${styles?.circle} bg-primary`}></div>
        <div className={`${styles?.circle} bg-primary`}></div>
        <div className={`${styles?.circle} bg-primary`}></div>
        <div className={`${styles?.circle} bg-primary`}></div>
      </div>
    </div>
  );
};

export default Loading;
