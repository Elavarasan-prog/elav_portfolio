"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

interface MousePosition {
  x: number;
  y: number;
  normalizedX: number;
  normalizedY: number;
}

export function useMouseParallax(intensity: number = 20): MousePosition {
  const [position, setPosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
  });
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced || typeof window === "undefined") return;

    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const normalizedX = (event.clientX / innerWidth - 0.5) * 2;
      const normalizedY = (event.clientY / innerHeight - 0.5) * 2;

      setPosition({
        x: normalizedX * intensity,
        y: normalizedY * intensity,
        normalizedX,
        normalizedY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [intensity, prefersReduced]);

  return position;
}
