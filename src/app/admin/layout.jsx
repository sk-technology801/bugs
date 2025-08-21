"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function AdminLayout({ children }) {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;
  if (!session || session.user.role !== "admin") {
    return <p className="p-4 text-red-500">Access Denied</p>;
  }

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <nav className="flex flex-col space-y-3">
          <Link href="/admin">Dashboard</Link>
          <Link href="/admin/users">Users</Link>
          <Link href="/admin/settings">Settings</Link>
          <button
            className="mt-6 bg-red-500 px-3 py-1 rounded"
            onClick={() => signOut({ callbackUrl: "/login" })}
          >
            Logout
          </button>
        </nav>
      </aside>

      <main className="flex-1 bg-gray-100 p-6">{children}</main>
    </div>
  );
}
