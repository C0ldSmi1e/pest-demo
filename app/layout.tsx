import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

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
  title: "Pest Control",
  description: "Pest Control",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="lazyOnload"
          src="https://tally.so/widgets/embed.js"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable}
        ${geistMono.variable} antialiased
        flex flex-col min-h-screen
        `}
      >
        <div className="flex-grow flex flex-col items-center text-color3 pt-20">
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
