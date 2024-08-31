export default function Home() {
  return (
    <main>
      <section className="py-12 px-4 md:px-8">
        <h1 className="text-center mb-8 text-3xl font-bold">Ideas</h1>
        <p className="text-justify leading-relaxed">
          Desarrollar una plataforma web para la institución de educación superior
          Santo Tomás, específicamente para la Dirección de Asuntos Estudiantiles (DAE),
          que facilite la gestión integral de actividades y eventos. Esta solución permitirá
          la planificación eficiente, la recolección automatizada de datos clave y el análisis
          en tiempo real, optimizando la toma de decisiones. A través del análisis de datos
          históricos y predicciones, el sistema ayudará a la DAE a proyectar la asistencia a
          eventos, organizar recursos necesarios y mejorar continuamente la experiencia
          estudiantil, garantizando una gestión más precisa y efectiva.
        </p>
      </section>

      <section className="py-12 px-4 md:px-8">
        <h1 className="text-center mb-8 text-3xl font-bold">Análisis</h1>
        <p className="text-justify leading-relaxed">
          El proyecto tiene como objetivo desarrollar una plataforma web para la Dirección de
          Asuntos Estudiantiles (DAE) de la institución Santo Tomás, enfocada en la gestión
          eficiente de eventos estudiantiles. Esta plataforma permitirá a la DAE realizar las
          siguientes tareas clave:
        </p>
        <ul className="list-disc mt-4">
          <li className="my-2">
            <h2 className="font-semibold">Recolección de datos</h2>
            <p className="text-justify leading-relaxed">
              El software recopilará datos clave sobre eventos y actividades programadas,
              incluyendo detalles de los estudiantes interesados, confirmación de asistencia,
              y otros factores relevantes como horarios, ubicación y recursos necesarios.
            </p>
          </li>
          <li className="my-2">
            <h2 className="font-semibold">Análisis de datos</h2>
            <p className="text-justify leading-relaxed">
              Los datos recopilados se usarán para identificar patrones de asistencia a eventos
              pasados, el nivel de participación estudiantil, y posibles preferencias para
              eventos futuros, lo que facilitará una planificación informada.
            </p>
          </li>
          <li className="my-2">
            <h2 className="font-semibold">Predicción de asistencia</h2>
            <p className="text-justify leading-relaxed">
              A través del análisis de datos históricos y la confirmación de asistencia, el
              software podrá predecir la cantidad de asistentes a un evento, ayudando a la DAE
              a organizar mejor los recursos y logística.
            </p>
          </li>
          <li className="my-2">
            <h2 className="font-semibold">Planificación de eventos</h2>
            <p className="text-justify leading-relaxed">
              Basado en datos y proyecciones, la DAE podrá organizar los eventos de manera más
              efectiva, ajustando la cantidad de recursos, instalaciones y personal según la
              cantidad esperada de asistentes.
            </p>
          </li>
          <li className="my-2">
            <h2 className="font-semibold">Retroalimentación para eventos futuros</h2>
            <p className="text-justify leading-relaxed">
              Los datos obtenidos tras los eventos permitirán a la DAE ajustar estrategias y
              mejorar la organización de futuros eventos, garantizando una mejor participación
              y satisfacción estudiantil.
            </p>
          </li>
        </ul>
      </section>

      <img className="w-full mb-2" src="/sistema.jpg" alt="Proyecto de plataforma para la DAE" />
    </main>
  );
}
