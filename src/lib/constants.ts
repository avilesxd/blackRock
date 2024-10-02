import { link } from "fs";
import { title } from "process";

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

const DOCUMENTS = [
  { title: "Contrato", link: "/documentos/ContratoTrabajoEquipo.pdf" },
  { title: "Prototipo", link: "/documentos/appDAE.pdf" },
  { title: "Carta Gantt", link: "/documentos/cartaGanttAppDAE.pdf" },
  { title: "Costos Operativos", link: "/documentos/CostosOperativos.pdf" },
  { title: "Avance informe n°1", link: "/documentos/informe1.pdf" },
];

const FILES = [
  { title: "Acta de reuniones", link: "/archivos/Acta reuniones.docx" },
  {
    title: "Contrato de Trabajo",
    link: "/archivos/ContratoTrabajoEquipo.docx",
  },
  { title: "Costos Operativos", link: "/archivos/CostosOperativos.xlsx" },
  { title: "Carta Gantt Proyect", link: "/archivos/informeProyecto.mpp" },
  { title: "Presentacion Pitch", link: "/archivos/presentacion pitch.pptx" },
];

export { SETTINGS, INTEGRANTES, NAV_LINKS, DOCUMENTS, FILES };
