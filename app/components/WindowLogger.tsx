"use client";
import { useEffect } from "react";

export default function WindowLogger() {
  useEffect(() => {
    function logSize() {
      console.log("Window size:", window.innerWidth, window.innerHeight);
    }

    logSize();
    window.addEventListener("resize", logSize);

    return () => window.removeEventListener("resize", logSize);
  }, []);

  return null;
}
