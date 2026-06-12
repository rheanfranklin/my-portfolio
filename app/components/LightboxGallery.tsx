"use client";

import { useState, useEffect } from "react";

type LightboxGalleryProps = {
  dir: string;
  files: string[];
};

export default function LightboxGallery({ dir, files }: LightboxGalleryProps) {
  const [active, setActive] = useState<string | null>(null);

  // Lock scroll when overlay is open
  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [active]);

  return (
    <>
      <div className="gallery">
        {files.map((file) => (
          <figure key={file}>
            <button
                className="gallery-button"
                onClick={() => setActive(file)}
            >
                <img src={`/${dir}/${file}`} alt={file} />
            </button>

            <figcaption>
                <h3>Kitty</h3>
                <p>{file}</p>
            </figcaption>
            </figure>
        ))}
      </div>

      {active && (
        <div className="overlay">
          <button className="overlay-close" onClick={() => setActive(null)}>
            ✕
          </button>

          <img
            src={`/${dir}/${active}`}
            alt={active}
            className="overlay-img"
          />
        </div>
      )}
    </>
  );
}
