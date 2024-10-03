"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/global.css";
import Providers from "@/lib/providers";
import { redirect, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { session: any };
}) {
  const [isDashboardRoute, setIsDashboardRoute] = useState(false);
  const pathname = usePathname();

  // useEffect(() => {
  //   if (pathname.startsWith("/dashboard")) {
  //     setIsDashboardRoute(true);
  //   } else {
  //     setIsDashboardRoute(false);
  //   }
  // }, [pathname]);

  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-white dark:bg-black ${inter.className}`}>
        <Providers session={params?.session}>
          {/* {!isDashboardRoute && <Header />} */}
          {children}

          {/* {isDashboardRoute ? <></> : <Footer />} */}
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
