import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Iceem.tn - Professional Ice Solutions",
  description: "Leading provider of ice manufacturing and distribution services in Tunisia. Quality ice solutions for businesses and events.",
  keywords: "ice, ice manufacturer, ice delivery, Tunisia, ice solutions, commercial ice",
  openGraph: {
    title: "Iceem.tn - Professional Ice Solutions",
    description: "Leading provider of ice manufacturing and distribution services in Tunisia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
