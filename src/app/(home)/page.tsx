"use client";

import Section from "@/components/shared/Section";
import ListItem from "./_components/ListItem";

export default function Home() {
  return (
    <main>
      <Section title="Ideas">
        Desarrollar una plataforma web para la institución de educación superior
        Santo Tomas, específicamente para la Dirección de Asuntos Estudiantiles
        (DAE), que facilite la gestión integral de actividades y eventos. Esta
        solución permitirá la planificación eficiente, la recolección
        automatizada de datos clave y el análisis en tiempo real, optimizando la
        toma de decisiones.
      </Section>

      <Section title="Análisis">
        El proyecto tiene como objetivo desarrollar una plataforma web para la
        Dirección de Asuntos Estudiantiles (DAE) de la institución Santo Tomas,
        enfocada en la gestión eficiente de eventos estudiantiles. Esta
        plataforma permitirá a la DAE realizar las siguientes tareas clave:
        <ul className="list-disc mt-4">
          <ListItem
            title="Recolección de datos"
            description="El software recopilará datos clave sobre eventos y actividades programadas,
            incluyendo detalles de los estudiantes interesados, confirmación de asistencia, 
            y otros factores relevantes."
          />
          <ListItem
            title="Análisis de datos"
            description="Los datos recopilados se usarán para identificar patrones de asistencia a eventos
            pasados, el nivel de participación estudiantil."
          />
          <ListItem
            title="Predicción de asistencia"
            description="A través del análisis de datos históricos y la confirmación de asistencia, el
            software podrá predecir la cantidad de asistentes a un evento."
          />
          <ListItem
            title="Planificación de eventos"
            description="Basado en datos y proyecciones, la DAE podrá organizar los eventos de manera más
            efectiva, ajustando la cantidad de recursos, instalaciones."
          />
          <ListItem
            title="Retroalimentación para eventos futuros"
            description="Los datos obtenidos tras los eventos permitirán a la DAE ajustar estrategias y
            mejorar la organización de futuros eventos."
          />
        </ul>
      </Section>
      <img
        className="w-full mb-2 dark:border-collapse border-2 border-black dark:border-teal-50"
        src="/sistema.jpg"
        alt="Proyecto de plataforma para la DAE"
      />
    </main>
  );
}
