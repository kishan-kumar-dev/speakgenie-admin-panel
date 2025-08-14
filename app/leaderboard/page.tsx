"use client";

import data from "@/lib/mockData.json";
import LeaderboardCard from "@/components/LeaderboardCard";

export default function Page() {
  return (
    <div className="space-y-6">
      <div className="card p-6">
        <div className="text-lg font-semibold mb-2">🥇 Champions Podium</div>
        <div className="grid sm:grid-cols-3 gap-4">
          {(data.leaderboard as any).slice(0, 3).map((s: any, idx: number) => (
            <div
              key={s.id}
              className={
                "card p-5 text-center " +
                (idx === 0 ? "ring-2 ring-yellow-300" : "")
              }
            >
              <div className="text-sm text-slate-500 mb-1">#{idx + 1}</div>
              <div className="text-lg font-semibold">{s.name}</div>
              <div className="text-sm text-slate-500">Class {s.class}</div>
              <div className="mt-2 text-2xl font-semibold">{s.points} pts</div>
            </div>
          ))}
        </div>
      </div>

      <div className="card p-6">
        <div className="text-lg font-semibold mb-4">Complete Rankings</div>
        <div className="space-y-3">
          {(data.leaderboard as any).map((s: any, idx: number) => (
            <LeaderboardCard
              key={s.id}
              rank={idx + 1}
              name={s.name}
              klass={s.class}
              points={s.points}
              accuracy={s.accuracy}
            />
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        <div className="card p-4 text-center">
          <div className="text-sm text-slate-500">Current Champion</div>
          <div className="text-xl font-semibold">
            {(data.leaderboard as any)[0].name}
          </div>
          <div className="text-slate-500">
            {(data.leaderboard as any)[0].points} points
          </div>
        </div>
        <div className="card p-4 text-center">
          <div className="text-sm text-slate-500">Longest Streak</div>
          <div className="text-xl font-semibold">15 days</div>
        </div>
        <div className="card p-4 text-center">
          <div className="text-sm text-slate-500">Most Active</div>
          <div className="text-xl font-semibold">68 lessons</div>
        </div>
        <div className="card p-4 text-center">
          <div className="text-sm text-slate-500">Highest Accuracy</div>
          <div className="text-xl font-semibold">96%</div>
        </div>
      </div>
    </div>
  );
}
