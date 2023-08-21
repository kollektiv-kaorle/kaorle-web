"use client";

import styles from "./styles.module.css";
import React, { useState } from "react";
import { ExternalLink, InternalLink } from "../link";

const MobileNav = (props: any) => {
  const [isToggledOn, setToggle] = useState(false);
  const toggle = () => setToggle(!isToggledOn);

  return (
    <div {...props}>
      <button
        type="button"
        onClick={toggle}
        aria-label={`${isToggledOn ? "close menu" : "open menu"}`}
        className="underline underline-offset-2 decoration-red-200 hover:decoration-inherit"
      >
        menu
      </button>

      {isToggledOn && (
        <div className={`${styles.menu} text-[#ff1922] bg-white z-50`}>
          <button
            type="button"
            onClick={toggle}
            aria-label={`${isToggledOn ? "close menu" : "open menu"}`}
            className="underline underline-offset-2 decoration-red-200 hover:decoration-inherit absolute top-5 left-8"
          >
            menu schließen
          </button>
          <div className="flex flex-col items-center gap-5">
            <div className="flex flex-col items-center gap-1 text-xl">
              <InternalLink className="not-italic" href="/about">
                <div onClick={toggle}>über uns</div>
              </InternalLink>
              <InternalLink className="not-italic" href="/venue">
                <div onClick={toggle}>ort</div>
              </InternalLink>
              <InternalLink className="not-italic" href="/events">
                <div onClick={toggle}>veranstaltungen</div>
              </InternalLink>
              <InternalLink className="not-italic" href="/projects">
                <div onClick={toggle}>projekte</div>
              </InternalLink>
            </div>
            <div className="flex flex-col items-center gap-1">
              <ExternalLink href="https://www.instagram.com/kollektiv_kaorle/">
                instagram
              </ExternalLink>
              <ExternalLink href="https://www.facebook.com/kollektiv.kaorle.wien">
                facebook
              </ExternalLink>
              <InternalLink href="/contact">
                <div onClick={toggle}>kontakt</div>
              </InternalLink>
            </div>

            {/* <a
              onClick={() => {
                router.push({ pathname, query }, asPath, {
                  locale: router.locale === 'de' ? 'en' : 'de',
                })
              }}
              className="mt-8 cursor-pointer text-4xl font-semibold tracking-tighter text-lilac hover:text-green"
            >
              <span css="font-size: 42px" className="mr-1">
                🌍
              </span>{' '}
              {router.locale === 'de' ? 'EN' : 'DE'}
            </a> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
