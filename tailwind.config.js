/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        myriad: ["Myriad Pro", "sans-serif"],
      },
      typography: {
        fontFamily: {
          myriad: ["Myriad Pro", "sans-serif"],
        },
      },
      fontSize: {
        h1: ["30px", "33px"], // Set font size for h1
        h2: ["34px", "37.4px"], // Set font size for h2
        h3: ["24px", "30px"], // Set font size for h3
        h4: ["20px", "24px"], // Set font size for h4
        h5: ["18px", "20px"], // Set font size for h5
        h6: ["16px", "18px"], // Set font size for h6
      },
      lineHeight: {
        h1: "40px", // Set line height for h1
        h2: "36px", // Set line height for h2
        h3: "30px", // Set line height for h3
        h4: "24px", // Set line height for h4
        h5: "20px", // Set line height for h5
        h6: "18px", // Set line height for h6
      },

      fontWeight: {
        h1: "bold", // Cài đặt độ đậm cho h1
        h2: "bold", // Cài đặt độ đậm cho h2
        h3: "bold", // Cài đặt độ đậm cho h3
        h4: "bold", // Cài đặt độ đậm cho h4
        h5: "bold", // Cài đặt độ đậm cho h5
        h6: "bold", // Cài đặt độ đậm cho h6
      },
    },
    colors: {
      // Configure your color palette here
      goldlg: "#f2c17e",
      white: "#fff",
      black: "#000",
      background: "#f4f4f4",
      textCl: "#333d21",
      textA: "#AE8545",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
