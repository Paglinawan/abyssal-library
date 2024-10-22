import type { Config } from "tailwindcss";

const primitiveColors = {
  neutral: {
    0: "rgba(255, 255, 255, 1)",
    50: "rgba(244, 244, 244, 1)",
    100: "rgba(232, 232, 232, 1)",
    150: "rgba(221, 221, 221, 1)",
    200: "rgba(209, 210, 210, 1)",
    300: "rgba(186, 187, 187, 1)",
    400: "rgba(163, 164, 164, 1)",
    500: "rgba(139, 141, 142, 1)",
    600: "rgba(115, 118, 119, 1)",
    700: "rgba(90, 95, 96, 1)",
    800: "rgba(64, 72, 74, 1)",
    900: "rgba(41, 49, 51, 1)",
  },
  red: {
    0: "rgba(255,230,230,1)",
    50: "rgba(255,219,219,1)",
    100: "rgba(254,209,209,1)",
    150: "rgba(254,199,199,1)",
    200: "rgba(253,188,188,1)",
    300: "rgba(252,168,168,1)",
    400: "rgba(249,147,147,1)",
    500: "rgba(246,126,126,1)",
    600: "rgba(240,104,104,1)",
    700: "rgba(227,81,81,1)",
    800: "rgba(197,55,55,1)",
    900: "rgba(128,25,25,1)",
  },
  orange: {
    0: "rgba(255,246,245,1)",
    50: "rgba(255,233,229,1)",
    100: "rgba(254,220,214,1)",
    150: "rgba(254,207,198,1)",
    200: "rgba(253,195,182,1)",
    300: "rgba(252,172,150,1)",
    400: "rgba(249,151,121,1)",
    500: "rgba(246,133,97,1)",
    600: "rgba(240,119,78,1)",
    700: "rgba(227,106,64,1)",
    800: "rgba(197,89,51,1)",
    900: "rgba(128,57,32,1)",
  },
  yellow: {
    0: "rgba(255, 248, 235, 1)",
    50: "rgba(255, 243, 221, 1)",
    100: "rgba(254, 238, 206, 1)",
    150: "rgba(254, 233, 191, 1)",
    200: "rgba(254, 229, 177, 1)",
    300: "rgba(253, 221, 147, 1)",
    400: "rgba(252, 214, 118, 1)",
    500: "rgba(250, 206, 89, 1)",
    600: "rgba(247, 198, 59, 1)",
    700: "rgba(240, 186, 31, 1)",
    800: "rgba(224, 168, 3, 1)",
    900: "rgba(186, 140, 0, 1)",
  },
  green: {
    0: "rgba(250,255,242,1)",
    50: "rgba(244,253,233,1)",
    100: "rgba(238,251,223,1)",
    150: "rgba(231,248,213,1)",
    200: "rgba(224,246,203,1)",
    300: "rgba(206,237,181,1)",
    400: "rgba(185,224,158,1)",
    500: "rgba(161,206,133,1)",
    600: "rgba(135,184,107,1)",
    700: "rgba(108,157,82,1)",
    800: "rgba(83,128,59,1)",
    900: "rgba(61,102,41,1)",
  },
  blue: {
    0: "rgba(242,252,255,1)",
    50: "rgba(232,248,254,1)",
    100: "rgba(222,244,253,1)",
    150: "rgba(212,239,252,1)",
    200: "rgba(202,233,250,1)",
    300: "rgba(180,220,246,1)",
    400: "rgba(158,205,239,1)",
    500: "rgba(136,188,231,1)",
    600: "rgba(113,169,219,1)",
    700: "rgba(91,150,206,1)",
    800: "rgba(71,132,192,1)",
    900: "rgba(54,116,179,1)",
  },
  purple: {
    0: "rgba(255,242,250,1)",
    50: "rgba(255,233,246,1)",
    100: "rgba(255,224,242,1)",
    150: "rgba(254,214,237,1)",
    200: "rgba(254,205,232,1)",
    300: "rgba(253,186,222,1)",
    400: "rgba(252,167,211,1)",
    500: "rgba(250,147,198,1)",
    600: "rgba(245,127,183,1)",
    700: "rgba(233,104,163,1)",
    800: "rgba(211,79,136,1)",
    900: "rgba(191,57,113,1)",
  },
};

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
        neutral: {
          0: primitiveColors.neutral[0],
          50: primitiveColors.neutral[50],
          100: primitiveColors.neutral[100],
          150: primitiveColors.neutral[150],
          200: primitiveColors.neutral[200],
          300: primitiveColors.neutral[300],
          400: primitiveColors.neutral[400],
          500: primitiveColors.neutral[500],
          600: primitiveColors.neutral[600],
          700: primitiveColors.neutral[700],
          800: primitiveColors.neutral[800],
          900: primitiveColors.neutral[900],
        },
        red: {
          0: primitiveColors.red[0],
          50: primitiveColors.red[50],
          100: primitiveColors.red[100],
          150: primitiveColors.red[150],
          200: primitiveColors.red[200],
          300: primitiveColors.red[300],
          400: primitiveColors.red[400],
          500: primitiveColors.red[500],
          600: primitiveColors.red[600],
          700: primitiveColors.red[700],
          800: primitiveColors.red[800],
          900: primitiveColors.red[900],
        },
        orange: {
          0: primitiveColors.orange[0],
          50: primitiveColors.orange[50],
          100: primitiveColors.orange[100],
          150: primitiveColors.orange[150],
          200: primitiveColors.orange[200],
          300: primitiveColors.orange[300],
          400: primitiveColors.orange[400],
          500: primitiveColors.orange[500],
          600: primitiveColors.orange[600],
          700: primitiveColors.orange[700],
          800: primitiveColors.orange[800],
          900: primitiveColors.orange[900],
        },
        yellow: {
          0: primitiveColors.yellow[0],
          50: primitiveColors.yellow[50],
          100: primitiveColors.yellow[100],
          150: primitiveColors.yellow[150],
          200: primitiveColors.yellow[200],
          300: primitiveColors.yellow[300],
          400: primitiveColors.yellow[400],
          500: primitiveColors.yellow[500],
          600: primitiveColors.yellow[600],
          700: primitiveColors.yellow[700],
          800: primitiveColors.yellow[800],
          900: primitiveColors.yellow[900],
        },
        green: {
          0: primitiveColors.green[0],
          50: primitiveColors.green[50],
          100: primitiveColors.green[100],
          150: primitiveColors.green[150],
          200: primitiveColors.green[200],
          300: primitiveColors.green[300],
          400: primitiveColors.green[400],
          500: primitiveColors.green[500],
          600: primitiveColors.green[600],
          700: primitiveColors.green[700],
          800: primitiveColors.green[800],
          900: primitiveColors.green[900],
        },
        blue: {
          0: primitiveColors.blue[0],
          50: primitiveColors.blue[50],
          100: primitiveColors.blue[100],
          150: primitiveColors.blue[150],
          200: primitiveColors.blue[200],
          300: primitiveColors.blue[300],
          400: primitiveColors.blue[400],
          500: primitiveColors.blue[500],
          600: primitiveColors.blue[600],
          700: primitiveColors.blue[700],
          800: primitiveColors.blue[800],
          900: primitiveColors.blue[900],
        },
        purple: {
          0: primitiveColors.purple[0],
          50: primitiveColors.purple[50],
          100: primitiveColors.purple[100],
          150: primitiveColors.purple[150],
          200: primitiveColors.purple[200],
          300: primitiveColors.purple[300],
          400: primitiveColors.purple[400],
          500: primitiveColors.purple[500],
          600: primitiveColors.purple[600],
          700: primitiveColors.purple[700],
          800: primitiveColors.purple[800],
          900: primitiveColors.purple[900],
        },
      },
    },
  },
  plugins: [],
};
export default config;
