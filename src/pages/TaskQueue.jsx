import React, { useEffect } from "react";
import { useTaskStore } from "../store/taskStore";

export default function TaskQueue() {
  const tasks = useTaskStore((s) => s.tasks);
  const removeTask = useTaskStore((s) => s.removeTask);

  useEffect(() => {
    const id = setInterval(() => {
      if (tasks.length > 0) removeTask();
    }, 3000);

    return () => clearInterval(id);
  }, [tasks]);

  return (
    <div className="py-4">

      {/* Heading */}
      <h2 className="text-3xl font-heading tracking-tight font-semibold mb-6 text-darktext">
        Task Queue
      </h2>

      {/* Empty State */}
      {tasks.length === 0 && (
        <p className="text-darktext/50 font-heading text-sm">
          No pending tasks.
        </p>
      )}

      {/* Task Cards */}
      <div className="space-y-4">
        {tasks.map((t, index) => (
          <div
            key={index}
            className="bg-white/70 backdrop-blur-md border border-secondary/40 
                       p-4 rounded-2xl shadow-sm flex justify-between items-start"
          >
            <div>
              <div className="font-heading font-medium text-darktext mb-1">
                {t.pickup} → {t.drop}
              </div>

              <div className="text-sm text-darktext/50">
                Priority: {t.priority}
              </div>
            </div>

            <span className="text-xs text-darktext/40 font-heading">
              {new Date(t.createdAt).toLocaleTimeString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
