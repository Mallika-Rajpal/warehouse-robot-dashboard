import React from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

export default function Navbar() {
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);

  return (
    <nav className="bg-lightbg/50 backdrop-blur-xl border-b border-secondary/30 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Brand */}
        <Link
          to="/"
          className="text-2xl font-heading tracking-tight font-semibold text-darktext hover:text-primary transition"
        >
          Warehouse Dashboard
        </Link>

        {/* Navigation Links */}
        {user ? (
          <div className="flex items-center gap-6 text-sm font-heading font-medium text-darktext">

            <Link className="hover:text-primary transition-all duration-200" to="/bots">
              Bots
            </Link>

            <Link className="hover:text-primary transition-all duration-200" to="/allocate">
              Allocate
            </Link>

            <Link className="hover:text-primary transition-all duration-200" to="/queue">
              Queue
            </Link>

            <Link className="hover:text-primary transition-all duration-200" to="/analytics">
              Analytics
            </Link>

            <Link className="hover:text-primary transition-all duration-200" to="/map">
              Map
            </Link>

            {/* Logout Button */}
            <button
              onClick={logout}
              className="ml-4 bg-gradient-to-r from-primary to-secondary
                         hover:opacity-90 text-darktext font-heading font-medium
                         px-4 py-1.5 rounded-xl transition shadow-sm border border-secondary/40"
            >
              Logout
            </button>

          </div>
        ) : (
          <div className="flex gap-6 text-sm font-heading font-medium text-darktext">
            <Link className="hover:text-primary transition-all duration-200" to="/login">
              Login
            </Link>
            <Link className="hover:text-primary transition-all duration-200" to="/signup">
              Signup
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}


