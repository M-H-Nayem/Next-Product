"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session?.user?.email) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [session]);

  const loggedOutRoutes = [
    { path: "/", name: "Home" },
    { path: "/products", name: "Products" },
    { path: "/about", name: "About" },
    { path: "/login", name: "Login" },
    { path: "/register", name: "Register" },
  ];

  const loggedInRoutes = [
    { path: "/", name: "Home" },
    { path: "/products", name: "Products" },
    // { path: '/my-classes', name: 'My Classes' },
    { path: "/about", name: "About" },

    { path: "/dashboard", name: "Dashboard" },
    // { path: '/dashboard/add-product', name: 'Add Product' },
    // { path: '/blog', name: 'Blog' },
  ];

  const navRoutes = isLoggedIn ? loggedInRoutes : loggedOutRoutes;

  return (
    <nav className="sticky top-0 z-50 w-full bg-gray-800 text-base-content shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo or Brand Name */}
        <div className="flex-1">
          <Link href="/" className="text-2xl font-bold">
            Hunt Pro
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden flex-none md:flex">
          <ul className="menu menu-horizontal gap-2 px-1 text-xl">
            {navRoutes.map((route) => (
              <li key={route.path}>
                <Link href={route.path}>{route.name}</Link>
              </li>
            ))}
              {isLoggedIn && <button className="btn bg-gray-600 rounded-lg border-none" onClick={() => signOut({ callbackUrl: '/' })}>Log Out</button>}
            
          </ul>
        </div>

        {/* Mobile Menu (Dropdown) */}
        <div className="flex-none md:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              {navRoutes.map((route) => (
                <li  key={route.path}>
                  <Link className="text-center" href={route.path}>{route.name}</Link>
                </li>
              ))}
              {isLoggedIn && <button className="btn btn-sm bg-gray-700 "  onClick={() => signOut({ callbackUrl: '/' })}>Log Out</button>}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
