"use client";

import { Button } from '@/components/ui/button';
import React from 'react';
import TitleName from './PersonName';
import PersonDescription from './PersonDescription';

interface PersonCardProps {
  name: string;
  description: string;
  photo: string;
  curriculum: string;
}

const PersonCard = ({ name, description, photo, curriculum }: PersonCardProps) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `/${curriculum}`;
    link.download = curriculum;
    link.click();
  };

  return (
    <div className="flex flex-col items-center dark:border-collapse border-2 border-black dark:border-teal-50 bg-white dark:bg-gray-800 dark:bg-gradient-to-b dark:from-slate-800 shadow-lg rounded-lg p-6 md:p-8 w-full space-y-4 dark:text-gray-100">
      <img
        className="rounded-full shadow-lg w-40 h-40 object-cover mb-4"
        src={photo || `/${name}.jpg`}
        alt={`Foto de ${name}`}
      />
      <TitleName name={name} />
      <PersonDescription description={description} />
      <Button onClick={handleDownload}>
        Descargar currículum
      </Button>
    </div>
  );
};

export default PersonCard;
