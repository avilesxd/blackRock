const SupportPlans = () => {
  return (
    <div className="space-y-8 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <div className="p-4 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 text-white rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-2">Soporte Básico</h3>
        <p className="text-sm text-gray-100 leading-relaxed">
          Incluye resolución de incidencias menores, mantenimiento preventivo y
          actualizaciones de seguridad menores.
        </p>
      </div>
      <div className="p-4 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 text-white rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-2">Soporte Avanzado</h3>
        <p className="text-sm text-gray-100 leading-relaxed">
          Incluye asistencia técnica 24/7, actualizaciones funcionales mayores,
          monitoreo continuo y optimización de la plataforma.
        </p>
      </div>
    </div>
  );
};

export default SupportPlans;
