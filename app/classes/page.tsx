import data from "@/lib/mockData.json";

export default function Page(){
  return (
    <div className="space-y-4">
      <div className="text-lg font-semibold">Classes</div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {(data.classes as any).map((c:any)=> (
          <div key={c.id} className="card p-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">{c.name}</div>
                <div className="text-sm text-slate-500">Teacher: {c.teacher}</div>
              </div>
              <div className="badge">{c.students} students</div>
            </div>
            <div className="mt-3 text-sm text-slate-600">
              Average Accuracy: 85% • Avg Lessons: 40
            </div>
            <div className="mt-3">
              <button className="px-3 py-1.5 rounded-lg border bg-white text-sm">View Roster</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
