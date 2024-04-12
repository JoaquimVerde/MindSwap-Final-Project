import SessionWrapper from "@/components/ui/session-wrapper";
import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./ui/fonts";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Acodemy",
  description: "Hack the World",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionWrapper>
        <body className={inter.className}>
          {children}
          <Toaster />
        </body>
      </SessionWrapper>
    </html>
  );
}
