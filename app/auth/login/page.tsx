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

          <div className="flex items-center justify-between mt-4">
            <label className="label cursor-pointer">
              <input type="checkbox" className="checkbox" />
              <span className="label-text">Remember me</span>
            </label>
          

          <a
            href="/auth/forgot-password"
            className="text-sm text-primary hover:underline "
          >
            Forgot your password?
          </a>
          </div>

          <button className="btn btn-primary w-full">Login</button>

          <a
            href="/auth/signup"
            className="text-sm text-primary  hover:underline"
          >
            Don&apos;t have an account? Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
