import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Provider from "@/components/Provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
    title: "Hunt Pro | Your All-in-One E-commerce Solution",
    description: "Hunt Pro is your ultimate destination for buying and selling products online. Log in with your email or Google account to manage your dashboard, add products, and more.",
    keywords: ["hunt pro", "e-commerce", "buy products", "sell online", "next.js", "next-auth", "google login", "email login", "bangladesh"],
    authors: [{ name: "Your Name Here" }], // Optionally, add your name
    openGraph: {
        title: "Hunt Pro",
        description: "An e-commerce platform built with Next.js and NextAuth.js.",
        url: "https://your-website.com", // Replace with your actual domain
        siteName: "Hunt Pro",
        images: [
            {
                url: "https://your-website.com/og-image.png", // A good image for social media sharing
                width: 800,
                height: 600,
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Hunt Pro",
        description: "An e-commerce platform built with Next.js and NextAuth.js.",
        creator: "@your_twitter_handle",
        images: ["https://your-website.com/twitter-image.png"],
    },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>

        <Navbar></Navbar>
        <div className="min-h-[90vh]">{children}</div>
        <Footer></Footer>

        </Provider>
      </body>
    </html>
  );
}
