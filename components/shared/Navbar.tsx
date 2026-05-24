"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between">
        <h1 className="font-bold text-xl">MailBox</h1>

        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
}