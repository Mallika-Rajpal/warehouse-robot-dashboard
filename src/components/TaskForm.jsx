import React, { useState } from "react";

export default function TaskForm({ onSubmit }) {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [priority, setPriority] = useState("medium");
  const [comments, setComments] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!pickup || !drop) return alert("Pickup and Drop are required!");

    onSubmit({
      pickup,
      drop,
      priority,
      comments,
      createdAt: Date.now(),
    });

    setPickup("");
    setDrop("");
    setPriority("medium");
    setComments("");
  };

  return (
    <form
      className="bg-white/60 backdrop-blur-xl border border-secondary/40 
                 rounded-3xl p-8 shadow-md flex flex-col gap-5 transition-all"
      onSubmit={handleSubmit}
    >
      {/* Pickup */}
      <input
        placeholder="Pickup Location"
        className="p-3 border border-secondary/40 rounded-xl 
                   bg-white/40 backdrop-blur-sm
                   focus:ring-2 focus:ring-primary/40 focus:border-primary
                   outline-none transition-all placeholder:text-darktext/50"
        value={pickup}
        onChange={(e) => setPickup(e.target.value)}
      />

      {/* Drop */}
      <input
        placeholder="Drop Location"
        className="p-3 border border-secondary/40 rounded-xl
                   bg-white/40 backdrop-blur-sm
                   focus:ring-2 focus:ring-primary/40 focus:border-primary
                   outline-none transition-all placeholder:text-darktext/50"
        value={drop}
        onChange={(e) => setDrop(e.target.value)}
      />

      {/* Priority Select */}
      <select
        className="p-3 border border-secondary/40 rounded-xl bg-white/40 backdrop-blur-sm
                   text-darktext focus:ring-2 focus:ring-primary/40 outline-none transition-all"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="low">Low Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="high">High Priority</option>
      </select>

      {/* Comments */}
      <textarea
        placeholder="Comments (optional)"
        className="p-3 border border-secondary/40 rounded-xl
                   bg-white/40 backdrop-blur-sm
                   focus:ring-2 focus:ring-primary/40 focus:border-primary
                   outline-none transition-all placeholder:text-darktext/50"
        value={comments}
        onChange={(e) => setComments(e.target.value)}
      />

      {/* Button */}
      <button
        className="w-full bg-gradient-to-r from-primary to-secondary 
                   hover:opacity-90 text-darktext font-heading font-medium
                   py-3 rounded-xl transition-all shadow-md"
      >
        Create Task
      </button>
    </form>
  );
}

