import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { profile } from "@/lib/data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description = `${profile.name} is a ${profile.role} based in ${profile.location}, designing intuitive web and mobile interfaces for travel, hospitality and service brands.`;

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.role}`,
  description,
  authors: [{ name: profile.name }],
  keywords: [
    "Yashod Mendis",
    "UI/UX Designer",
    "Figma",
    "Sri Lanka",
    "Web Design",
    "Mobile App Design",
    "Portfolio",
  ],
  openGraph: {
    title: `${profile.name} | ${profile.role}`,
    description,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
