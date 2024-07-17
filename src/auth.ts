import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/config/prismaConfig";
import CredentialProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";
import { NextConfig } from "next";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
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
    // GoogleProvider,
    // credentials Provider
    CredentialProvider({}),
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
