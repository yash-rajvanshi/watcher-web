import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alertify — Real-Time Product Availability Alerts",
  description:
    "Alertify notifies you the instant your desired products come back in stock. Subscribe to real-time availability alerts and never miss a restock again.",
  keywords: ["stock alerts", "restock notifications", "product availability", "alerting platform"],
  openGraph: {
    title: "Alertify — Real-Time Product Availability Alerts",
    description: "Get real-time alerts when your desired products become available.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-slate-800 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
