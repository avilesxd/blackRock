import Link from "next/link";
import React from "react";
import Logo from "./Logo";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white dark:bg-gray-900 py-6 shadow-md">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center justify-center">
        <span className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
          © {currentYear}{" "}
          <Link href="/" className="hover:underline font-semibold text-gray-700 dark:text-gray-300">
            <Logo />
          </Link>
          . Todos los derechos reservados.
        </span>
      </div>
      <div className="container mx-auto mt-6 px-4 md:px-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <img
          className="w-1/3 md:w-1/5 lg:w-1/6 h-auto"
          src="/santoTomas/logoSantoTomas.png"
          alt="Logo de Santo Tomás"
        />
        <img
          className="w-1/3 md:w-1/5 lg:w-1/6 h-auto dark:block hidden"
          src="/santoTomas/logoHermanosTomasinos.png"
          alt="Logo de los Hermanos Tomasinos Santo Tomás"
        />
        <img
          className="w-1/3 md:w-1/5 lg:w-1/6 h-auto"
          src="/santoTomas/logoDae.png"
          alt="Logo de la DAE Santo Tomás"
        />
      </div>
    </footer>
  );
}

export default Footer;
