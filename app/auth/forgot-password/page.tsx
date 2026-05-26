export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center">Forgot Password</h1>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
          />
          <button className="btn btn-primary w-full">Reset Password</button>
        </div>
      </div>
    </main>
  );
}
