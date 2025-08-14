import StatCard from "@/components/StatCard";
import { EnrollmentChart, PerformancePie } from "@/components/ChartCard";
import data from "@/lib/mockData.json";

export default function Page(){
  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard title="Total Students" value={data.stats.totalStudents} sub="+12% from last month" />
        <StatCard title="Total Classes" value={data.stats.totalClasses} sub="+8% from last month" />
        <StatCard title="Avg. Performance" value={`${data.stats.avgPerformance}%`} sub="+5% from last month" />
        <StatCard title="Top Performer" value={`${data.stats.topPerformer.points} pts`} sub={data.stats.topPerformer.name} />
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <div className="card p-5">
          <div className="font-semibold mb-2">Class-wise Student Enrollment</div>
          <EnrollmentChart data={data.classEnrollment as any} />
        </div>
        <div className="card p-5">
          <div className="font-semibold mb-2">Performance Distribution</div>
          <PerformancePie data={data.performancePie as any} />
        </div>
      </div>

      <div className="card p-5">
        <div className="font-semibold mb-4">🏆 School Leaderboard - Top Champions</div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {(data.leaderboard as any).slice(0,6).map((s:any, idx:number)=> (
            <div key={s.id} className="card p-4">
              <div className="text-xs text-slate-500 mb-2">Rank #{idx+1}</div>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-slate-200 grid place-items-center">{s.name[0]}</div>
                <div>
                  <div className="font-medium">{s.name}</div>
                  <div className="text-xs text-slate-500">Class {s.class} • {s.accuracy}% accuracy</div>
                </div>
                <div className="ml-auto font-semibold">{s.points} pts</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card p-5">
        <div className="font-semibold mb-3">All Students</div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
          {(data.students as any).map((s:any)=> (
            <div key={s.id} className="card p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-slate-200 grid place-items-center">{s.name[0]}</div>
                <div>
                  <div className="font-medium">{s.name}</div>
                  <div className="text-xs text-slate-500">Class {s.class}</div>
                </div>
              </div>
              <div className="text-sm">Acc {s.accuracy}% • Lessons {s.lessons}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
