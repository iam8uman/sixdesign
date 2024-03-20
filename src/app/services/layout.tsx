import type { Metadata } from "next";
import { Open_Sans  } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/Navbar/Header";
import Footerr from "@/components/Footer/Footer";

//👇 Configure our font object
const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})
export const metadata: Metadata = {
  title: "SixDesign - Business Solution",
  description: "SixDesign is a Platform where you can design landing page, CRM, Email Marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Header />
        {children}
        <Footerr />
        </body>
    </html>
  );
}
