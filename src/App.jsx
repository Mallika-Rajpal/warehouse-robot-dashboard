import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";

import { useAuthStore } from "./store/authStore";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import BotStatus from "./pages/BotStatus";
import TaskAllocation from "./pages/TaskAllocation";
import TaskQueue from "./pages/TaskQueue";
import Analytics from "./pages/Analytics";
import MapPage from "./pages/MapPage";

export default function App() {
  const user = useAuthStore((s) => s.user);

  return (
    <div className="min-h-screen bg-lightbg text-darktext">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-8">
        <Routes>
          {/* Public */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected */}
          <Route
            path="/"
            element={user ? <Dashboard /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/bots"
            element={user ? <BotStatus /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/allocate"
            element={user ? <TaskAllocation /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/queue"
            element={user ? <TaskQueue /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/analytics"
            element={user ? <Analytics /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/map"
            element={user ? <MapPage /> : <Navigate to="/login" replace />}
          />

          {/* Fallback */}
          <Route
            path="*"
            element={<Navigate to={user ? "/" : "/login"} replace />}
          />
        </Routes>
      </div>
    </div>
  );
}
