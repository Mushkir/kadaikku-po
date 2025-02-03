/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./**.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#27445D",
        sub_primary: "#3c566d",
        secondary: "#497D74",
        secondary_light: "#71BBB2",
        bone_white: "#EFE9D5",
        blue_variant: "#93a1ae",
      },
      fontFamily: {
        Sen: ["Sen"],
      },
    },
  },
  plugins: [],
};
