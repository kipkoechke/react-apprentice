"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function Photo() {
  return (
    <div className="relative h-full w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 2,
            duration: 0.4,
            ease: "easeInOut",
          },
        }}
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
          className="absolute h-[298px] w-[298px] mix-blend-lighten xl:h-[498px] xl:w-[498px]"
        >
          <Image
            src="/assets/photo.png"
            alt="Kelvin Chepkwony Photo"
            quality={100}
            fill
            priority
            className="object-contain"
          />
        </motion.div>

        <motion.svg
          className="h-[330px] w-[320px] xl:h-[500px] xl:w-[500px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
              transition: {
                duration: 20,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}

export default Photo;
