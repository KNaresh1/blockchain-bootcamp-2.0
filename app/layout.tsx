import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavBar } from "./components";
import "./globals.css";
import AppProvider from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJS Hardhat Template",
  description: "NextJS Hardhat Template for DApp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <NavBar />
          <main>{children}</main>
        </AppProvider>
      </body>
    </html>
  );
}
