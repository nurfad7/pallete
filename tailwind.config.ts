import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'product': "#b6b6b2",
        'classic-blue': "#0F4C81",
        'ultimate-gray': "#939597",
        'illuminating-yellow': "#F5DF4D",
        'burnt-coral': "#E9897E",
        'mint-green': "#98FF98",
        'cerulean': "#9BB7D4",
        'raspberry-sorbet': "#D2386C",
        'french-blue': "#0072B5",
        'green-ash': "#A0DAA9",
        'amethyst-orchid': "#926AA6",
        'marigold': "#F08300",
        'sky-blue': "#89CFF0",
        'lavender': "#E6E6FA",
        'sand-dollar': "#DFCFBE",
        'rose-quartz': "#F7CAC9",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        '.hide-scrollbar': {
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
      },
    })
  }],
};
export default config;
