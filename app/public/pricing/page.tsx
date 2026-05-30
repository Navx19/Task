import { getPricingPlans } from "@/lib/api";

export default async function PricingPage() {
  const pricingPlans = await getPricingPlans();

  return (
    <div className="p-20 px-6">
        <h1 className="text-4xl font-bold mb-10 text-center">
            Our Pricing Plans
        </h1>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan) => (
                <div
                key={plan.name}
                className="card bg-base-100 shadow-xl border border-base-300"
                >
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold">
                            {plan.name}
                        </h2>

                        <p className="text-3xl font-bold my-4">
                            {plan.price}
                        </p>
                        
                        <ul className="space-y-2"> {plan.features.map((feature) => (
                            <li key = {feature}>++++{feature}</li>))}
                        </ul>

                        <button className="btn btn-primary mt-4">
                            Choose Plan
                        </button>
                    </div>
                </div>
            ))}

                           

        </div>
    </div>
  );
}
