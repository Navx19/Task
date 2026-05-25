export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center">Login</h1>

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

          <a
            href="/forgot-password"
            className="text-sm text-primary hover:underline"
          >
            Forgot your password?
          </a>

          <button className="btn btn-primary w-full">Login</button>
        </div>
      </div>
    </div>
  );
}
