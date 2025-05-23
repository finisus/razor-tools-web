import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Geist, Geist_Mono, Old_Standard_TT } from "next/font/google";
import Providers from "@/lib/providers";
import { Navbar } from "@/components/navbar";
import "@/styles/globals.css";

const InterSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const GeistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const GeistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const OldStandardSerif = Old_Standard_TT({
  variable: "--font-oldstandard-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const EmilysCandy = localFont({
  src: "./_fonts/Emilys_Candy/EmilysCandy-Regular.ttf",
  variable: "--font-emilys-candy",
});

export const metadata: Metadata = {
  title: "Razor Tools",
  description: "Your personal toolkit to cut through the trenches.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${InterSans.variable} ${GeistSans.variable} ${GeistMono.variable} ${OldStandardSerif.variable} ${EmilysCandy.variable} antialiased`}
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
