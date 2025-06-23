import type React from "react";
import type { Metadata } from "next";
import { Inter, Figtree } from "next/font/google";
import "./globals.css";

// You can keep Inter if you're using it somewhere else
const inter = Inter({ subsets: ["latin"] });

// Add Figtree
const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose the weights you need
  variable: "--font-figtree",           // optional: for use with CSS variable
});

export const metadata: Metadata = {
  title: "PepTalk - Talk Native. Translate Instantly. Connect Globally.",
  description:
    "No more switching apps or copying texts. Message in your language—they read in theirs. Seamless. Instant. Human.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={figtree.variable}>
      <body className={`font-figtree ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
