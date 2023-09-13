/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    nextui({
      layout: {
        borderRadius: "0px",
      },
      themes: {
        light: {
          colors: {
            primary: "#1F0322",
            secondary: "#AEA79F",
            accent: "#b4f07f",
            error: "#FF0119",
            success: "#1EFF21",
            warning: "#F0C83B",
            info: "#fff",
            onPrimary: "#c676be",
            onSecondary: "#77216F",
            onAccent: "#520a4b",
            onError: "#000000",
            onSuccess: "#000000",
            onWarning: "#000000",
            onInfo: "#000000",
            border: "#000000",
            accentHover: "#000000",
            primaryHover: "#000000",
            secondaryHover: "#000000",
            errorHover: "#000000",
            successHover: "#000000",
            warningHover: "#000000",
            infoHover: "#000000",
            onPrimaryHover: "#000000",
            onSecondaryHover: "#000000",
            onSurfaceHover: "#000000",
            onErrorHover: "#000000",
            onSuccessHover: "#000000",
            onWarningHover: "#000000",
            onInfoHover: "#000000",
          },
        },
      },
    }),
  ],
};
