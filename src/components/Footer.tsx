import Link from 'next/link';
import React from 'react';
import Logo from './Logo';

function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-gray-900 py-6 shadow-md">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
        <span className=" flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()}{" "}
          <Link href="/" className="hover:underline font-semibold text-gray-700 dark:text-gray-300">
            <Logo />
          </Link>
          . Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
