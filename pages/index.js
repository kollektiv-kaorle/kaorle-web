import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
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

const BG_HUE_1 = 360;
const BG_HUE_2 = 228;
const BG_SAT_1 = 90;
const BG_SAT_2 = 70;
const BG_BRI_1 = 85;
const BG_BRI_2 = 95;

export default function Home() {
  return (
    <motion.div
      animate={{
        background: [
          `linear-gradient(180deg, hsl(${BG_HUE_1}, ${BG_SAT_2}%, ${BG_BRI_1}%) 0%, hsl(${BG_HUE_2}, ${BG_SAT_2}%, ${BG_BRI_2}%) 100%)`,
          `linear-gradient(180deg, hsl(${BG_HUE_1 - 20}, ${BG_SAT_1 - 40}%, ${
            BG_BRI_1 - 20
          }%) 0%, hsl(${BG_HUE_2 - 18}, ${BG_SAT_2}%, ${BG_BRI_2 + 2}%) 100%)`,
        ],
        // background: [
        //   "linear-gradient(180deg, hsl(54, 99%, 56%) 0%, hsl(28, 100%, 50%) 100%)",
        //   "linear-gradient(180deg, hsl(44, 99%, 56%) 0%, hsl(10, 100%, 50%) 100%)",
        // ],
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
            animation: fade-in 3s linear;

            @keyframes fade-in {
              0% {
                opacity: 0;
              }
              50% {
                opacity: 0;
              }
              100% {
                opacity: 1;
              }
            }
          `}
        >
          <div
            css={`
              width: 100vw;
              height: 100vh;

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
                animation: wave 14s cubic-bezier(0.36, 0.45, 0.63, 0.53)
                  infinite;
                transform: translate3d(0, 0, 0);
              }

              .wave:nth-of-type(2) {
                z-index: 10;
                top: -175px;
                animation: wave 14s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s
                    infinite,
                  swell 14s ease -1.25s infinite;
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
              <div className="wave" />
              <div className="wave" />
              <div
                css={`
                  z-index: 0;
                  /* border: 1px solid blue; */
                  position: absolute;
                  width: 300px;
                  height: 800px;
                  top: -510px;

                  animation: ship-x 14s cubic-bezier(0.36, 0.45, 0.63, 0.53) -3s
                    infinite;

                  // TODO use vw so it works for all display sizes
                  @keyframes ship-x {
                    0% {
                      transform: translateX(1600px);
                    }
                    100% {
                      transform: translateX(-400px);
                    }
                  }

                  @keyframes ship-y {
                    0% {
                      transform: translateY(0px) rotate(-5deg);
                    }
                    50% {
                      transform: translateY(45px) rotate(5deg);
                    }
                    100% {
                      transform: translateY(0px) rotate(-5deg);
                    }
                  }
                `}
              >
                <img
                  css={`
                    width: 300px;
                    /* border: 1px solid red; */
                    animation: ship-y 14s ease -2s infinite;
                  `}
                  src="/images/kat360.png"
                />
              </div>
            </div>
          </div>
        </div>

        <footer
          css={`
            position: absolute;
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
            <a href="/newsletter" target="_blank">
              Newsletter
            </a>
          </FooterItem>
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
            <div css="color: hsla(330, 99%, 80%, 0.4);">Gefördert durch</div>
            <div>
              <Image
                css={`
                  /* background-color: hsla(161, 50%, 50%, 0.2); */
                  margin-top: 0.5rem;
                `}
                src="/stadt-wien-kultur-logo.svg"
                width={150}
                height={40}
              />
              <Image
                css={`
                  /* background-color: hsla(161, 50%, 50%, 0.2); */
                  margin-top: 0.5rem;
                `}
                src="/shift-logo.png"
                width={40}
                height={40}
              />
            </div>
          </div>
        </footer>
      </Container>
    </motion.div>
  );
}
