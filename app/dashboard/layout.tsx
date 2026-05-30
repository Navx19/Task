import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="business">
    <div className="drawer lg:drawer-open">
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
            <span className="text-xl font-bold">MailBox</span>
          </div>
        </div>

        <div className="p-6">{children}</div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

        <aside className="w-72 min-h-full bg-base-100 border-r border-base-300 flex flex-col">
          {/* Logo */}
          <div className="p-6 border-b border-base-300">
            <h1 className="text-3xl font-bold">MailBox</h1>
          </div>

          {/* User */}
          <div className="p-6">
            <div className="flex items-center gap-3">
              <div className="avatar placeholder">
                <div className="bg-primary text-primary-content rounded-full w-12">
                  <span>NF</span>
                </div>
              </div>

              <div>
                <h3 className="font-semibold">Naiyer Nur Fairoz</h3>

                <div className="badge badge-primary badge-sm mt-1">
                  Pro Plan
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 px-4">
            <ul className="menu w-full gap-2">
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
          </div>

          {/* Bottom Section */}
          <div className="p-4 border-t border-base-300">
            <div className="text-sm opacity-70">MailBox</div>
          </div>
        </aside>
      </div>
    </div>
    </html>
  );
}
