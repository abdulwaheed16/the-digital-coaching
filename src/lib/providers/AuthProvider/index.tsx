"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";

interface IProps {
  children: React.ReactNode;
  session: any;
}
const AuthProvider = ({ children, session }: IProps) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default AuthProvider;
