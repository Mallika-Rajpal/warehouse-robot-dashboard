Warehouse Robot Dashboard

A modern, aesthetic, real-time monitoring dashboard for warehouse robots — built using React, Vite, Zustand, TailwindCSS, and Recharts.
It simulates robot movement, task allocation, analytics, and visualizes robots on an interactive SVG-based warehouse map.

🔗 Live Demo:
👉 https://warehouse-robot-dashboard-m7b5wcetz.vercel.app

✨ Features
🧭 Authentication

Login & Signup (mock)

Zustand-based user state persistence

📊 Dashboard Overview

Total bots, idle bots, bots in error

Pending tasks

Aesthetic stat cards using glassmorphism UI

🤖 Bot Status Monitoring

Live bot updates

Battery levels, speed, current task

Pastel aesthetic bot cards

📝 Task Allocation & Queue

Create new tasks (pickup, drop, priority, notes)

Automatic queue processing

Aesthetic task cards with live timestamps

📈 Analytics & Charts

Bot status distribution (Pie)

Battery distribution (Bar)

Fully responsive Recharts visualizations

🗺️ Warehouse Map (SVG Powered)

Upload any SVG warehouse floor layout

Bots move in real-time within map boundaries

Safe, crash-proof SVG rendering

Pastel bot markers with live animation

🛠️ Tech Stack
Frontend

React (Vite)

React Router

Zustand (global state)

TailwindCSS (styling)

Recharts (charts)

SVG rendering

Tools

npm

Git & GitHub

Vercel Deployment

📁 Project Structure
src/
 ├── components/
 │    ├── BotCard.jsx
 │    ├── CardStat.jsx
 │    ├── ChartCard.jsx
 │    ├── TaskForm.jsx
 │    └── Navbar.jsx
 │
 ├── pages/
 │    ├── Login.jsx
 │    ├── Signup.jsx
 │    ├── Dashboard.jsx
 │    ├── BotStatus.jsx
 │    ├── TaskAllocation.jsx
 │    ├── TaskQueue.jsx
 │    ├── Analytics.jsx
 │    └── MapPage.jsx
 │
 ├── store/
 │    ├── authStore.js
 │    ├── botStore.js
 │    └── taskStore.js
 │
 ├── utils/
 │    ├── mockBotApi.js
 │    └── mockTaskApi.js
 │
 ├── index.css
 ├── App.jsx
 └── main.jsx

🚀 Getting Started
1️⃣ Clone the repository
git clone https://github.com/YOUR_USERNAME/warehouse-robot-dashboard.git
cd warehouse-robot-dashboard

2️⃣ Install dependencies
npm install

3️⃣ Run the development server
npm run dev

4️⃣ Open in browser
http://localhost:5173/

📦 Build for Production
npm run build

🌐 Deployment

This project is deployed on Vercel.

To redeploy manually:

vercel --prod

🔮 Future Enhancements

WebSocket-based real backend

Role-based authentication

Robot path visualization

Zoomable and pannable SVG map

Warehouse heatmaps

Database integration

❤️ Credits

Developed by Mallika.
