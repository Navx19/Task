export default function HowItWorksPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold">How It Works</h1>

        <p className="mt-4 opacity-70">
          Simple steps to manage your mails digitally.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card bg-base-100 shadow-xl border border-base-300">
          <div className="card-body">
            <h2 className="text-2xl font-bold">1. Create Account</h2>

            <p>Register your secure virtual mailbox account.</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl border border-base-300">
          <div className="card-body">
            <h2 className="text-2xl font-bold">2. Receive Mails</h2>

            <p>All mails are securely received and processed digitally.</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl border border-base-300">
          <div className="card-body">
            <h2 className="text-2xl font-bold">3. Manage Online</h2>

            <p>Access, preview, and manage mails from anywhere.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
