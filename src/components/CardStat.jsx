import React from "react";

export default function CardStat({ title, value }) {
  return (
    <div
      className="bg-white/70 backdrop-blur-xl border border-secondary/40 
                 rounded-3xl p-6 shadow-md flex flex-col gap-2 transition-all"
    >
      <div className="text-darktext/60 text-sm font-heading tracking-tight">
        {title}
      </div>

      <div className="text-3xl font-heading tracking-tight font-semibold text-darktext">
        {value}
      </div>
    </div>
  );
}
