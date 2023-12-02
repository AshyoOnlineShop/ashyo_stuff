/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        global_blue: "#134E9B",
        global_grey: "#EBEFF3",
        txt_grey: "#545D6A",
        error_color: "crimson",
        blue_hover: "#0c56b6ec",
      },
    },
  },
  plugins: [],
};
