"use client";

import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { ExternalLink, InternalLink } from "./link";
import nav from "../_config/nav";

const FooterContent: React.FC = () => {
  const { scrollY } = useScroll();
  return (
    <motion.div
    // initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
    // style={{ height: 20 }}
    >
      <div className="grid place-items-center xl:grid-cols-[1fr_1fr_1fr] font-serif pb-6 px-8 w-screen bg-white gap-5">
        <div className="flex gap-2 flex-col items-center md:items-start order-3 md:order-1">
          <div>gefördert durch</div>
          <div className="flex">
            <Image
              src="/images/stadt-wien-kultur-logo.svg"
              alt="Logo der Stadt Wien"
              width={150}
              height={40}
            />
            <div className="relative w-20 mx-2">
              <Image
                src="/images/dlkulturlogo-ottakring.jpg"
                alt="Kulturlogo des Bezirks Ottakring"
                fill
                objectFit="contain"
              />
            </div>
            <a href="https://basiskultur.at" className="relative w-16 mx-3">
              <Image
                src="/images/basiskultur-logo.png"
                alt="Logo von Basiskultur Wien"
                fill
                objectFit="contain"
              />
            </a>
            <a
              className="relative w-20"
              href="https://shift.wien/projekte/paradiesl-motor-fuer-eine-ko-produzierte-stadt/"
            >
              <Image
                src="/images/shift-logo.png"
                alt="Logo von BasisKultur SHIFT"
                fill
                objectFit="contain"
              />
            </a>
          </div>
        </div>
        <div className="mx-auto flex flex-col text-center items-center order-1 md:order-2">
          du willst auf dem laufenden bleiben?
          <br />
          wir schicken dir briefe...
          <InternalLink href={nav.newsletter.href}>
            zum newsletter anmelden
          </InternalLink>
        </div>
        <div className="flex flex-col gap-0 xl:text-right text-center order-2 xl:order-3 w-full">
          <ExternalLink href={nav.instagram.href}>
            {nav.instagram.label}
          </ExternalLink>
          <ExternalLink href={nav.facebook.href}>
            {nav.facebook.label}
          </ExternalLink>
          <InternalLink href={nav.contact.href} scroll>
            {nav.contact.label}
          </InternalLink>
        </div>
      </div>
    </motion.div>
  );
};

export default FooterContent;
