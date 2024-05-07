/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        bgImage: "url('./public/image/image2-new-1.png')",
      },
      screens: {
        xxs: "440px", // min-width
      },
      fontSize: {
        clamp: "clamp(0.5rem , 1rem , 1vw)",
      },
    },
  },
  plugins: [],
};


