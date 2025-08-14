"use client";
import { ResponsiveContainer, BarChart, Bar, XAxis, PieChart, Pie, Cell, Tooltip } from "recharts";

export function EnrollmentChart({data}:{data:{name:string,value:number}[]}){
  return (
    <div className="h-56">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <Tooltip />
          <Bar dataKey="value" radius={[8,8,0,0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function PerformancePie({data}:{data:{name:string,value:number}[]}){
  const COLORS = ["#22c55e","#f59e0b","#ef4444"];
  return (
    <div className="h-56">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" outerRadius={86} label>
            {data.map((_,idx)=>(<Cell key={idx} fill={COLORS[idx % COLORS.length]} />))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
