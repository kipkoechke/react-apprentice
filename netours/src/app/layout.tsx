import Header from "@/components/layouts/Header";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Netours | Exciting tours for adventurous people",
  description: "Find your next adventure with Natours",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen flex flex-col bg-gray-100 font-lato ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
