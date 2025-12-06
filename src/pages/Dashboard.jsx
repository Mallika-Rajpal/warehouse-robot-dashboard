import React from "react";
import CardStat from "../components/CardStat";
import { useBotStore } from "../store/botStore";
import { useTaskStore } from "../store/taskStore";

export default function Dashboard() {
  const bots = useBotStore((s) => s.bots);
  const tasks = useTaskStore((s) => s.tasks);

  const idle = bots.filter((b) => b.status === "idle").length;
  const errors = bots.filter((b) => b.status === "error").length;

  return (
    <div className="py-4">
      
      {/* Page Title */}
      <h2 className="text-3xl font-heading tracking-tight font-semibold mb-8 text-darktext">
        Overview
      </h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <CardStat title="Total Bots" value={bots.length} />
        <CardStat title="Idle Bots" value={idle} />
        <CardStat title="Bots in Error" value={errors} />
        <CardStat title="Pending Tasks" value={tasks.length} />
      </div>

    </div>
  );
}
