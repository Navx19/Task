import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode; //react.node is used karon jekono children element access kore
}) {
  return (
    <div className="drawer lg:drawer-open"> //sidebar er jonno drawer use kora hoyeche
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* Main Content */}
      <div className="drawer-content bg-base-200 min-h-screen">
        {/* Mobile Navbar */}
        <div className="navbar bg-base-100 border-b border-base-300 lg:hidden"> 
          <div className="flex-none">
            <label
              htmlFor="dashboard-drawer"
              className="btn btn-square btn-ghost"
            >
              ☰
            </label>
          </div>

          <div className="flex-1">
            <span className="text-xl font-bold">Dashboard</span>
          </div>
        </div>

        <div className="p-6">{children}</div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

        <aside className="w-72 min-h-full bg-base-100 border-r border-base-300 p-6">
          <h1 className="text-3xl font-bold mb-10">Public website</h1>

          <ul className="menu space-y-2">
            <li>
              <Link href="/dashboard" className="rounded-xl">
                Dashboard
              </Link>
            </li>

            <li>
              <Link href="/dashboard/mail" className="rounded-xl">
                My Mail
              </Link>
            </li>

            <li>
              <Link href="/dashboard/subscription" className="rounded-xl">
                Subscription
              </Link>
            </li>

            <li>
              <Link href="/dashboard/profile" className="rounded-xl">
                Profile
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
