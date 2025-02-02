/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./**.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#27445D",
        secondary: "#497D74",
        secondary_light: "#71BBB2",
        bone_white: "#EFE9D5",
      },
      fontFamily: {
        Sen: ["Sen"],
      },
    },
  },
  plugins: [],
};
