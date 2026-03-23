import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "@/../utils/ScrollToTopButton";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ansaf Akhtar | Full Stack Developer",
  description:
    "Explore the portfolio of Ansaf Akhtar, a Professional Full Stack Developer specializing in React, TypeScript, and modern web solutions.",
  keywords: [
    "Ansaf Akhtar",
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Portfolio",
  ],
  authors: [{ name: "Ansaf Akhtar" }],
  openGraph: {
    title: "Ansaf Akhtar | Personal Portfolio",
    description:
      "Full Stack Developer — Building the future of the web.",
    url: "https://ansafakhtar-portfolio.vercel.app",
    siteName: "Ansaf Akhtar Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ansaf Akhtar | Full Stack Developer",
    description: "Building modern web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="text-white">
          <div className="container">{children}</div>
        </main>
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
