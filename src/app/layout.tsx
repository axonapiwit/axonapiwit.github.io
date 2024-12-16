import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import FireFliesBackground from "@/components/FireFliesBackground";
import WindBackground from "@/components/WindBackground";

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
  title: "Portfolio Next App",
  description: "Generated by Apiwit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
      >
        {children}
        <WindBackground />
        {/* <FireFliesBackground /> */}
        {/* <Sound /> */}
        <div id="my-modal" />
      </body>
    </html>
  );
}
