const SETTINGS = {
  NAME: "Black Rock",
  DESCRIPTION: "Proyecto universitario",
};

const INTEGRANTES = [
  {
    name: "Ignacio Avilés",
    description: "Jefe de Proyecto - Desarrollador Web",
    curriculum: "IgnacioAviles.pdf",
  },
  {
    name: "Juan Galaz",
    description: "Diseñador Gráfico",
    curriculum: "JuanGalaz.pdf",
  },
  {
    name: "Denilson Escobar",
    description: "Desarrollador Web - Gestor Financiero",
    curriculum: "DenilsonEscobar.pdf",
  },
  {
    name: "Jorge Cruz",
    description: "Gestor de Proyecto",
    curriculum: "JorgeCruz.pdf",
  },
];

const NAV_LINKS = [
  {
    name: "Inicio",
    href: "/",
  },
  {
    name: "Sobre nosotros",
    href: "/about",
  },
];

const documents = [
  { title: "Contrato", link: "/documentos/ContratoTrabajoEquipo.pdf" },
  { title: "Prototipo", link: "/documentos/appDAE.pdf" },
  { title: "Carta Gantt", link: "/documentos/cartaGanttAppDAE.pdf" },
  { title: "Costos Operativos", link: "/documentos/CostosOperativos.pdf" },
];

export { SETTINGS, INTEGRANTES, NAV_LINKS, documents };
