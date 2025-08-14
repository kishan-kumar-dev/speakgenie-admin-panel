"use client";
import data from "@/lib/mockData.json";
import { useState, useMemo } from "react";
import StudentCard from "@/components/StudentCard";

export default function Page(){
  const [q, setQ] = useState("");
  const students = useMemo(()=> (data.students as any).filter(s => s.name.toLowerCase().includes(q.toLowerCase())), [q]);
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search students..." className="w-full md:w-80 px-3 py-2 rounded-xl border bg-white" />
        <select className="px-3 py-2 rounded-xl border bg-white">
          <option>All Classes</option>
          <option>Class 8</option>
          <option>Class 7</option>
          <option>Class 6</option>
          <option>Class 5</option>
        </select>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
        {students.map((s:any)=> <StudentCard key={s.id} {...s} klass={s.class} />)}
      </div>
    </div>
  );
}
