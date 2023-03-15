import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { sentryVitePlugin } from "@sentry/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true, // Source map generation must be turned on
  },
  plugins: [
    vue(),
    // sentryVitePlugin({
    //   org: "alan-cg",
    //   project: "sentry-gazin-app",

    //   // Specify the directory containing build artifacts
    //   include: "./dist",

    //   // Auth tokens can be obtained from https://sentry.io/settings/account/api/auth-tokens/
    //   // and needs the `project:releases` and `org:read` scopes
    //   authToken: process.env.SENTRY_AUTH_TOKEN,

    //   // Optionally uncomment the line below to override automatic release name detection
    //   // release: process.env.RELEASE,
    // }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
