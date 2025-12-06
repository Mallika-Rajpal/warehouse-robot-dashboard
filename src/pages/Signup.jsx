import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

export default function Signup() {
  const signup = useAuthStore((s) => s.login);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) return alert("Enter a valid email");
    signup(email);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-lightbg text-darktext flex justify-center items-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white/60 shadow-lg border border-secondary/40 backdrop-blur-xl 
                   rounded-3xl p-10 w-full max-w-md transition-all"
      >
        {/* Heading */}
        <h2 className="text-3xl font-heading tracking-tight font-semibold mb-8 text-darktext">
          Create Account
        </h2>

        {/* Input */}
        <input
          className="w-full p-3 border border-secondary/40 rounded-xl mb-6
                     bg-white/40 backdrop-blur-sm
                     focus:ring-2 focus:ring-primary/50 focus:border-primary
                     placeholder:text-darktext/50 
                     outline-none transition-all"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-primary to-secondary
                     hover:opacity-90 text-darktext font-heading font-medium 
                     py-3 rounded-xl transition shadow-md"
        >
          Signup
        </button>
      </form>
    </div>
  );
}
