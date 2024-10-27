import Link from "next/link";
import React from "react";
import Logo from "./Logo";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-t from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 py-8 shadow-lg">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center justify-center">
        <span className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
          © {currentYear}{" "}
          <Link
            href="/"
            className="hover:underline font-semibold text-gray-800 dark:text-gray-200 ml-1"
          >
            <Logo />
          </Link>
          . Todos los derechos reservados.
        </span>
      </div>

      <div className="container mx-auto mt-4 px-4 md:px-8 flex flex-col md:flex-row items-center justify-around space-y-6 md:space-y-0">
        <img
          className="w-20 md:w-24 lg:w-28 h-auto transition-transform transform hover:scale-105"
          src="/santoTomas/logoSantoTomas.png"
          alt="Logo de Santo Tomás"
        />
        <img
          className="w-20 md:w-24 lg:w-28 h-auto transition-transform transform hover:scale-105 dark:block hidden"
          src="/santoTomas/logoHermanosTomasinos.png"
          alt="Logo de los Hermanos Tomasinos Santo Tomás"
        />
        <img
          className="w-20 md:w-24 lg:w-28 h-auto transition-transform transform hover:scale-105"
          src="/santoTomas/logoDae.png"
          alt="Logo de la DAE Santo Tomás"
        />
      </div>
    </footer>
  );
}

export default Footer;
