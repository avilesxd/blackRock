const PaymentConditions = () => {
  return (
    <div className="space-y-8 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <div className="p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-2">Pago inicial (30%)</h3>
        <p className="text-sm text-gray-100 leading-relaxed">
          Al firmar el contrato, se requiere un pago inicial del 30% del costo
          total del proyecto.
        </p>
      </div>
      <div className="p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-2">Pago intermedio (50%)</h3>
        <p className="text-sm text-gray-100 leading-relaxed">
          Distribuidos en dos o más partes durante el desarrollo del proyecto,
          según los hitos establecidos.
        </p>
      </div>
      <div className="p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-2">Pago final (20%)</h3>
        <p className="text-sm text-gray-100 leading-relaxed">
          Se realiza tras la entrega e implementación final, después de pasar
          todas las pruebas satisfactorias.
        </p>
      </div>
    </div>
  );
};

export default PaymentConditions;
