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
  title: "Dubai Real Estate Investment | 9% ROI Properties | Urban Rise",
  description: "Invest in Dubai real estate with up to 9% ROI. 100% foreign ownership, Golden Visa eligible properties from AED 500K. Expert guidance for international investors in Dubai Marina, Downtown Dubai & Business Bay.",
  keywords: [
    "Dubai real estate",
    "Dubai property investment", 
    "Golden Visa Dubai",
    "foreign ownership Dubai",
    "Dubai ROI",
    "off-plan Dubai",
    "Dubai Marina properties",
    "Downtown Dubai real estate",
    "Business Bay investment",
    "UAE property investment",
    "Dubai real estate agent",
    "international property investment Dubai"
  ],
  authors: [{ name: "Urban Rise Real Estate" }],
  creator: "Urban Rise Real Estate",
  publisher: "Urban Rise Real Estate",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://urbanrise.ae",
    title: "Dubai Real Estate Investment | 9% ROI Properties | Urban Rise",
    description: "Premium Dubai properties with exceptional ROI. Expert guidance for international investors seeking Golden Visa eligible real estate in Dubai.",
    siteName: "Urban Rise Real Estate",
    images: [
      {
        url: "/images/dubai-properties-og.jpg",
        width: 1200,
        height: 630,
        alt: "Dubai Real Estate Investment Opportunities - Urban Rise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dubai Real Estate Investment | Urban Rise",
    description: "Premium Dubai properties with exceptional ROI. Golden Visa eligible investments from AED 500K.",
    images: ["/images/dubai-properties-twitter.jpg"],
    creator: "@UrbanRiseDubai",
  },
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://urbanrise.ae",
    languages: {
      'en-AE': 'https://urbanrise.ae',
      'ar-AE': 'https://urbanrise.ae/ar',
    },
  },
  category: "Real Estate",
  classification: "Real Estate Investment Services",
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
