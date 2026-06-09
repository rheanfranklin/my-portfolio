"use client";

import { useState } from "react";
import { motion } from "motion/react";

type AnimatedIconGridProps = {
  readonly icon: React.ReactNode;
  readonly text: React.ReactNode;
};

export default function AnimatedIconGrid({
  icon,
  text,
}: AnimatedIconGridProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="icon-grid cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{
        y: hovered ? -6 : 0,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
    >
      <div className={`icon-cell icon ${hovered ? "icon-hover" : ""}`}>
        {icon}
      </div>

      <div className={`text-cell ${hovered ? "text-hover" : ""}`}>
        {text}
      </div>
    </motion.div>
  );
}