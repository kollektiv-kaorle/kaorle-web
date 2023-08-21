"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Sailor: React.FC = () => {
  return (
    <motion.div
      className="absolute bottom-[38px] right-8 md:right-[140px]"
      // style={{ translateX: scrollY }}
    >
      <motion.div
        animate={{ translateY: 10 }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          src="/images/Seglerin-extended.svg"
          alt="Seglerin"
          width={250}
          height={37}
          priority
        />
      </motion.div>
    </motion.div>
  );
};

export default Sailor;
