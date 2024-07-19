import { PrismaAdapter } from "@auth/prisma-adapter";
import { prismadb } from "@/config/prismaConfig";
import CredentialProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";
import { NextConfig } from "next";
import { LoginForm } from "./types/auth";
import bcrypt from "bcryptjs";
import { comparePassword } from "./lib/utils";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prismadb),
  session: { strategy: "jwt" },

  // Providers----------------------------------------------------------------
  providers: [
    GoogleProvider({
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),

    // credentials Provider
    CredentialProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@gmail.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "********",
        },
      },
      async authorize(credentials) {
        console.log("login credentials: ", credentials);
        const { email, password } = credentials as LoginForm;
        if (!email || !password) {
          throw new Error("Please provide both email and password.");
        }

        const user = await prismadb.user.findUnique({
          where: {
            email,
          },
        });

        // const isPassMatch = comparePassword(user?.hashedPassword, password);
        // const isPassMatch = await bcrypt.compare(
        //   user.hashedPassword.toString(),
        //   password.toString(),
        // );

        // if (!isPassMatch) {
        //   throw new Error("Invalid email or password.");
        // }

        if (!user) {
          return null;
          // throw new Error("No user found with that email.");
        }

        return user;
      },
    }),
  ],

  // Callbacks----------------------------------------------------------------
  callbacks: {
    // async signIn({ account, profile }) {
    //   if (account.provider === "google") {
    //     return profile.email_verified && profile.email.endsWith("@example.com");
    //   }
    //   return true; // Do different verification for other providers that don't have `email_verified`
    // },
  },
}) satisfies NextConfig;
