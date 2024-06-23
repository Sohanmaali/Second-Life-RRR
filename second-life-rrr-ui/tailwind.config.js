/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customYellow: "#F8C70C",
        customGreen: "#22631B",
        // customGreen: "#04AF2F",
      },
    },
  },
  plugins: [],
};
