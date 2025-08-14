export default function Page(){
  return (
    <div className="grid xl:grid-cols-2 gap-6">
      <div className="card p-6 space-y-3">
        <div className="text-lg font-semibold">Profile Settings</div>
        <label className="text-sm">Full Name</label>
        <input className="px-3 py-2 rounded-xl border bg-white" defaultValue="Admin User" />
        <label className="text-sm">Email</label>
        <input className="px-3 py-2 rounded-xl border bg-white" defaultValue="admin@example.com" />
        <label className="text-sm">Phone</label>
        <input className="px-3 py-2 rounded-xl border bg-white" defaultValue="+1-555-0123" />
        <button className="px-4 py-2 rounded-xl bg-brand-500 text-white w-fit">Update Profile</button>
      </div>

      <div className="space-y-6">
        <div className="card p-6 space-y-3">
          <div className="text-lg font-semibold">System Settings</div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="text-sm mb-1">Default Language</div>
              <select className="px-3 py-2 rounded-xl border bg-white w-full">
                <option>English</option><option>Hindi</option>
              </select>
            </div>
            <div>
              <div className="text-sm mb-1">Time Zone</div>
              <select className="px-3 py-2 rounded-xl border bg-white w-full">
                <option>UTC+5:30 (IST)</option><option>UTC-5 (ET)</option>
              </select>
            </div>
          </div>
          <button className="px-4 py-2 rounded-xl bg-brand-500 text-white w-fit">Save Settings</button>
        </div>

        <div className="card p-6 space-y-3">
          <div className="text-lg font-semibold">Notification Preferences</div>
          <label className="flex items-center gap-2"><input type="checkbox" defaultChecked/> Email Notifications</label>
          <label className="flex items-center gap-2"><input type="checkbox" defaultChecked/> Performance Reports</label>
          <label className="flex items-center gap-2"><input type="checkbox"/> New School Alerts</label>
        </div>

        <div className="card p-6 space-y-3">
          <div className="text-lg font-semibold">Data Management</div>
          <div className="flex flex-wrap gap-2">
            <button className="px-3 py-1.5 rounded-lg border bg-white">Export Student Data</button>
            <button className="px-3 py-1.5 rounded-lg border bg-white">Export Analytics</button>
            <button className="px-3 py-1.5 rounded-lg border bg-white">Export School Reports</button>
            <button className="px-3 py-1.5 rounded-lg border bg-white">Create Backup</button>
          </div>
          <div className="text-xs text-slate-500">Last backup: March 15, 2024</div>
        </div>
      </div>
    </div>
  );
}
