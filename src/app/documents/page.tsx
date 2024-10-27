"use client";

import Section from "@/components/shared/Section";
import { Button } from "@/components/ui/button";
import { DOCUMENTS } from "@/lib/constants";
import React from "react";

function DocumentsPage() {
  return (
    <Section title="Documentos">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-8">
        {DOCUMENTS.map(({ title, link }) => (
          <div
            key={title}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {title}
            </h2>
            <Button
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-2 rounded-md shadow-lg transition-colors duration-300 hover:bg-gradient-to-l"
              onClick={() => window.open(link, "_blank")}
            >
              Ver {title}
            </Button>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default DocumentsPage;
