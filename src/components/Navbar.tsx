import React from 'react';
import { ModeToggle } from './ModeToggle';
import { NAV_LINKS } from '@/lib/constants';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="bg-white border-gray-200 px-4 sm:px-6 py-3 dark:bg-gray-800 shadow-md">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <Link href={NAV_LINKS[0].href} className="text-xl font-semibold text-gray-900 dark:text-white">
          Black Rock
        </Link>

        <div className="flex items-center space-x-6">
          <div className="md:flex space-x-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-400 font-medium"
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

export default Navbar;
