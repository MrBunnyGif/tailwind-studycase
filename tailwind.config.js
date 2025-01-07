/** @type {import('tailwindcss').Config} */
module.exports = {
  // The "content" option tells Tailwind which files to scan for classes.
  // In this case, we're telling it to scan all files in the "app" and
  // "components" directories, as well as all files in the "pages" directory.
  // This allows us to use Tailwind classes in our React components.
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // colors: {
    //   vueJs: "#28b081"
    // }
    //creating "colors overwrite default colors, so the default colors are lost"
    extend: {
      //to create a custom color and not overwrite the default we put it in "extend"
      colors: {
        vueJs: {
          100: "#28b081",
          1312: "#eee",
          1313: "#333"
        }
      },
      fontSize: {
        xs: "12px",
        sm: "15px",
        base: "18px",
      }
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    spacing: {
      1: "2rem",
      2: "4rem",
      3: "6rem",
      4: "8rem",
      5: "10rem",
      6: "12rem",
    },
  },
  plugins: [],
}