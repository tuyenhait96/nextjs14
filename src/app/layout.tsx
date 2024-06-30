import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { manrope } from "@/src/utils";
import Sidebar from "@/src/components/layout/Sidebar";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ThemeProvider } from "../components/common/ThemeProvider";

export const metadata: Metadata = {
  title: "Ucademy",
  description: "Nền tản khóa nextjs vip pro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={manrope.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
