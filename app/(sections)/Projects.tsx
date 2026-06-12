"use client";

import AnimatedFlipCard from "../components/AnimatedCard";
import { PortfolioProjContent } from "@/content/projects";

export default function Projects() {
    return (
        <AnimatedFlipCard
            front={<h2 className="text-xl font-semibold">
                <PortfolioProjContent />
            </h2>}
            back={ <PortfolioProjContent /> }
        />
    );
}