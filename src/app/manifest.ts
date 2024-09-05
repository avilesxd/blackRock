import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Black Rock Team",
    short_name: "BRT",
    description: "Esto es un proyecto para la universidad",
    start_url: "https://blackrockteam.vercel.app/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
  };
}
