import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3em;
  overflow: hidden;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const ImageContainer = styled.div`
  z-index: 9999;
  margin-top: -9vh;
  padding: 0 6vw;
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

const FooterItem = styled(motion.div).attrs({
  initial: {
    color: "hsla(330, 99%, 80%, 1)",
    background:
      "linear-gradient(90deg, hsla(330, 99%, 80%, 0.15) 0%, hsla(28, 100%, 50%, 0.15) 100%)",
  },
  whileHover: {
    scale: 1.15,
    color: "hsla(58, 99%, 60%, 1)",
    opacity: 1,
    background:
      "linear-gradient(60deg, hsla(330, 99%, 80%, 0.9) 0%, hsla(40, 100%, 50%, 0.9) 100%)",
  },
  transition: {
    scale: { type: "spring", stiffness: 150 },
  },
})`
  padding: 0 0.25em;
  z-index: 9999;
`;

export default function Home() {
  return (
    <motion.div
      animate={{
        background: [
          "linear-gradient(180deg, hsl(54, 99%, 56%) 0%, hsl(28, 100%, 50%) 100%)",
          "linear-gradient(180deg, hsl(44, 99%, 56%) 0%, hsl(10, 100%, 50%) 100%)",
        ],
      }}
      transition={{
        default: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 10,
          stiffness: 0,
        },
      }}
    >
      <Container>
        <Head>
          <title>Kollektiv Kaorle</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Main>
          {/* <div
            css={`
              font-size: 2em;
              @media (max-width: 600px) {
                font-size: 1em;
              }
              font-weight: bold;
              word-break: keep-all;
            `}
          >
            {"WELCOME TO KAORLE".split("").map((letter) => (
              <span
                css={`
                  color: hsl(20, ${Math.random() * 100}%, 60%);
                `}
              >
                {letter}
              </span>
            ))}
          </div> */}
          <ImageContainer>
            <motion.div
              // animate={{ filter: "hue-rotate(360deg)" }}
              animate={{ filter: ["hue-rotate(0deg)", "hue-rotate(-110deg)"] }}
              whileHover={{ rotate: 360 }}
              // whileTap={{ scale: 0.5, rotate: 720 }}
              whileTap={{ rotate: 720 }}
              transition={{
                rotate: { type: "spring" },
                scale: { type: "spring" },
                default: {
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 10,
                },
              }}
            >
              <Image src="/logo.svg" width={500} height={500} />
            </motion.div>
          </ImageContainer>
        </Main>
        <div
          css={`
            bottom: -50px;
            overflow: hidden;
            position: relative;
            width: 100vw;
            height: 100vh;
          `}
        >
          <div
            css={`
              width: 100vw;
              height: 100vh;
              /* cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🦄</text></svg>")
                  16 0,
                auto; */

              .ocean {
                height: 18%;
                width: 100%;
                position: absolute;
                bottom: 0;
                left: 0;
                background: #015871;
              }

              .wave {
                background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg)
                  repeat-x;
                position: absolute;
                top: -198px;
                width: 6400px;
                height: 198px;
                animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
                transform: translate3d(0, 0, 0);
              }

              .wave:nth-of-type(2) {
                top: -175px;
                animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
                  swell 7s ease -1.25s infinite;
                opacity: 1;
              }

              @keyframes wave {
                0% {
                  margin-left: 0;
                }
                100% {
                  margin-left: -1600px;
                }
              }

              @keyframes swell {
                0%,
                100% {
                  transform: translate3d(0, -25px, 0);
                }
                50% {
                  transform: translate3d(0, 5px, 0);
                }
              }
            `}
          >
            <div className="ocean">
              <div className="wave"></div>
              <div className="wave"></div>
            </div>
          </div>
        </div>

        <footer
          css={`
            position: absolute;
            /* bottom: 4.5rem; */
            bottom: 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            * {
              margin: 0.15em;
            }
            z-index: 9999;
          `}
        >
          <FooterItem>
            <a href="https://instagram.com/kollektiv_kaorle" target="_blank">
              @kollektiv_kaorle
            </a>
          </FooterItem>
          <FooterItem>
            <a href="mailto:post@kollektiv-kaorle.at">
              post@kollektiv-kaorle.at
            </a>
          </FooterItem>
          <FooterItem>
            <a href="https://goo.gl/maps/arid39WV6yVhccPm9" target="_blank">
              Schmalzhofgasse 5/2, 1060 Wien
            </a>
          </FooterItem>
          <div
            css={`
              margin-top: 1rem;
              display: flex;
              flex-direction: column;
              align-items: center;
              font-weight: 300;
              font-size: 0.8rem;
            `}
          >
            <div css="color: hsla(330, 99%, 80%, 0.4);">Supported by</div>
            <Image
              css={`
                /* background-color: hsla(161, 50%, 50%, 0.2); */
                margin-top: 0.5rem;
              `}
              src="/stadt-wien-kultur-logo.svg"
              width={150}
              height={40}
            />
          </div>
        </footer>
      </Container>
    </motion.div>
  );
}
