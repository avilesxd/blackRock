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
    <nav className="bg-white border-gray-200 px-4 py-3 dark:bg-gray-800 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href={NAV_LINKS[0].href}
          className="text-xl font-semibold text-gray-900 dark:text-white"
        >
          <Logo />
        </Link>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleMenu}
            className="text-gray-700 dark:text-gray-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}{" "}
          </button>
          <ModeToggle />
        </div>
      </div>

      {isOpen && (
        <div className="mt-2 space-y-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-gray-700 hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-400 font-medium px-4 py-2"
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
