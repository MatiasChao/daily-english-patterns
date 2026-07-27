"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

export function Confetti() {
  useEffect(() => {
    const colors = ["#2563EB", "#60A5FA", "#93C5FD", "#1D4ED8"];

    confetti({
      particleCount: 90,
      spread: 75,
      startVelocity: 40,
      origin: { y: 0.6 },
      colors,
    });

    const timeout = setTimeout(() => {
      confetti({
        particleCount: 50,
        spread: 100,
        startVelocity: 30,
        origin: { y: 0.6 },
        colors,
      });
    }, 200);

    return () => clearTimeout(timeout);
  }, []);

  return null;
}
