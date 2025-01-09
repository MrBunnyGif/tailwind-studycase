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
    extend: {},
  },
  plugins: [],
}