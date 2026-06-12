"use client";

import { fadeUp } from "@/lib/animations/fade";
import AnimatedSection from "./AnimatedSection";

type PageHeaderProps = {
    readonly title: string;
};

export default function PageHeader({
    title,
}: PageHeaderProps): React.ReactNode {
    return (
        <AnimatedSection variants={fadeUp}>
            <div className="p-5" />
            <h1 className="section-header">{title}</h1>
        </AnimatedSection>
    )
}