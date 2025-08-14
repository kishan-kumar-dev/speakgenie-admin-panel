import { ReactNode } from "react";

export default function StatCard({title, value, sub, icon}: {title:string; value: ReactNode; sub?: string; icon?: ReactNode}){
  return (
    <div className="card p-5">
      <div className="flex items-center justify-between">
        <div className="text-sm text-slate-500">{title}</div>
        <div>{icon}</div>
      </div>
      <div className="mt-2 text-3xl font-semibold">{value}</div>
      {sub && <div className="mt-1 text-xs text-slate-500">{sub}</div>}
    </div>
  )
}
