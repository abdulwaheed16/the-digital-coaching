"use server";

import { signIn, signOut } from "@/auth";
import { revalidatePath } from "next/cache";
import { prismadb } from "@/config/prismaConfig";
import { comparePassword, hashPassword } from "@/lib/utils";
import { RegisterForm } from "@/types/auth";
import { redirect } from "next/navigation";
import { AuthError } from "next-auth";

// SocialAuthHandler----------------------------------------------------------------
export const socialAuthHandler = async (provider: string) => {
  await signIn(provider, { redirectTo: "/" });
  console.log("Social Authentication: ");
  revalidatePath("/");
};

// Get user by email----------------------------------------------------------------
const getUserByEmail = async (email: string) => {
  try {
    const user = await prismadb?.user?.findUnique({
      where: { email },
    });

    return user;
  } catch (error) {
    return null;
  }
};

// Register a user----------------------------------------------------------------
export const registerUser = async (data: RegisterForm) => {
  const { fullName, email, password } = data;

  // Is user exists
  const user = await getUserByEmail(email);

  if (user) {
    // throw new Error("User already exists.");
    return { isUserExists: true, message: "User already exists." };
  }

  // Create a new user
  const hashedPassword = hashPassword(password);

  const newUser = { name: fullName, email, hashedPassword };

  try {
    await prismadb.user.create({
      data: newUser,
    });
    // redirect("/signup/verify");
    return { isSuccess: true, message: "User registered successfully." };
  } catch (error) {
    // throw new Error("Failed to register user.");
    console.log("Failed to register user, Error: ", error);
    return { isError: true, message: error.message };
  }
};

// Login a user----------------------------------------------------------------
export const loginUser = async (email: string, password: string) => {
  try {
    const user = await getUserByEmail(email);
    console.log("login user-exists", user);

    if (!user) {
      // throw new Error("User not found.");
      return {
        isUserNotFound: true,
        message: "You are NOT registered.",
      };
    }

    const isPasswordValid = comparePassword(user?.hashedPassword, password);

    if (!isPasswordValid) {
      // throw new Error("Invalid password.");
      return { isPasswordIncorrect: true, message: "Invalid password." };
    }

    try {
      await signIn("credentials", { email, password });
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error?.type) {
          case "CredentialsSignin":
            return { error: "Invalid credentials" };
        }
      }
    }

    return { isSuccess: true, message: "User logged in successfully." };
  } catch (error) {
    console.log("Failed to login user, Error: ", error);
    return { isError: true, message: error.message };
  }
};

// Logout a user----------------------------------------------------------------
export const logout = async () => {
  await signOut({ redirectTo: "/signin" });
  revalidatePath("/");
};
