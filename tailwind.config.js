/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      // Configure your color palette here
      goldlg: "#f2c17e",
      white: "#fff",
      black: "#000",
      background: "#f4f4f4",
    },
  },
  plugins: [],
};
