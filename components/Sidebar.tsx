"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users2, BarChart3, Settings, Trophy, CalendarDays, School } from "lucide-react";
import clsx from "classnames";

const links = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/leaderboard", label: "Leaderboard", icon: Trophy },
  { href: "/students", label: "Students", icon: Users2 },
  { href: "/classes", label: "Classes", icon: School },
  { href: "/attendance", label: "Attendance", icon: CalendarDays },
  { href: "/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/settings", label: "Settings", icon: Settings }
];

export default function Sidebar(){
  const pathname = usePathname();
  return (
    <aside className="hidden md:flex md:flex-col md:w-64 border-r bg-white">
      <div className="h-16 flex items-center gap-2 px-6 border-b">
        <div className="h-9 w-9 rounded-xl bg-brand-500 text-white grid place-items-center font-bold">S</div>
        <div className="font-semibold">SpeakGenie<br/><span className="text-xs text-slate-500">Admin Panel</span></div>
      </div>
      <nav className="p-4 space-y-2">
        {links.map(({href,label,icon:Icon})=> (
          <Link key={href} href={href} className={clsx(
            "flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-slate-50",
            pathname===href ? "bg-slate-100 text-brand-500 font-medium" : "text-slate-700"
          )}>
            <Icon className="h-5 w-5" />
            {label}
          </Link>
        ))}
      </nav>
      <div className="mt-auto p-4">
        <div className="card p-3 flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-brand-500 text-white grid place-items-center">S</div>
          <div className="text-sm"><div className="font-medium">School Admin</div>
            <div className="text-slate-500">Greenwood Elementary</div></div>
        </div>
      </div>
    </aside>
  );
}
