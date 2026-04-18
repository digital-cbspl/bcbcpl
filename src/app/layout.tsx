import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../layout/header";
import Footer from "../layout/footer";
import PageTransition from "./page-transition";
import DisablePrint from "../components/DisablePrint";
import DisableRightClick from "../components/DisableRightClick";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "B.C. Bhuyan Constructions",
  description: "Your partner in modern, efficient, and long-lasting construction projects.",
};


export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <DisablePrint />
        <DisableRightClick />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
