import Logo from "@/components/Logo";
import { ModeToggle } from "@/components/ModeToggle";
import { NAV_LINKS } from "@/lib/constants";
import Link from "next/link";
import React from "react";

function DesktopNavbar() {
  return (
    <nav className="bg-gradient-to-r from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-lg py-4">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6">
        <Link
          href={NAV_LINKS[0].href}
          className="text-2xl font-semibold text-gray-900 dark:text-white transition-transform transform hover:scale-105"
        >
          <Logo />
        </Link>

        <div className="flex items-center space-x-8">
          <div className="hidden md:flex space-x-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

export default DesktopNavbar;
