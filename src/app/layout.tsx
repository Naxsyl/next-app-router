"use client";

import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "./navbar";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";

const disableNavbar = ["/login", "/register"];

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={poppins.className}>
        <SessionProvider>
          {!disableNavbar.includes(pathname) && <Navbar />}
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
