import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MenuProvider } from "@/context/MenuProvider";

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
  title: "Pallete",
  description: "Expert color solutions for every space",
  openGraph: {
    title: "Palette",
    description: "Expert color solutions for every space",
    url: "https://pallete-neon.vercel.app/",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Palette Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Palette",
    description: "Expert color solutions for every space",
    images: ["/logo.png"],
    site: "@pallete_expertcolor",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <MenuProvider>
        <body
          suppressHydrationWarning={true}
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar />
            {children}
          <Footer />
        </body>
      </MenuProvider>
    </html>
  );
}
