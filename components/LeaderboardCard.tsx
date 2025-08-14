import { ArrowRight } from "lucide-react";

export default function LeaderboardCard({rank, name, klass, points, accuracy}: any){
  return (
    <div className="card p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-slate-200 grid place-items-center font-medium">#{rank}</div>
        <div>
          <div className="font-medium">{name}</div>
          <div className="text-xs text-slate-500">Class {klass} • {accuracy}% accuracy</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="font-semibold">{points} pts</div>
        <button className="px-3 py-1 rounded-lg bg-slate-50 border text-sm">View <ArrowRight className="inline h-4 w-4 ml-1"/></button>
      </div>
    </div>
  );
}
