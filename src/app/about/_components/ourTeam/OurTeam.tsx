import { INTEGRANTES } from "@/lib/constants";
import React from "react";
import TitleAbout from "../shared/TitleAbout";
import PersonCard from "./_components/PersonCard";

export default function OurTeam() {
  return (
    <div>
      <TitleAbout title="Nuestro Equipo" />
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">
        Conoce a los integrantes que conforman nuestro equipo de manera dedicada
        y profesional.
      </p>
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
    </div>
  );
}
