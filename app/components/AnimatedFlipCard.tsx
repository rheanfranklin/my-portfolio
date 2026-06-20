"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import "./AnimatedFlipCard.css";

type AnimatedFlipCardProps = {
  readonly front: React.ReactNode;
  readonly back: React.ReactNode;
  readonly width?: number | string;
  readonly height?: number | string;
};

export default function AnimatedFlipCard({
  front,
  back,
  width,
  height,

}: AnimatedFlipCardProps) {
  const [flipped, setFlipped] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Controls whether wipe animation is allowed
  const [allowWipe, setAllowWipe] = useState(false);

  // Disable wipe during flip to prevent flashing
  const handleFlip = () => {
    setAllowWipe(false); // turn off wipe immediately
    setFlipped((prev) => !prev);
  };

  // After flip completes, wipe stays disabled until mouse leaves + re-enters
  useEffect(() => {
    // Flip transition is 600ms (CSS)
    const timeout = setTimeout(() => {
      // Still disabled until hover re-entry
    }, 600);

    return () => clearTimeout(timeout);
  }, [flipped]);

  // Base border color (static)
  const baseColor = flipped
    ? "var(--color-accent-pink-dark)" // back side
    : "var(--color-accent-blue)";          // front side

  // Wipe color (opposite)
  const wipeColor = flipped
    ? "var(--color-accent-blue)"           // opposite of pink
    : "var(--color-accent-pink-dark)"; // opposite of teal

  // Wipe only activates when:
  // - hovered
  // - AND allowed (mouse re-entered after flip)
  const wipeActive = hovered && allowWipe;

  return (
    <motion.div
      style={{ width, height }}
      className="flip-card-container cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      onClick={handleFlip}
      onMouseEnter={() => {
        setHovered(true);
        setAllowWipe(true); // wipe only activates after re-entry
      }}
      onMouseLeave={() => {
        setHovered(false);
        setAllowWipe(false); // reset wipe when leaving
      }}
      animate={{
        scale: hovered ? 1.04 : 1,
        boxShadow: hovered
          ? "0 12px 30px rgba(0,0,0,0.35)"
          : "0 6px 15px rgba(0,0,0,0.15)",
        transition: { duration: 0.25, ease: "easeOut" },
      }}
    >
      <div className={`flip-card-inner ${flipped ? "flipped" : ""}`}>
        {/* FRONT + BACK FACES */}
        <div className="flip-card-face">{front}</div>
        <div className="flip-card-face flip-card-back">{back}</div>

        {/* STATIC BORDER (left + bottom) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            borderLeft: `4px solid ${baseColor}`,
            borderBottom: `4px solid ${baseColor}`,
          }}
        />

        {/* WIPE BORDER (animated, bottom-left origin, full height) */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            "--leftWipe": 0,
            "--bottomWipe": 0,

            backgroundImage: `
              /* LEFT WIPE: bottom → top */
              linear-gradient(to top, ${wipeColor}, ${wipeColor}),
              /* BOTTOM WIPE: left → right */
              linear-gradient(to right, ${wipeColor}, ${wipeColor})
            `,
            backgroundRepeat: "no-repeat",

            /* FULL HEIGHT WIPE */
            backgroundSize: `
              4px calc(100% * var(--leftWipe)),
              calc(100% * var(--bottomWipe)) 4px
            `,

            backgroundPosition: `
              left bottom,
              left bottom
            `,
          } as any}
          animate={{
            "--leftWipe": wipeActive ? 1 : 0,
            "--bottomWipe": wipeActive ? 1 : 0,
          }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}
