import Metadata from "next";
import "./globals.css";
import Header from "@/components/Navbar/Header";
import Footerr from "@/components/Footer/Footer";

import { Inter } from 'next/font/google'
 
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})
 

export const metadata: Metadata = {
  title: "SixDesign - Business Solution",
  description:
    "SixDesign is a Platform where you can design landing page, CRM, Email Marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <Header />
        {children}
        <Footerr />
      </body>
    </html>
  );
}
