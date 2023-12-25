
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import MainLayout from "@/components/RootLayout";
import { Providers } from "@/redux/provider";
import 'react-loading-skeleton/dist/skeleton.css'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sky Buy",
  description: "Welcome to Sky Buy – Your Ultimate Destination for Online Shopping!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
   
    <Providers>
    <html lang="en">
      <body className={inter.className}>
        <MainLayout>
          
          {children}
          
          
          
          </MainLayout>
      </body>
    </html>
    </Providers>
    </>
  );
}
