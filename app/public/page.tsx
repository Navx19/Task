export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="hero min-h-[80vh]">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold leading-tight">
              Modern Virtual Mailbox Platform
            </h1>

            <p className="py-6 text-lg opacity-80">
              Manage physical mails digitally with a secure and modern dashboard
              system.
            </p>

            <button className="btn btn-primary btn-lg">Get Started</button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">Features</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card bg-base-100 shadow-xl border border-base-300">
            <div className="card-body">
              <h3 className="text-2xl font-bold">Secure Mail Handling</h3>

              <p>Safely manage your mails. </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl border border-base-300">
            <div className="card-body">
              <h3 className="text-2xl font-bold">Real-Time Dashboard</h3>

              <p>Access and monitor all mailbox activities instantly.</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl border border-base-300">
            <div className="card-body">
              <h3 className="text-2xl font-bold">Anywhere Access</h3>

              <p>Manage mails remotely from any device anytime.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
