"use client";

import { motion } from "motion/react";

type AnimatedTextProps = {
  readonly text: string;
  readonly delay?: number;
  readonly className?: string;
};

export default function AnimatedText({ text, delay = 0, className = "" }: AnimatedTextProps) {
  const letters = text.split("");

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.015, delayChildren: delay }}
      className={`block w-full ${className}`}   // ⭐ changed from inline-block
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: `0.35em` },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.45, ease: "easeOut" },
            },
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

export function RainbowText({ text }: { text: string }) {
  return (
    <span>
      {text.split("").map((char, i) => (
        <span key={i} className="rainbow-letter inline-block">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}