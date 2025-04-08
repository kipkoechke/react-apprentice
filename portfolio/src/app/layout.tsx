import Header from "@/components/header/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetBrainsMono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Kelvin portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.variable} antialiased`}>
        <Header />
        <StairTransition />
        <PageTransition> {children}</PageTransition>
      </body>
    </html>
  );
}
