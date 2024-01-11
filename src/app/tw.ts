export const twConfig = {
    plugins: [require("@tailwindcss/typography")],
    theme: {
      extend: {
        colors: {
          blue: {
            DEFAULT: "#0062FF",
            50: "#E5EFFF",
            100: "#CCE0FF",
            200: "#99C0FF",
            300: "#66A1FF",
            400: "#3381FF",
            500: "#0062FF",
            600: "#0054DB",
            700: "#0047B8",
            800: "#003994",
            900: "#002B70",
            950: "#00245E",
          },
          gray: {
            50: "#FCFCFD",
            75: "#F8F9FB",
            100: "#F3F4F7",
            200: "#E3E7ED",
            300: "#D0D7E1",
            400: "#A2AEC3",
            500: "#78859B",
            600: "#5F6C81",
            700: "#4A5363",
            800: "#343B46",
            900: "#1E2229",
            950: "#13161A",
          },
        },
      },
    },
  };