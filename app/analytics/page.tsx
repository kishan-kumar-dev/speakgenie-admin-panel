import data from "@/lib/mockData.json";
import { EnrollmentChart, PerformancePie } from "@/components/ChartCard";

export default function Page() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="card p-5">
          <div className="text-sm text-slate-500">Total Learning Hours</div>
          <div className="text-3xl font-semibold">2,847</div>
          <div className="text-xs text-slate-500 mt-1">
            +12% from last month
          </div>
        </div>
        <div className="card p-5">
          <div className="text-sm text-slate-500">Lessons Completed</div>
          <div className="text-3xl font-semibold">1,892</div>
          <div className="text-xs text-slate-500 mt-1">
            +18% from last month
          </div>
        </div>
        <div className="card p-5">
          <div className="text-sm text-slate-500">Average Session Time</div>
          <div className="text-3xl font-semibold">24 min</div>
          <div className="text-xs text-slate-500 mt-1">+8% from last month</div>
        </div>
        <div className="card p-5">
          <div className="text-sm text-slate-500">Active Students</div>
          <div className="text-3xl font-semibold">1,156</div>
          <div className="text-xs text-slate-500 mt-1">+5% from last month</div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="card p-5">
          <div className="font-semibold mb-2">
            Student Performance Distribution
          </div>
          <PerformancePie data={data.performancePie as any} />
        </div>

        <div className="card p-5">
          <div className="font-semibold mb-2">
            Average Performance by Skill Area
          </div>
          <EnrollmentChart data={data.skillAverages as any} />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-3 text-sm">
            <div className="badge">Vocabulary +5%</div>
            <div className="badge">Grammar +8%</div>
            <div className="badge">Pronunciation +12%</div>
            <div className="badge">Listening +3%</div>
            <div className="badge">Speaking +15%</div>
          </div>
        </div>
      </div>

      {/* Engagement Trends */}
      <div className="card p-5">
        <div className="font-semibold mb-2">Student Engagement Trends</div>
        <EnrollmentChart
          data={(data.engagementMonthly as any).map((d: any) => ({
            name: d.month,
            value: d.hours,
          }))}
        />
      </div>
    </div>
  );
}
