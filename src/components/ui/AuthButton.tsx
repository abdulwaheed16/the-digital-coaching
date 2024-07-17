"use client";
import React from "react";
import { Button } from "./button";
import Link from "next/link";

interface IProps {
  text: string;
}
const AuthButton = ({ text }: IProps) => {
  const isLoading = false;

  return (
    <Button
      type="submit"
      className="flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
    >
      {isLoading ? "Loading..." : text}
    </Button>
  );
};

export default AuthButton;
