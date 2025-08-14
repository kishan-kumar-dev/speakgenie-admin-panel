# SpeakGenie — School Admin Panel (Assignment)

A complete, beginner‑friendly **React/Next.js** implementation of the School Admin Panel based on the provided PDF.  
It is fully responsive (desktop/tablet/mobile), includes mock APIs (JSON), and is ready to run locally.

---

## 📦 Features

- **Screens**: Dashboard, Leaderboard, Students, **Classes**, **Attendance**, Analytics/Reports, Settings
- **Responsive UI** with TailwindCSS and accessible components
- **Charts** (bar + pie) mirroring the PDF visuals (via Recharts)
- **Mock data** in `lib/mockData.json` to simulate APIs
- **Clean component structure** (cards, charts, list items, layout shell)
- **TypeScript** for safety and clarity
- **Simple tests**: build + data smoke test
- **Zero configuration** beyond standard `npm install`
- **MIT License**

---

## 🗂 Folder Structure

```
speakgenie-admin/
├─ app/                      # Next.js (App Router) pages
│  ├─ layout.tsx             # Shell: Sidebar + Topbar
│  ├─ page.tsx               # Dashboard
│  ├─ leaderboard/page.tsx   # Leaderboard
│  ├─ students/page.tsx      # Students (search/filter)
│  ├─ classes/page.tsx       # Classes (cards)
│  ├─ attendance/page.tsx    # Attendance (summary + table)
│  ├─ analytics/page.tsx     # Analytics & Reports
│  └─ settings/page.tsx      # Profile/System/Notifications/Data
├─ components/               # Reusable UI components
│  ├─ Sidebar.tsx
│  ├─ Topbar.tsx
│  ├─ StatCard.tsx
│  ├─ ChartCard.tsx
│  ├─ LeaderboardCard.tsx
│  └─ StudentCard.tsx
├─ lib/
│  ├─ mockData.json          # All demo data (students, classes, attendance, charts)
│  └─ useStore.ts            # Example Zustand store (optional)
├─ scripts/
│  └─ smoke.js               # Minimal build/data test
├─ app/globals.css           # Tailwind base styles
├─ tailwind.config.ts        # Tailwind config
├─ package.json              # Dependencies + scripts
├─ tsconfig.json             # TypeScript config
├─ next.config.js
├─ LICENSE                   # MIT
└─ README.md                 # This file
```

---

## 🛠 Tech Stack

- **Next.js 14** (App Router, React 18)
- **TailwindCSS** for styling
- **Lucide** icons
- **Recharts** for data visualizations
- **TypeScript**, **Zustand** (tiny store)
- Ready to add **NextAuth**, **RadixUI**, or **shadcn/ui** if desired

---

## 🚀 Quick Start (Step‑by‑Step)

1. **Extract** the ZIP to any folder on your computer.
2. **Open a terminal** in that folder.
3. Run:
   ```bash
   npm install
   npm run dev
   ```
4. Open your browser to **http://localhost:3000**.

That’s it. No extra configuration required.

---

## 🧪 Testing Instructions

This project includes a very simple test that ensures the app **builds** and required data/files are present.

Run:

```bash
npm test
```

What it does:

- Builds the project (`next build`).
- Runs a **smoke test** (`scripts/smoke.js`) that validates presence of key files and JSON data.

---

## 📱 Responsive Design

- **Mobile-first** layout; cards stack on small screens
- **Breakpoints**: Tailwind defaults (sm, md, lg, xl)
- Sidebar collapses on small screens; content adapts to single column
- Charts are fluid via `ResponsiveContainer`

---

## 🔧 Usage & Customization

- Replace mock data in `lib/mockData.json` with your API calls.
- Example: swap `import data from "@/lib/mockData.json";` with `const data = await fetch("/api/...").then(r=>r.json())`.
- To integrate **Apollo/GraphQL** or **NextAuth**, install packages and add providers in `app/layout.tsx`.

---

## 📄 Assignment Coverage

- Converts PDF design into a working frontend.
- Implements the core screens: **Dashboard, Students, Classes, Attendance, Reports (Analytics), Settings, Leaderboard**.
- Uses React (Next.js), Tailwind, and mock JSON data.
- Clear folder structure, instructions, and tests.
- Ready within the specified timeframe.

---

## ❓ Troubleshooting

- If port 3000 is busy: `npm run dev -- -p 3001` then visit `http://localhost:3001`.
- If you see type errors, ensure Node 18+ and npm 9+ are installed.

---

## 📜 License

This project is licensed under the **MIT License** (see `LICENSE`).

---

## 👤 Author & Contact

**Name**: Kishan Kumar

> Replace with your actual details before submission.

---

## ✅ Compatibility

- Runs on macOS/Windows/Linux with **Node.js 18+**.
- No external services required.
