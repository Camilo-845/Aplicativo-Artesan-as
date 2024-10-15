import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import ScrollToTopButton from "./components/ScrollToTopButton";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Artesanias nuestra tierra",
  description: "Web App de artesanias de Boyacá",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `+
          "flex flex-col items-center p-5"}
      >
        <header id="inicio"className="mt-2">
          <Link href="/" >
            <Image
              src="./media/logo.svg"
              width={300}
              height={100}
              alt="Logo Artesanias nuestra tierra"
              priority
            />
          </Link>
        </header>
        {children}
        <ScrollToTopButton></ScrollToTopButton>
      </body>
    </html>
  );
}