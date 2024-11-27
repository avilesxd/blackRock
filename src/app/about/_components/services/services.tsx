import TitleAbout from "../shared/TitleAbout";

const Services = () => {
  return (
    <div className="space-y-8">
      <TitleAbout title="Servicios" />
      {/* Servicio 1 */}
      <div className="p-6 bg-white dark:bg-gray-900 border border-transparent rounded-xl shadow-lg hover:shadow-2xl transition-all">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Desarrollo de Aplicaciones Web
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          Creamos soluciones web personalizadas y optimizadas, adaptadas a las
          necesidades de tu negocio, utilizando las últimas tecnologías y
          mejores prácticas de desarrollo.
        </p>
      </div>

      {/* Servicio 2 */}
      <div className="p-6 bg-white dark:bg-gray-900 border border-transparent rounded-xl shadow-lg hover:shadow-2xl transition-all">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Consultoría en TI
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          Ofrecemos consultoría profesional para optimizar tus procesos y
          tecnologías, ayudando a mejorar la eficiencia operativa y a reducir
          costos.
        </p>
      </div>

      {/* Servicio 3 */}
      <div className="p-6 bg-white dark:bg-gray-900 border border-transparent rounded-xl shadow-lg hover:shadow-2xl transition-all">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Soporte Técnico
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          Brindamos soporte técnico continuo para garantizar que tu
          infraestructura tecnológica esté funcionando al máximo rendimiento,
          con respuestas rápidas y soluciones eficaces.
        </p>
      </div>

      {/* Servicio 4 */}
      <div className="p-6 bg-white dark:bg-gray-900 border border-transparent rounded-xl shadow-lg hover:shadow-2xl transition-all">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Automatización de Procesos
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          Implementamos soluciones de automatización que mejoran la eficiencia
          en tus operaciones diarias, permitiendo ahorrar tiempo y reducir
          errores humanos.
        </p>
      </div>
    </div>
  );
};

export default Services;
