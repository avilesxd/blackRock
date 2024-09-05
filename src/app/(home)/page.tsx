"use client";

import { Button } from "@/components/ui/button";
import ListItem from "./_components/ListItem";
import Section from "./_components/Section";

export default function Home() {
  return (
    <main>
      <Section title="Ideas">
        <p className="text-justify leading-relaxed">
          Desarrollar una plataforma web para la institución de educación
          superior Santo Tomas, específicamente para la Dirección de Asuntos
          Estudiantiles (DAE), que facilite la gestión integral de actividades y
          eventos. Esta solución permitirá la planificación eficiente, la
          recolección automatizada de datos clave y el análisis en tiempo real,
          optimizando la toma de decisiones.
        </p>
      </Section>

      <Section title="Análisis">
        <p className="text-justify leading-relaxed">
          El proyecto tiene como objetivo desarrollar una plataforma web para la
          Dirección de Asuntos Estudiantiles (DAE) de la institución Santo
          Tomas, enfocada en la gestión eficiente de eventos estudiantiles. Esta
          plataforma permitirá a la DAE realizar las siguientes tareas clave:
        </p>
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

      <Section title="Documentos">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Section title="Contrato">
            <Button
              className="w-full"
              onClick={() =>
                window.open("/documentos/ContratoTrabajoEquipo.pdf", "_blank")
              }
            >
              Ver contrato
            </Button>
          </Section>

          <Section title="Prototipo">
            <Button
              className="w-full"
              onClick={() => window.open("/documentos/appDAE.pdf", "_blank")}
            >
              Ver prototipo
            </Button>
          </Section>

          <Section title="Carta Gantt">
            <Button
              className="w-full"
              onClick={() => window.open("/documentos/cartaGanttAppDAE.pdf", "_blank")}
            >
              Ver Carta Gantt
            </Button>
          </Section>

          <Section title="Costos Operativos">
            <Button
              className="w-full"
              onClick={() => window.open("/documentos/CostosOperativos.pdf", "_blank")}
            >
              Ver Costos Operativos
            </Button>
          </Section>
        </div>
      </Section>

      <img
        className="w-full mb-2 dark:border-collapse border-2 border-black dark:border-teal-50"
        src="/sistema.jpg"
        alt="Proyecto de plataforma para la DAE"
      />
    </main>
  );
}
