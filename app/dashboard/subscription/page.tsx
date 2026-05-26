export default function SubscriptionPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold">Subscription</h1>

        <p className="text-base-content/70 mt-2">Manage your current plan.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Basic */}
        <div className="card bg-base-100 shadow-md border border-base-300">
          <div className="card-body">
            <h2 className="card-title">Basic</h2>

            <p className="text-4xl font-bold">$10</p>

            <ul className="space-y-2 mt-4">
              <li> 10 mails</li>
              <li> Basic support</li>
            </ul>

            <button className="btn btn-outline mt-6">Choose Plan</button>
          </div>
        </div>

        {/* Advanced */}
        <div className="card bg-base-100 shadow-md border border-primary">
          <div className="card-body">
            <div className="flex justify-between items-center">
              <h2 className="card-title">Advanced</h2>

              <span className="badge badge-primary">Popular</span>
            </div>

            <p className="text-4xl font-bold">$20</p>

            <ul className="space-y-2 mt-4">
              <li> 50 mails</li>
              <li> Priority support</li>
            </ul>

            <button className="btn btn-primary mt-6">Current Plan</button>
          </div>
        </div>

        {/* Pro */}
        <div className="card bg-base-100 shadow-md border border-base-300">
          <div className="card-body">
            <h2 className="card-title">Pro</h2>

            <p className="text-4xl font-bold">$50</p>

            <ul className="space-y-2 mt-4">
              <li> Unlimited mails</li>
              <li> 24/7 support</li>
            </ul>

            <button className="btn btn-outline mt-6">Upgrade</button>
          </div>
        </div>
      </div>
    </div>
  );
}
