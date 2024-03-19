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
        h1: ["30px", "33px"], // Cài đặt kích thước cho h1
        h2: ["1.875rem", "2.25rem"], // Cài đặt kích thước cho h2
        h3: ["1.5rem", "1.875rem"], // Cài đặt kích thước cho h3
        h4: ["1.25rem", "1.5rem"], // Cài đặt kích thước cho h4
        h5: ["1.125rem", "1.25rem"], // Cài đặt kích thước cho h5
        h6: ["1rem", "1.125rem"], // Cài đặt kích thước cho h6
      },
      fontWeight: {
        h1: "bold", // Cài đặt độ đậm cho h1
        h2: "bold", // Cài đặt độ đậm cho h2
        h3: "bold", // Cài đặt độ đậm cho h3
        h4: "bold", // Cài đặt độ đậm cho h4
        h5: "bold", // Cài đặt độ đậm cho h5
        h6: "bold", // Cài đặt độ đậm cho h6
      },
      lineHeight: {
        h1: "2.5rem", // Cài đặt độ cao dòng cho h1
        h2: "2.25rem", // Cài đặt độ cao dòng cho h2
        h3: "1.875rem", // Cài đặt độ cao dòng cho h3
        h4: "1.5rem", // Cài đặt độ cao dòng cho h4
        h5: "1.25rem", // Cài đặt độ cao dòng cho h5
        h6: "1.125rem", // Cài đặt độ cao dòng cho h6
      },
    },
    colors: {
      // Configure your color palette here
      goldlg: "#f2c17e",
      white: "#fff",
      black: "#000",
      background: "#f4f4f4",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
