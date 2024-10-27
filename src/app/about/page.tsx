import { INTEGRANTES } from "@/lib/constants";
import React from "react";
import PersonCard from "./_components/PersonCard";

function AboutPage() {
  return (
    <section className="py-16 px-6 md:px-10 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          Nuestro Equipo
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">
          Conoce a los integrantes que conforman nuestro equipo de manera
          dedicada y profesional.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {INTEGRANTES.map((integrante) => (
          <div
            key={integrante.name}
            className="transition-transform transform hover:scale-105 duration-200"
          >
            <PersonCard {...integrante} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutPage;
