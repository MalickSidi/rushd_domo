import { Footer, Navbar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rushd Demo",
  description: "A Demo For Real Estate Analysis tool",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer className="bg-slate-400">
          <Footer />
          </footer>
      </body>
    </html>
  );
}
