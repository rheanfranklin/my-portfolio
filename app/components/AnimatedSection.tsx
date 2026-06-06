"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import type { Variants } from "motion";

type AnimatedSectionProps = {
    readonly children: ReactNode;
    readonly variants: Variants;
    readonly className?: string;
};

export default function AnimatedSection({
    children,
    variants,
    className = "",
}: AnimatedSectionProps) {
    return (
        <motion.section
            variants={variants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className={className}
        >
            {children}
        </motion.section>
    );
}