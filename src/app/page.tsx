export default function Home() {
  return (
    <main>
      <section className="py-12 px-4 md:px-8">
        <h1 className="text-center mb-8 text-3xl font-bold">Ideas</h1>
        <p className="text-justify">Crear un software web para la institución de la educación superior Santo Tomas enfocado en la dirección de asuntos estudiantiles (DAE) para la gestión, planificación y recolección de datos para sus posterior análisis</p>
      </section>
      <section className="py-12 px-4 md:px-8">
        <h1 className="text-center mb-8 text-3xl font-bold">Análisis</h1>
        <p className="text-justify">El proyecto se basa en la recolección de datos, análisis y predicción para realizar los eventos y proyectar asistencia y realizar el evento en base a la cantidad de gente que confirmo sus asistencia y para su posible posterior asistencia</p>
      </section>
      <img className="w-full mb-2" src="/sistema.jpg" alt="proyecto" />
    </main>
  );
}
