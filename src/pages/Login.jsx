import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

export default function Login() {
  const login = useAuthStore((s) => s.login);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      alert("Enter valid email");
      return;
    }

    login(email);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-lightbg text-darktext flex justify-center items-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white/70 shadow-xl border border-secondary/40 backdrop-blur-md rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-3xl font-heading font-semibold mb-6 text-darktext">Login</h2>

        <input
          className="w-full p-3 border border-secondary/50 rounded-lg mb-6
          focus:ring-2 focus:ring-primary/50 outline-none transition placeholder:text-darktext/60"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-secondary hover:bg-primary text-darktext font-semibold py-3 rounded-lg transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
