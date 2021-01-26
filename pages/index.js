import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  background: yellow;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  margin-bottom: 0.5em;
`;

export default function Home() {
  return (
    <motion.div
      animate={{ filter: "hue-rotate(360deg)" }}
      transition={{
        default: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 20,
        },
      }}
    >
      <Container>
        <Head>
          <title>Kollektiv Kaorle</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Main>
          <div
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
                  color: hsl(360, ${Math.random() * 100}%, 50%);
                `}
              >
                {letter}
              </span>
            ))}
          </div>
          <ImageContainer>
            <motion.div
              animate={{ filter: "hue-rotate(360deg)" }}
              whileHover={{ rotate: 360 }}
              whileTap={{ scale: 0.5, rotate: 720 }}
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

        <footer>
          <motion.div
            whileHover={{
              scale: 1.5,
            }}
          >
            <a
              css="background-color: pink; color: blue;"
              href="https://instagram.com/kollektiv_kaorle"
              target="_blank"
            >
              @kollektiv_kaorle
            </a>
          </motion.div>
        </footer>
      </Container>
    </motion.div>
  );
}
