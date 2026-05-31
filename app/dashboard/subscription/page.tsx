import { getCurrentUser, getPricingPlans } from "@/lib/api";

export default async function SubscriptionPage() {
  const [pricingPlans, user] = await Promise.all([
    getPricingPlans(),
    getCurrentUser(),
  ]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold">Subscription</h1>

        <p className="text-base-content/70 mt-2">Manage your current plan.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingPlans.map((plan) => {
          const isCurrentPlan = plan.name === user.plan;

          return (
            <div
              key={plan.name}
              className={`card bg-base-100 shadow-md border ${
                isCurrentPlan ? "border-primary" : "border-base-300"
              }`}
            >
              <div className="card-body">
                <div className="flex justify-between items-center">
                  <h2 className="card-title">{plan.name}</h2>

                  {isCurrentPlan && (
                    <span className="badge badge-primary">Current</span>
                  )}
                </div>

                <p className="text-4xl font-bold">{plan.price}</p>

                <ul className="list-disc list-inside space-y-2 mt-4">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <button
                  className={`btn mt-6 ${
                    isCurrentPlan ? "btn-primary" : "btn-outline"
                  }`}
                >
                  {isCurrentPlan ? "Current Plan" : "Choose Plan"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
