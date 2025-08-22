// src/app/dashboard/layout.jsx
"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardLayout = ({ children }) => {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  console.log(status);

  if (status === "loading") {
    return (
      <main className="flex justify-center items-center min-h-[80vh]">
        <div className="text-xl font-semibold">Loading dashboard...</div>
      </main>
    );
  }

  if (status === "unauthenticated") {
    return (
      <main className="flex justify-center items-center min-h-[80vh]">
        <div className="text-xl font-semibold text-red-500">
          You must be logged in to view this page.
        </div>
      </main>
    );
  }

  const navItems = [
    { name: "Dashboard Home", href: "/dashboard" },
    { name: "My Profile", href: "/dashboard/profile" },
    { name: "Add Product", href: "/dashboard/add-product" },
    { name: "Manage Products", href: "/dashboard/manage-products" },
  ];

  return (
    <div className="container mx-auto p-4 flex flex-col lg:flex-row gap-8 min-h-screen">
      {/* Sidebar Navigation */}
      <aside className="w-full lg:w-1/4 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Dashboard Menu</h2>
        <ul className="space-y-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block p-4 rounded-lg transition-colors duration-200 
                  ${
                    pathname === item.href
                      ? "bg-blue-600 text-white shadow-md"
                      : "hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content Area */}
      <div className="w-full lg:w-3/4 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;