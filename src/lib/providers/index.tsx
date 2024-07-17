import React from "react";
import AuthProvider from "./AuthProvider";
import { ThemeProvider } from "next-themes";

interface IProps {
  children: React.ReactNode;
  session: any;
}
const Providers = ({ children, session }: IProps) => {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <AuthProvider session={session}>{children}</AuthProvider>
    </ThemeProvider>
  );
};

export default Providers;
