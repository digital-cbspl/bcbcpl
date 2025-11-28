import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../layout/header";
import Footer from "../layout/footer";
import PageTransition from "./page-transition";

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

async function getVisits() {
  try {
    const res = await fetch(`/api/visits`, {
      cache: "no-store",
    });

    const data = await res.json();
    return data.visits;
  } catch {
    return 0;
  }
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const visits = await getVisits();
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <PageTransition>{children}</PageTransition>
        <Footer visits={visits} />
      </body>
    </html>
  );
}
