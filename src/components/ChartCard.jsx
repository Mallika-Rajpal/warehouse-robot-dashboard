import React from "react";

export default function ChartCard({ title, children, titleClass = "" }) {
  return (
    <div
      className="bg-white/70 backdrop-blur-xl border border-secondary/40 
                 rounded-3xl p-6 shadow-md transition-all"
    >
      {/* Title */}
      <div className={`font-heading tracking-tight text-darktext text-lg mb-4 ${titleClass}`}>
        {title}
      </div>

      {/* Chart Content */}
      {children}
    </div>
  );
}
