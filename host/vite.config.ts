import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      react(),
      tsconfigPaths(),
      tailwindcss(),
      federation({
        name: "host",
        remotes: {
          topArtists: `${env.VITE_TOP_ARTISTS_MICROSERVICE_BUILD_URL}`,
          topTracks: `${env.VITE_TOP_TRACKS_MICROSERVICE_BUILD_URL}`,
          artistDetails: `${env.VITE_ARTIST_DETAILS_MICROSERVICE_BUILD_URL}`,
        },
        shared: [
          "react",
          "react-dom",
          "react-redux",
          "@reduxjs/toolkit",
          "react-router-dom",
        ],
      }),
    ],
    build: {
      modulePreload: false,
      target: "esnext",
      minify: false,
      cssCodeSplit: false,
    },
  };
});
