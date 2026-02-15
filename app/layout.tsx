import type { Metadata } from "next";
import { Outfit, Joti_One } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jotiOne = Joti_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Deexen AI — The AI-Powered IDE for Learning & Development",
  description:
    "Join the waitlist for Deexen AI, the revolutionary AI-powered IDE that makes coding easier and faster to learn. Multiple AI modes, full IDE capabilities, and intelligent learning support.",
  keywords: [
    "AI IDE",
    "coding assistant",
    "learn to code",
    "AI-powered development",
    "Deexen",
    "beta testing",
  ],
  openGraph: {
    title: "Deexen AI — The AI-Powered IDE for Learning & Development",
    description:
      "Join the waitlist for Deexen AI. Code smarter. Learn faster. Build better.",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${jotiOne.variable} font-sans`}>{children}</body>
    </html>
  );
}
