# Warehouse Robot Dashboard

A real-time warehouse robot monitoring dashboard built using React, Vite, Zustand, TailwindCSS, and Recharts.  
The application simulates robot activity, task management, analytics, and visualizes live robot movement on an uploaded warehouse SVG layout.

**Live Demo:**  
https://warehouse-robot-dashboard-m7b5wcetz.vercel.app

---

## 1. Overview

This dashboard provides a complete simulation of warehouse operations.  
It includes robot monitoring, task allocation, analytics, and an interactive map view supporting SVG uploads.  
The UI is designed with a pastel, minimal aesthetic for a clean and modern experience.

---

## 2. Features

### 2.1 Authentication
- Login and Signup (mock flow)
- Zustand-based persistent user state

### 2.2 Dashboard Metrics
- Total number of robots
- Idle robots
- Robots in error state
- Pending tasks count

### 2.3 Robot Monitoring
- Live bot status updates
- Battery level bars
- Current task, speed, and timestamp
- Smooth, responsive card UI

### 2.4 Task Allocation and Queue
- Create new tasks with pickup, drop, priority, and comments
- Auto-processing task queue simulation
- Timestamp displayed for all tasks

### 2.5 Analytics
- Bot status distribution (Pie Chart)
- Battery levels chart (Bar Chart)
- Fully responsive Recharts integration

### 2.6 Warehouse Map (SVG-Based Visualization)
- Upload any SVG warehouse layout
- Real-time robot movement inside mapped boundaries
- Smooth transitions and safe coordinate handling
- Supports dynamically updating robot positions

---

## 3. Tech Stack

### Frontend Technologies
- React (Vite)
- React Router
- Zustand (global state management)
- TailwindCSS (UI styling)
- Recharts (data visualization)

### Tools
- npm
- Git & GitHub
- Vercel (deployment)

---

## 4. Project Structure

The directory structure of the project is shown below.

```text
src/
├── components/
│   ├── BotCard.jsx
│   ├── CardStat.jsx
│   ├── ChartCard.jsx
│   ├── TaskForm.jsx
│   └── Navbar.jsx
│
├── pages/
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── Dashboard.jsx
│   ├── BotStatus.jsx
│   ├── TaskAllocation.jsx
│   ├── TaskQueue.jsx
│   ├── Analytics.jsx
│   └── MapPage.jsx
│
├── store/
│   ├── authStore.js
│   ├── botStore.js
│   └── taskStore.js
│
├── utils/
│   ├── mockBotApi.js
│   └── mockTaskApi.js
│
├── App.jsx
├── main.jsx
└── index.css
```

## 5. Getting Started

### 5.1 Clone the Repository
```bash
git clone https://github.com/Mallika-Rajpal/warehouse-robot-dashboard
cd warehouse-robot-dashboard
```

### 5.2 Install Dependencies
```bash
npm install
```

### 5.3 Run the Development Server
```bash
npm run dev
```

### 5.4 Open the Application

Visit:
```bash
http://localhost:5173/
```

## 6. Build for Production
```bash
npm run build
```
## 7. Deployment

This project is deployed using Vercel.

To redeploy manually:
```bash
vercel --prod
```

## 8. Future Enhancements

- WebSocket backend for real-time updates  
- Zoom and pan support on the SVG map  
- Heatmap analytics for warehouse activity  
- Role-based authentication  
- Database integration (MongoDB / Firebase)  
- Robot path prediction and collision avoidance  

---

## 9. Author

Developed by **Mallika** 




