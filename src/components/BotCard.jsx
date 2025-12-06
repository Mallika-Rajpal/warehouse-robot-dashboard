import React from "react";

export default function BotCard({ bot }) {
  // Pastel battery bar colors
  const batteryColor =
    bot.battery < 20
      ? "bg-red-300"
      : bot.battery < 50
      ? "bg-yellow-300"
      : "bg-green-300";

  return (
    <div
      className="bg-white/70 backdrop-blur-xl border border-secondary/40 
                 rounded-3xl p-6 shadow-md flex flex-col gap-3 transition-all"
    >
      {/* Top Row */}
      <div className="flex justify-between items-center">
        <div className="font-heading font-semibold text-darktext tracking-tight text-lg">
          {bot.name}
        </div>

        <div className="text-xs text-darktext/40 font-heading">
          {bot.lastUpdated}
        </div>
      </div>

      {/* Status */}
      <div className="text-darktext/80 font-heading text-sm">
        <span className="font-semibold">Status:</span> {bot.status}
      </div>

      {/* Task */}
      <div className="text-darktext/80 font-heading text-sm">
        <span className="font-semibold">Task:</span>{" "}
        {bot.currentTask || "—"}
      </div>

      {/* Speed */}
      <div className="text-darktext/80 font-heading text-sm">
        <span className="font-semibold">Speed:</span> {bot.speed} m/s
      </div>

      {/* Battery Section */}
      <div>
        <div className="text-xs text-darktext/60 font-heading mb-1">
          Battery: {bot.battery}%
        </div>
        <div className="w-full bg-secondary/20 h-2 rounded-xl overflow-hidden">
          <div
            className={`${batteryColor} h-2 rounded-xl transition-all`}
            style={{ width: `${bot.battery}%` }}
          />
        </div>
      </div>
    </div>
  );
}

