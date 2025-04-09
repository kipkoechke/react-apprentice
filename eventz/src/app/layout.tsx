import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Providers from "@/lib/provider";
import type { Metadata } from "next";
import { Caveat, Poppins } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Events",
  description: "Events app",
};

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const caveat = Caveat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-caveat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body className={`${poppins.variable} ${caveat.variable} antialiased`}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </Providers>
  );
}
