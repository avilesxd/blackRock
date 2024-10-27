"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import PersonDescription from "./PersonDescription";
import PersonName from "./PersonName";

interface PersonCardProps {
  name: string;
  description: string;
  curriculum: string;
}

const PersonCard = ({ name, description, curriculum }: PersonCardProps) => {
  const handleOpenCurriculum = () => {
    window.open(`/curriculum/${curriculum}`, "_blank");
  };

  return (
    <div className="flex flex-col items-center border border-transparent bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6 md:p-8 w-full space-y-4 dark:text-white transition-transform transform hover:scale-105">
      <img
        className="rounded-full shadow-lg w-40 h-40 object-cover mb-4 transition-transform transform hover:scale-110"
        src={`/fotos/${name}.jpg`}
        alt={`Foto de ${name}`}
      />
      <PersonName name={name} />
      <PersonDescription description={description} />
      <Button
        className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white font-semibold px-4 py-2 rounded-md shadow-lg transition-colors duration-300 hover:bg-gradient-to-br hover:from-purple-600 hover:to-indigo-500"
        onClick={handleOpenCurriculum}
      >
        Ver currículum
      </Button>
    </div>
  );
};

export default PersonCard;
