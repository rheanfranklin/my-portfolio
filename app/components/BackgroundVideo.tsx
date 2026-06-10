"use client";

import { useEffect } from "react";

export default function BackgroundVideo() {
  useEffect(() => {
    const video = document.getElementById("bgVideo") as HTMLVideoElement | null;
    if (!video) return;

    // Slow down playback
    video.playbackRate = 1;
  }, []);

  return (
    <video
      id="bgVideo"
      src="/images/background/fluid-background-loop.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="fixed top-0 left-0 w-full h-full object-cover -z-50"
    />
  );
}
