export function getMockBots() {
    return Array.from({ length: 10 }).map((_, i) => {
      const statuses = ["idle", "busy", "charging", "error"];
      const status = statuses[Math.floor(Math.random() * statuses.length)];
  
      return {
        id: i + 1,
        name: `Bot-${i + 1}`,
        battery: Math.max(5, Math.floor(Math.random() * 100)),
        status,
        currentTask:
          status === "busy" ? `Task-${Math.ceil(Math.random() * 20)}` : null,
        speed: (Math.random() * 2 + 0.2).toFixed(2),
        lastUpdated: new Date().toLocaleTimeString(),
  
        // for map page
        x: Math.floor(Math.random() * 800),
        y: Math.floor(Math.random() * 400),
      };
    });
  }
  