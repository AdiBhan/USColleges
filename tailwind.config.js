/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    fontFamily: {
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ["Open Sans"],
    },
    extend: {},
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [],
};
