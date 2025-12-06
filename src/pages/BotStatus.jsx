import React, { useEffect } from "react";
import { useBotStore } from "../store/botStore";
import { getMockBots } from "../utils/mockBotApi";
import BotCard from "../components/BotCard";

export default function BotStatus() {
  const bots = useBotStore((s) => s.bots);
  const setBots = useBotStore((s) => s.setBots);

  useEffect(() => {
    const load = () => setBots(getMockBots());
    load();
    const id = setInterval(load, 10000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="py-4">
      
      {/* Heading */}
      <h2 className="text-3xl font-heading tracking-tight font-semibold mb-6 text-darktext">
        Bot Status
      </h2>

      {/* Bot Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} />
        ))}
      </div>
    </div>
  );
}
