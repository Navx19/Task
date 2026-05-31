import { getCurrentUser, getMails } from "@/lib/api";

export default async function DashboardPage() {
  const [mails, user] = await Promise.all([getMails(), getCurrentUser()]);
  const unreadCount = mails.filter((mail) => mail.status === "Unread").length;
  const latestMail = mails[0];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold">Dashboard Overview</h1>

        <p className="text-base-content/70 mt-2">
          Welcome back to your mailbox dashboard.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card bg-base-100 shadow-md border border-base-300">
          <div className="card-body">
            <h2 className="text-lg font-semibold">Total Mails</h2>

            <p className="text-5xl font-bold mt-2">{mails.length}</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-md border border-base-300">
          <div className="card-body">
            <h2 className="text-lg font-semibold">Unread</h2>

            <p className="text-5xl font-bold text-primary mt-2">
              {unreadCount}
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-md border border-base-300">
          <div className="card-body">
            <h2 className="text-lg font-semibold">Current Plan</h2>

            <p className="text-4xl font-bold text-secondary mt-2">
              {user.plan}
            </p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card bg-base-100 shadow-md border border-base-300">
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>

          <div className="space-y-4">
            <div className="flex justify-between border-b border-base-300 pb-3">
              <div>
                <p className="font-semibold">New Mail Received</p>

                <p className="text-sm opacity-70">{latestMail.subject}</p>
              </div>

              <span className="badge badge-primary">New</span>
            </div>

            <div className="flex justify-between border-b border-base-300 pb-3">
              <div>
                <p className="font-semibold">Subscription Updated</p>

                <p className="text-sm opacity-70">
                  Current plan: {user.plan}
                </p>
              </div>

              <span className="badge badge-success">Success</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
