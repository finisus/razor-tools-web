import type { Metadata } from "next";
import {
  Public_Sans,
  Old_Standard_TT,
  Spline_Sans_Mono,
} from "next/font/google";
import Providers from "@/lib/providers";
import { Navbar } from "@/components/navbar";
import "@/styles/globals.css";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

const oldStandardSerif = Old_Standard_TT({
  variable: "--font-oldstandard-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const splineMono = Spline_Sans_Mono({
  variable: "--font-spline-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Razor Tools",
  description: "Your personal razor, that cut through the trenches.",
  authors: [{ name: "Finisus", url: "https://finisus.dev" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` ${publicSans.variable} ${oldStandardSerif.variable} ${splineMono.variable} antialiased`}
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
