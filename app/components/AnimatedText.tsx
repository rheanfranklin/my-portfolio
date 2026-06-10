"use client";

import { motion } from "motion/react";
import {
  ReactNode,
  isValidElement,
  ReactElement,
  JSXElementConstructor,
} from "react";

type AnimatedTextProps = {
  readonly children: ReactNode;
  readonly delay?: number;
  readonly className?: string;
};

export default function AnimatedText({
  children,
  delay = 0,
  className = "",
}: AnimatedTextProps) {
  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.015, delayChildren: delay }}
      className={`block w-full ${className}`}
    >
      {renderAnimated(children)}
    </motion.span>
  );
}

/* -------------------------------------------------------
   Recursively animate JSX while preserving formatting
   ------------------------------------------------------- */
function renderAnimated(node: ReactNode): ReactNode {
  // 1. STRING → split into WORDS → then into LETTERS
  if (typeof node === "string") {
    return node.split(" ").map((word, wi) => (
      <span key={wi} className="inline-block whitespace-nowrap">
        {word.split("").map((char, ci) => (
          <motion.span
            key={ci}
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
            {char}
          </motion.span>
        ))}
        {/* Space between words */}
        <span className="inline-block">&nbsp;</span>
      </span>
    ));
  }

  // 2. VALID JSX ELEMENT → preserve it → recurse into children
  if (isValidElement(node)) {
    const element = node as ReactElement<
      any,
      string | JSXElementConstructor<any>
    >;

    const { children: childNodes, ...restProps } = element.props ?? {};

    return (
      <element.type {...restProps}>
        {renderAnimated(childNodes)}
      </element.type>
    );
  }

  // 3. ARRAY → map through children
  if (Array.isArray(node)) {
    return node.map((child, i) => <span key={i}>{renderAnimated(child)}</span>);
  }

  return null;
}


type RainbowTextProps = {
  readonly text: string;
};

export function RainbowText({ text }: RainbowTextProps) {
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