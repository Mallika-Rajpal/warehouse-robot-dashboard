import React from "react";
import TaskForm from "../components/TaskForm";
import { useTaskStore } from "../store/taskStore";

export default function TaskAllocation() {
  const addTask = useTaskStore((s) => s.addTask);

  return (
    <div className="py-4 max-w-lg">

      {/* Heading */}
      <h2 className="text-3xl font-heading tracking-tight font-semibold mb-6 text-darktext">
        Create Task
      </h2>

      {/* Task Form */}
      <TaskForm onSubmit={addTask} />
    </div>
  );
}

