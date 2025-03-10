// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: "https://jordancurley.com",
  integrations: [
    preact(),
    icon(),
    expressiveCode({
      themes: ["github-dark", "github-light"],
      styleOverrides: {
        borderRadius: "0",

        frames: {
          editorBackground: "#2f2f2f",
          terminalBackground: "#2f2f2f",
          editorTabBarBackground: "#1a1a1a",
          terminalTitlebarBackground: "#1a1a1a",
          editorActiveTabBackground: "#1a1a1a",
          editorActiveTabIndicatorTopColor: "#1a1a1a",
          editorActiveTabIndicatorBottomColor: "#1a1a1a",
          frameBoxShadowCssValue: "",
        },
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
