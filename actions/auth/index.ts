"use server";

import { signIn, signOut } from "@/auth";
import { revalidatePath } from "next/cache";

export const socialAuthHandler = async (provider: string) => {
  await signIn(provider, { redirectTo: "/" });
  console.log("Social Authentication: ");
  revalidatePath("/");
  // try {
  //   const response = await signIn(provider);
  //   console.log("Social Authentication: ", response);
  //   revalidatePath("/");
  // } catch (error) {
  //   console.log("Social Auth Error: ", error);
  //   throw Error(error);
  // }
};

// Register a user
export const register = (data: FormData) => {};

export const logout = async () => {
  await signOut({ redirectTo: "/signin" });
  revalidatePath("/");
};
