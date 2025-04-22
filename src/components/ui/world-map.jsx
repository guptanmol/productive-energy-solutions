"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import DottedMap from "dotted-map";

export function WorldMap({ dots = [], lineColor = "#9F0000", theme = "light" }) {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const controls = useAnimation();
  const inView = useInView(containerRef, { once: true, margin: "-100px" });

  const [strokeWidth, setStrokeWidth] = useState(1); // default to desktop

  useEffect(() => {
    const handleResize = () => {
      setStrokeWidth(window.innerWidth < 768 ? 4 : 1);
    };

    handleResize(); // call on mount
    window.addEventListener("resize", handleResize); // watch for resizes
    return () => window.removeEventListener("resize", handleResize); // cleanup
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const map = new DottedMap({ height: 100, grid: "diagonal" });

  const svgMap = map.getSVG({
    radius: 0.22,
    color: theme === "dark" ? "#FFFFFF40" : "#00000040",
    shape: "circle",
    backgroundColor: theme === "dark" ? "black" : "white"
  });

  const projectPoint = (lat, lng) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (start, end) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div
      ref={containerRef}
      className="w-full aspect-[2/1] bg-white dark:bg-black rounded-lg relative overflow-hidden font-sans"
    >
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full object-cover pointer-events-none select-none"
        alt="world map"
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {dots.map((dot, i) => {
          const start = projectPoint(dot.start.lat, dot.start.lng);
          const end = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`curve-${i}`}>
              <motion.path
                d={createCurvedPath(start, end)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth={strokeWidth}
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { pathLength: 0 },
                  visible: { pathLength: 1 }
                }}
                transition={{
                  duration: 1,
                  delay: 0.5 * i,
                  ease: "easeOut"
                }}
              />
            </g>
          );
        })}

        {dots.map((dot, i) => {
          const start = projectPoint(dot.start.lat, dot.start.lng);
          const end = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`points-${i}`}>
              {[start, end].map((point, j) => (
                <g key={`point-${j}`}>
                  <circle cx={point.x} cy={point.y} r="2" fill={lineColor} />
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r="2"
                    fill={lineColor}
                    opacity="0.5"
                  >
                    <animate
                      attributeName="r"
                      from="2"
                      to="8"
                      dur="1.5s"
                      begin="0s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      from="0.5"
                      to="0"
                      dur="1.5s"
                      begin="0s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              ))}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
