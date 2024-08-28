"use client";

import { Button } from '@/components/ui/button';
import React from 'react';

interface PersonCardProps {
  name: string;
  photo: string;
  resumeFile: string;
}

const PersonCard = ({ name, photo, resumeFile }: PersonCardProps) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `/${resumeFile}`;
    link.download = resumeFile;
    link.click();
  };

  return (
    <div className="flex flex-col items-center bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 md:p-8 w-full space-y-4 dark:text-gray-100">
      <img
        className="rounded-full shadow-lg w-40 h-40 object-cover mb-4"
        src={photo || `/${name}.png`}
        alt={`Foto de ${name}`}
      />
      <h2 className="text-2xl font-bold md:text-3xl dark:text-gray-100 mb-2">
        {name}
      </h2>
      <Button onClick={handleDownload}>
        Descargar currículum
      </Button>
    </div>
  );
};

export default PersonCard;
