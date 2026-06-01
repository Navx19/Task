"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const hideNavbar = ["/login", "/signup", "/forgot-password"].includes(pathname);

  if (hideNavbar) {
    return null;
  }

  return (
    <div className="navbar bg-base-100 border-b border-base-300 px-6">
      <div className="flex-1">
        <Link href="/" className="text-2xl font-bold">
          MailBox
        </Link>
      </div>

      <div className="flex gap-2">
        <Link href="/pricing" className="btn btn-ghost">
          Pricing
        </Link>

        <Link href="/contact" className="btn btn-ghost">
          Contact
        </Link>

        <Link href="/dashboard" className="btn btn-ghost">
          Dashboard
        </Link>

        <Link href="/login" className="btn btn-primary">
          Login
        </Link>
      </div>
    </div>
  );
}
