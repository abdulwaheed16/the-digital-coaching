import React from "react";
import AuthProvider from "./AuthProvider";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import QueryProvider from "./QueryProvider";
import { redirect, usePathname } from "next/navigation";

interface IProps {
  children: React.ReactNode;
  session: any;
}
const Providers = ({ children, session }: IProps) => {
  const pathname = usePathname();
  if (pathname !== "/") {
    redirect("/");
  }
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <AuthProvider session={session}>
        <QueryProvider>{children}</QueryProvider>
        <Toaster richColors closeButton />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default Providers;
