export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="text-4xl font-bold text-center">Create Account</h1>

          <p className="text-center opacity-70">Start managing your mails.</p>

          <div className="space-y-4 mt-4">
            <input
              type="text"
              placeholder="Full name"
              className="input input-bordered w-full"
            />

            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full"
            />
            <button className="btn btn-primary w-full">Create Account</button>

            <a href="/login" className="text-sm text-primary  hover:underline">
              Already have an account? Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
