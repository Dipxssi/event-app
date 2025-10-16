"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
         
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className={pathname === "/" ? "navbar-link-active" : "navbar-link"}
            >
              Home
            </Link>
            <Link
              href="/events"
              className={pathname === "/events" ? "navbar-link-active" : "navbar-link"}
            >
              Live Events
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
