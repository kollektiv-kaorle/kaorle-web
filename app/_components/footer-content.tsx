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
      <div className="grid place-items-center md:grid-cols-[auto_1fr_auto] font-serif pb-6 px-8 w-screen bg-white gap-5">
        <div className="flex gap-2 flex-col items-center md:items-start order-3 md:order-1">
          <div>gefördert durch</div>
          <div className="flex">
            <Image
              src="/images/stadt-wien-kultur-logo.svg"
              alt="Logo der Stadt Wien"
              width={150}
              height={40}
            />
            <a href="https://shift.wien/projekte/paradiesl-motor-fuer-eine-ko-produzierte-stadt/">
              <Image
                src="/images/shift-logo.png"
                alt="Logo von BasisKultur SHIFT"
                width={40}
                height={40}
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
        <div className="flex flex-col gap-0 md:text-right text-center order-2 md:order-3">
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
