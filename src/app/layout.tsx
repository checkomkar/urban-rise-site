import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import StageWiseToolbarWrapper from "./components/StageWiseToolbar";

const playfair = localFont({
  src: "../../public/fonts/PlayfairDisplay.ttf",
  variable: "--font-playfair",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const sephir = localFont({
  src: "./fonts/Sephir-Regular.otf",
  variable: "--font-sephir",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Urban Rise | Premium Real Estate Investment",
  description: "Discover exclusive real estate investment opportunities in prime urban locations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${openSans.variable} ${sephir.variable} antialiased`}>
        {children}
        <StageWiseToolbarWrapper />
      </body>
    </html>
  );
}
