export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="card w-full max-w-md bg-base-100 shadow-xl border border-base-300">
        <div className="card-body">
          <h1 className="text-4xl font-bold text-center">Forgot Password</h1>

          <p className="text-center opacity-70">Reset your account password.</p>

          <div className="space-y-4 mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />

            <input
              type="password"
              placeholder="Enter new password"
              className="input input-bordered w-full"
            />
            <input
              type="password"
              placeholder="Confirm new password"
              className="input input-bordered w-full"
            />

            <button className="btn btn-primary w-full">Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
}
