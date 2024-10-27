"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import Logo from "@/components/Logo";
import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 shadow-lg px-4 py-3 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href={NAV_LINKS[0].href}
          className="text-xl font-semibold text-gray-900 dark:text-white transition-transform transform hover:scale-105"
        >
          <Logo />
        </Link>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleMenu}
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          <ModeToggle />
        </div>
      </div>

      {isOpen && (
        <div className="mt-4 bg-white dark:bg-gray-900 shadow-lg rounded-lg p-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium px-4 py-2 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default MobileNavbar;
