import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import { InternalLink } from "./_components/link";
import Sailor from "./_components/sailor";
import FooterContent from "./_components/footer-content";
import { Suspense } from "react";
import { Analytics } from "./_components/analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kollektiv Kaorle",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} grid grid-cols-1 grid-rows-[auto_1fr_auto] min-h-screen`}
      >
        <header className="flex justify-end w-screen h-[230px] font-serif lg:-mb-16">
          <nav className="mt-7 z-50 self-start flex flex-col gap-1 sm:flex-row sm:gap-5">
            <InternalLink href="/events">veranstaltungen</InternalLink>
            <InternalLink href="/about">das kollektiv</InternalLink>
          </nav>
          <div className="w-[200px] ml-[-70px]">
            <Image
              src="/images/Kaorle_Figur.svg"
              alt="Kaorle Figur"
              width={200}
              height={37}
              priority
              className="mr-6 mt-4 absolute"
            />
          </div>
        </header>
        {children}
        <footer className="mt-16">
          <div className="w-screen overflow-hidden relative h-64">
            <Sailor />
            <div className="w-[2500px] absolute bottom-0 -left-3">
              <Image
                src="/images/welle.svg"
                alt="Welle"
                width={4000}
                height={30}
                priority
              />
            </div>
          </div>
          <FooterContent />
        </footer>
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
