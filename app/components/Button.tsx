"use client";

import { fadeUp } from "@/lib/animations/fade";
import AnimatedSection from "./AnimatedSection";
import Link from "next/link";

type ButtonProps = {
    readonly content: React.ReactNode;
    readonly link: string;
    readonly newTab?: boolean;
}

export function Button({
    content,
    link,
    newTab=false,
}: ButtonProps): React.ReactNode {
    return <AnimatedSection variants={fadeUp} className="self-center">
        <Link href={link} target={newTab ? "_blank" : ""}>
            {content}
        </Link>
    </AnimatedSection>
}
