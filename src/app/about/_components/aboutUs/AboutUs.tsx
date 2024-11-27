import TitleAbout from "../shared/TitleAbout";

const AboutUs = () => {
  return (
    <div className="space-y-8 mb-8">
      <TitleAbout title="¿Quiénes somos?" />
      <div className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all ease-in-out duration-300">
        <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed mb-6 text-justify">
          En <strong>BlackRockTeam S.A.</strong>, somos una empresa dedicada al
          desarrollo y despliegue de aplicaciones tecnológicas avanzadas, con el
          objetivo de transformar la manera en que las empresas operan y se
          comunican con sus usuarios. Nuestro equipo está compuesto por expertos
          en distintas áreas de la tecnología, diseño, y consultoría, trabajando
          juntos para brindar soluciones innovadoras y de alto impacto.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed mb-6 text-justify">
          Fundada en 2024, nuestra empresa se ha consolidado como líder en el
          sector de la tecnología, ofreciendo productos y servicios
          personalizados que se adaptan a las necesidades específicas de cada
          cliente. Nos especializamos en crear plataformas robustas, escalables
          y seguras, que impulsan el crecimiento y la eficiencia de nuestros
          clientes.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed mb-6 text-justify">
          <strong>BlackRockTeam Tech S.A.</strong> se rige por principios de
          responsabilidad, innovación y compromiso con la calidad. Creemos en el
          trabajo en equipo y en la importancia de la transparencia con nuestros
          clientes, lo que nos permite construir relaciones a largo plazo
          basadas en la confianza mutua.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed text-justify">
          Nuestro equipo de profesionales está siempre dispuesto a enfrentar los
          retos más complejos, buscando siempre la mejora continua y la
          satisfacción de nuestros clientes. Estamos comprometidos con la
          excelencia en todo lo que hacemos.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
