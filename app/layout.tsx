import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const sansFont = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
});

const serifFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Pangaea Realty | Global Wealth Intelligence & Real Estate Advisory",
  description: "Helping ultra-high-net-worth investors build global wealth, sovereign residency pathways, and international freedom through strategic real estate acquisition.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth selection:bg-[#C8A96B] selection:text-[#070707]">
      <body className={`${sansFont.variable} ${serifFont.variable} bg-[#070707] text-[#F5F1E8] antialiased min-h-screen overflow-x-hidden font-sans`}>
        {/* Subtle global film grain overlay */}
        <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPg==')] bg-repeat" />
        {children}
      </body>
    </html>
  );
}