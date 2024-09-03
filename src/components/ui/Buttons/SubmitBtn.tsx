import React from "react";
import styles from "@/styles/buttons/submit-btn.module.css";
import { Button } from "../button";

const SubmitBtn = () => {
  return (
    <Button type="submit" className={`${styles?.submitbtn} h-12 w-full`}>
      <p>Submit</p>
    </Button>
  );
};

export default SubmitBtn;
