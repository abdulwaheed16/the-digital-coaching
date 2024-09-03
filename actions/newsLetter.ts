"use server";

import { NewsLetter } from "@/types";

export const sendNewsletter = ({ email }: NewsLetter) => {
  try {
    console.log("News Letter Email: " + email);
    return true;
  } catch (error) {
    return null;
  }
};
