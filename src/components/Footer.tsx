import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-gray-900 py-6 shadow-md">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()}{" "}
          <Link href="/" className="hover:underline font-semibold text-gray-700 dark:text-gray-300">
            Black Rock
          </Link>
          . Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
