import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SpeakGenie Admin",
  description: "School Admin Panel"
};

export default function RootLayout({children}:{children: React.ReactNode}){
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen grid md:grid-cols-[16rem_1fr]">
          <Sidebar />
          <div className="flex flex-col">
            <Topbar />
            <main className="container-p space-y-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
