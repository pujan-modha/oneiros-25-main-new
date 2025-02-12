"use client";

import type React from "react";
import { useEffect, useRef } from "react";

import "./FireFlies.css";

function randomPos(height: number, width: number) {
  return {
    top: (Math.floor(Math.random() * (height + 1)) + 0).toString() + "px",
    left: (Math.floor(Math.random() * (width + 1)) + 0).toString() + "px",
  };
}

function randomNum(min: number, max: number) {
  return (Math.floor(Math.random() * (max - min + 1)) + min).toString();
}

let parentBoundingBox: DOMRect;
const moveIntervals: NodeJS.Timeout[] = [];

function animateParticle(particle: HTMLElement) {
  const newPos = randomPos(parentBoundingBox.height, parentBoundingBox.width);
  particle.style.top = newPos.top;
  particle.style.left = newPos.left;
  if (Math.random() > 0.5) {
    particle.style.opacity = "0";
    setTimeout(() => (particle.style.opacity = "0.7"), 1000);
  }
}

function generateParticles(count: number, fliesSize: number[], color: string, parent: HTMLElement) {
  for (let index = 0; index < count; index++) {
    const particle = document.createElement("div");
    particle.classList.add("fire-fly-particle");
    const pos = randomPos(parentBoundingBox.height, parentBoundingBox.width);
    const size = randomNum(fliesSize[0], fliesSize[1]);
    const speed = randomNum(8, 16);
    particle.style.top = pos.top;
    particle.style.left = pos.left;
    particle.style.setProperty("--particle-size", size + "px");
    particle.style.setProperty("--particle-speed", speed + "s");
    particle.style.setProperty("--particle-color", color);
    setTimeout(() => (particle.style.opacity = "0.7"), Number.parseInt(speed) * 100);
    parent.appendChild(particle);

    moveIntervals.push(setInterval(() => animateParticle(particle), 3000 + Number.parseInt(speed) * 100));
  }
}

interface FireFliesWrapperProps {
  fliesCount?: number;
  fliesSize?: number[];
  color?: string;
  padding?: boolean;
  zIndex?: number;
  children: React.ReactElement | React.ReactElement[];
}

export default function FireFliesWrapper({ fliesCount = 10, fliesSize = [2, 5], color = "255, 255, 255", padding = true, zIndex = -1, children }: FireFliesWrapperProps) {
  const parentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (parentRef.current) {
      parentBoundingBox = parentRef.current.getBoundingClientRect();
      generateParticles(fliesCount, fliesSize, color, parentRef.current);
    }
    return () => {
      moveIntervals.forEach(clearInterval);
    };
  }, [fliesCount]);

  return (
    <div className="relative h-full w-full">
      <div ref={parentRef} className="fire-flies-parent" style={{ zIndex: zIndex, height: padding ? "calc(150% + 20px)" : "100%", width: padding ? "calc(150% + 40px)" : "100%" }}></div>
      {children}
    </div>
  );
}
