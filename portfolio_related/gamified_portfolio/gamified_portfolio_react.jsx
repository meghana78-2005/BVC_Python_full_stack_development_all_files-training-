import React, { useState } from "react";
import { motion } from "framer-motion";

export default function PortfolioGame() {
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);

  const gainXP = () => {
    const newXP = xp + 20;
    setXp(newXP);
    if (newXP >= 100) {
      setLevel(level + 1);
      setXp(0);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-4">🎮 Meghana's Game Portfolio</h1>

      {/* XP Bar */}
      <div className="mb-6">
        <p>Level: {level}</p>
        <div className="w-full bg-gray-700 rounded-full h-4">
          <div
            className="bg-green-400 h-4 rounded-full"
            style={{ width: `${xp}%` }}
          />
        </div>
        <p>{xp}/100 XP</p>
      </div>

      {/* Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          "About Me",
          "Skills",
          "Projects",
          "Achievements",
          "Contact",
        ].map((section) => (
          <motion.div
            key={section}
            whileHover={{ scale: 1.05 }}
            onClick={gainXP}
            className="p-6 bg-gray-800 rounded-2xl shadow-lg cursor-pointer"
          >
            <h2 className="text-xl font-semibold">{section}</h2>
            <p className="text-sm mt-2">
              Click to explore and gain XP 🚀
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
