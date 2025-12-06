import React, { useMemo } from "react";
import { useBotStore } from "../store/botStore";
import ChartCard from "../components/ChartCard";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

// Pastel aesthetic chart palette
const COLORS = ["#C5ADC5", "#B2B5E0", "#9F8BC0", "#D1D4F0"];

export default function Analytics() {
  const bots = useBotStore((s) => s.bots);

  const statusData = useMemo(() => {
    const map = {};
    bots.forEach((b) => {
      map[b.status] = (map[b.status] || 0) + 1;
    });
    return Object.keys(map).map((k) => ({
      status: k,
      value: map[k],
    }));
  }, [bots]);

  const batteryData = bots.map((b) => ({
    name: b.name,
    battery: b.battery,
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Status Chart */}
      <ChartCard title="Bot Status Distribution" titleClass="font-heading tracking-tight">
        <ResponsiveContainer width="100%" height={260}>
          <PieChart>
            <Pie
              data={statusData}
              dataKey="value"
              nameKey="status"
              outerRadius={90}
              stroke="none"
            >
              {statusData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* Battery Chart */}
      <ChartCard title="Battery Levels" titleClass="font-heading tracking-tight">
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={batteryData}>
            <XAxis dataKey="name" stroke="#1F1F29" />
            <YAxis stroke="#1F1F29" />
            <Tooltip />
            <Bar dataKey="battery" fill="#C5ADC5" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
}
