"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { loginUser } from "@/lib/api";

export default function LoginPage() {
  const router = useRouter(); //route to navigate to dashboard after login
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); //login fail korle ashbe

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const result = await loginUser(email, password);

    if (!result.success) {
      setError(result.message ?? "Login failed.");
      return;
    }

    router.push("/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <form onSubmit={handleSubmit} className="card-body">
          <h1 className="text-3xl font-bold text-center">Login</h1>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)} //onchange e email state update hobe
            className="input input-bordered w-full"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="input input-bordered w-full"
            required
          />

          {error && <p className="text-sm text-error">{error}</p>} 

          <div className="flex items-center justify-between mt-4">
            <label className="label cursor-pointer gap-2">
              <input type="checkbox" className="checkbox" />
              <span className="label-text">Remember me</span>
            </label>

            <Link
              href="/forgot-password"
              className="text-sm text-primary hover:underline"
            >
              Forgot your password?
            </Link>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full"
          >
            Login
          </button>

          <Link href="/signup" className="text-sm text-primary hover:underline">
            Don't have an account? Sign up
          </Link>
        </form>
      </div>
    </div>
  );
}
