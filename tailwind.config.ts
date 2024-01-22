import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "color-main": "#2CB97C",
      "color-lightmain": "#90F899",
      "color-main-hover": "#28AA72",
      gray: {
        900: "#191F28",
        800: "#47515F",
        700: "#5A6574",
        600: "#77828F",
        500: "#99A2AD",
        400: "#BCC3C9",
        300: "#F1F3F5",
        200: "#F7F8FA",
        100: "#F7F8FA",
      },
      "color-black": "#000000",
      "color-red": "#FF3233",
      "color-blue": "#4A7FF7",
      "color-border": "#E5E8EB",
      "color-bg-green10": "#E9F7F1",
      "color-bg-green20": "#E9FEEB",
      "color-bg-green30": "#E9F8F2",
      "color-bg-violet": "#F2EFFC",
      "color-white": "#FFFFFF",
      "color-guide": "#EAF8F2",
      "color-qna": "#EDF2FE",
      "color-help-center": "#FDF8E8",
      "color-help-hover" : "#DEB00B",
      "naver-button": "#03c75a",
      "naver-button-hover": "#03bd56",
      "kakao-button": "#fee500",
      "kakao-button-hover": "#fadd00",
      "google-button-hover": "#f2f5fa",
      "collection-ing": "#FEA218",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      dropShadow: {
        login: "2px 2px 36px rgba(109, 233, 166, 0.16)",
      },
      fontFamily: {
        'pretendard': ['Pretendard']
      }
    },
  },
  plugins: [],
};
export default config;
