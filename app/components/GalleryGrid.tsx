"use client";

import { useState } from "react";
import "./GalleryGrid.css";

type GalleryProps = {
  readonly images: string[];
};

export default function GalleryGrid({ images }: GalleryProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <>
      <div className="gallery">
        {images.map((src) => (
          <button
            key={src}
            type="button"
            className="gallery-item"
            style={{ backgroundImage: `url(${src})` }}
            onClick={() => setExpanded(src)}
            aria-label="Open image"
          />
        ))}
      </div>

      {expanded && (
        <button
          type="button"
          className="gallery-expanded"
          onClick={() => setExpanded(null)}
          aria-label="Close expanded image"
        >
          <img src={expanded} alt="Expanded" />
        </button>
      )}
    </>
  );
}
