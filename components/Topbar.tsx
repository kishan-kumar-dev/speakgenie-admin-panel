"use client";
import { Bell } from "lucide-react";

export default function Topbar(){
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-4 md:px-6">
      <div className="font-semibold">Greenwood Elementary School</div>
      <div className="flex items-center gap-3">
        <div className="badge">CBSE Board • Updated just now</div>
        <button className="relative p-2 rounded-lg hover:bg-slate-100">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </button>
      </div>
    </header>
  );
}
