import React, { useState, useEffect, useRef } from "react";
import { useBotStore } from "../store/botStore";
import { getMockBots } from "../utils/mockBotApi";

export default function MapPage() {
  const [svg, setSvg] = useState(null);
  const svgContainerRef = useRef(null);
  const mapRef = useRef(null);

  const bots = useBotStore((s) => s.bots);
  const setBots = useBotStore((s) => s.setBots);

  // Load mock bots
  useEffect(() => {
    if (!bots || bots.length === 0) {
      const mock = getMockBots().map((b) => ({
        ...b,
        x: b.x || 100,
        y: b.y || 100,
      }));
      setBots(mock);
    }
  }, []);

  // Smooth movement (only when SVG is loaded)
  useEffect(() => {
    if (!svg || bots.length === 0) return;

    const id = setInterval(() => {
      const container = mapRef.current;
      if (!container) return;

      const width = container.clientWidth;
      const height = container.clientHeight;

      setBots((prev) =>
        prev.map((b) => {
          const safeX = isNaN(b.x) ? 100 : b.x;
          const safeY = isNaN(b.y) ? 100 : b.y;

          const dx = Math.random() * 30 - 15;
          const dy = Math.random() * 20 - 10;

          const newX = Math.min(Math.max(safeX + dx, 10), width - 30);
          const newY = Math.min(Math.max(safeY + dy, 10), height - 30);

          return { ...b, x: newX, y: newY };
        })
      );
    }, 700);

    return () => clearInterval(id);
  }, [svg, bots.length]);


  // SAFEST way to render SVG (avoids React parsing issues)
  useEffect(() => {
    if (svg && svgContainerRef.current) {
      svgContainerRef.current.innerHTML = svg; // Safe DOM insertion
    }
  }, [svg]);


  const handleUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const text = await file.text();
    setSvg(text);
  };


  return (
    <div className="py-4">
      <h2 className="text-3xl font-heading tracking-tight font-semibold mb-6 text-darktext">
        Warehouse Map
      </h2>

      <label className="flex flex-col items-start mb-4">
        <span className="text-darktext/70 text-sm mb-2 font-heading">
          Upload SVG Layout
        </span>
        <input
          type="file"
          accept=".svg"
          onChange={handleUpload}
          className="p-2 border border-secondary/40 rounded-lg bg-white/60 backdrop-blur-sm 
                     focus:ring-2 focus:ring-primary/40 transition text-darktext"
        />
      </label>

      {/* MAP CONTAINER */}
      <div
        ref={mapRef}
        className="relative bg-white/70 backdrop-blur-lg border border-secondary/40 
                   rounded-3xl shadow-md mt-6 overflow-hidden"
        style={{ height: 500 }}
      >
        {/* SAFE SVG RENDERER */}
        <div
          ref={svgContainerRef}
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 1 }}
        />

        {/* Bots */}
        {bots.map((b) => (
          <div
            key={b.id}
            style={{
              position: "absolute",
              left: b.x ?? 50,
              top: b.y ?? 50,
              transition: "0.4s ease",
              zIndex: 2,
            }}
          >
            <svg width="22" height="22">
              <circle
                cx="11"
                cy="11"
                r="9"
                fill={
                  b.status === "error"
                    ? "#E57373"
                    : b.status === "charging"
                    ? "#F7D154"
                    : b.status === "busy"
                    ? "#9FA8DA"
                    : "#81C784"
                }
                stroke="#1F1F29"
                strokeWidth="1"
              />
            </svg>
          </div>
        ))}

        {!svg && (
          <p className="text-darktext/50 flex items-center justify-center h-full font-heading">
            Upload an SVG layout to view map.
          </p>
        )}
      </div>
    </div>
  );
}
  

