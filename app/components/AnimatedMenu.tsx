"use client";

import { motion, AnimatePresence } from "motion/react";
import type { ReactNode } from "react";

type AnimatedMenuProps = {
    readonly isOpen: boolean;
    readonly onClose: () => void;
    readonly children: ReactNode;
    readonly className?: string;
};

export default function AnimatedMenu({
    isOpen,
    onClose,
    children,
    className = "",
}: AnimatedMenuProps) {
    return (
        <div className="md:hidden overflow-hidden">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className={`md:hidden flex flex-col items-center gap-6 py-6 bg-black/40 backdrop-blur-md rounded-lg shadow-inner text-[20px] ${className}`}
                    >
                        {/* Close menu when clicking a link */}
                        <button
                            onClick={onClose}
                            className="flex flex-col items-center gap-6 bg-transparent border-none p-0 cursor-pointer"
                        >
                            {children}
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}