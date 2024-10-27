"use client";

import Section from "@/components/shared/Section";
import { Button } from "@/components/ui/button";
import { DOCUMENTS } from "@/lib/constants";
import React from "react";

function DocumentsPage() {
  return (
    <Section title="Documentos">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {DOCUMENTS.map(({ title, link }) => (
          <Section key={title} title={title}>
            <Button
              className="w-full"
              onClick={() => window.open(link, "_blank")}
            >
              Ver {title}
            </Button>
          </Section>
        ))}
      </div>
    </Section>
  );
}

export default DocumentsPage;
