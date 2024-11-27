import React from "react";
import PlanCard from "./_components/PlanCard";
import PaymentConditions from "./_components/PaymentConditions";
import SupportPlans from "./_components/SupportPlans";
import TitleAbout from "../shared/TitleAbout";

const Price = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <TitleAbout title="Planes de Pago" />
      <section className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <PlanCard
            title="Plan Básico"
            price="$35,100,000 - $52,650,000 CLP"
            features={[
              "Registro de eventos",
              "Control de participación",
              "Generación de reportes",
              "Gestión de inventario",
              "Soporte Básico",
            ]}
          />
          <PlanCard
            title="Plan Avanzado"
            price="$58,500,000 - $99,450,000 CLP"
            features={[
              "Integración con otras plataformas",
              "Diseño personalizado de interfaz",
              "Soporte para más de 10,000 estudiantes activos",
              "Soporte Avanzado",
            ]}
          />
        </div>
      </section>

      <section className="mt-12">
        <TitleAbout title="Condiciones de Pago" />
        <PaymentConditions />
      </section>

      <section className="mt-12">
        <TitleAbout title="Soporte" />
        <SupportPlans />
      </section>
    </div>
  );
};

export default Price;
