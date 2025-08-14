export default function StudentCard({name, klass, accuracy, lessons}: any){
  return (
    <div className="card p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-slate-200 grid place-items-center">{name[0]}</div>
        <div>
          <div className="font-medium">{name}</div>
          <div className="text-xs text-slate-500">Class {klass}</div>
        </div>
      </div>
      <div className="text-sm text-slate-600">Accuracy <span className="font-medium">{accuracy}%</span> • Lessons <span className="font-medium">{lessons}</span></div>
    </div>
  )
}
