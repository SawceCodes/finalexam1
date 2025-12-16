import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Menu } from "@/components/menu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Payroll Management System",
  description: "Professional payroll management and employee compensation system",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="sticky top-0 z-50 w-full border-b border-gold-dark bg-black-card">
          <div className="container flex h-16 items-center justify-between px-4">
            <div className="flex items-baseline gap-3">
              <h1 className="text-xl font-bold text-white">Hair Salon Business</h1>
              <span className="text-sm font-semibold text-gold/80">
                by Steven Zheng
              </span>
            </div>
            <Menu />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
