import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import StageWiseToolbarWrapper from "./components/StageWiseToolbar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        {children}
        <StageWiseToolbarWrapper />
      </body>
    </html>
  );
}
