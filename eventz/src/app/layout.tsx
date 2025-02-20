import type { Metadata } from "next";
import { Poppins, Caveat } from "next/font/google";
import "./globals.css";
import EventProvider from "@/contexts/EventContext";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import TicketProvider from "@/contexts/TicketContext";

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
    <EventProvider>
      <TicketProvider>
        <html lang="en">
          <body
            className={`${poppins.variable} ${caveat.variable} antialiased`}
          >
            <Header />
            {children}
            <Footer />
          </body>
        </html>
      </TicketProvider>
    </EventProvider>
  );
}
