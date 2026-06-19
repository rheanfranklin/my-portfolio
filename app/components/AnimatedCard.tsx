"use client";

import "./AnimatedCard.css"
import { useState } from "react";
import { motion } from "motion/react";

type AnimatedCardProps = {
  readonly content: React.ReactNode;
};

export default function AnimatedCard({
  content,
}: AnimatedCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="animated-card-container cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{
        y: hovered ? -6 : 0,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
    >
      <div className={`animated-card-cell ${hovered ? "card-hover" : ""}`}>
        {content}
      </div>
    </motion.div>
  );
}