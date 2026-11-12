import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import BackgroundVideo from "./components/BackgroundVideo";
import Footer from "./components/Footer";
import WindowLogger from "./components/WindowLogger";

export const metadata: Metadata = {
  title: "Rheannon Franklin Portfolio",
  description: "Portfolio for Rheannon Franklin",
};

type RootLayoutProps = {
    readonly children: React.ReactNode
} 

export default function RootLayout({
  children,
}: RootLayoutProps ) {
  return (
    <html lang="en">
      <body className="page relative">
        <WindowLogger />
        <BackgroundVideo />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}