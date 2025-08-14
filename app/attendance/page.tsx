import data from "@/lib/mockData.json";

export default function Page(){
  const total = (data.stats.totalStudents as number);
  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="card p-5"><div className="text-sm text-slate-500">Average Daily Presence</div><div className="text-3xl font-semibold">
          {Math.round((data.attendance as any).reduce((a:any,b:any)=>a+b.present,0)/(data.attendance as any).length)}
        </div></div>
        <div className="card p-5"><div className="text-sm text-slate-500">Average Absences</div><div className="text-3xl font-semibold">
          {Math.round((data.attendance as any).reduce((a:any,b:any)=>a+b.absent,0)/(data.attendance as any).length)}
        </div></div>
        <div className="card p-5"><div className="text-sm text-slate-500">Average Late</div><div className="text-3xl font-semibold">
          {Math.round((data.attendance as any).reduce((a:any,b:any)=>a+b.late,0)/(data.attendance as any).length)}
        </div></div>
      </div>

      <div className="card p-5 overflow-x-auto">
        <div className="font-semibold mb-3">Attendance (last 5 days)</div>
        <table className="min-w-[640px] w-full text-sm">
          <thead>
            <tr className="text-left text-slate-500">
              <th className="py-2">Date</th>
              <th className="py-2">Present</th>
              <th className="py-2">Absent</th>
              <th className="py-2">Late</th>
              <th className="py-2">% Present</th>
            </tr>
          </thead>
          <tbody>
            {(data.attendance as any).map((d:any)=> (
              <tr key={d.date} className="border-t">
                <td className="py-2">{d.date}</td>
                <td className="py-2">{d.present}</td>
                <td className="py-2">{d.absent}</td>
                <td className="py-2">{d.late}</td>
                <td className="py-2">{Math.round((d.present/total)*100)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
