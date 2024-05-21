/** @type {import('tailwindcss').Config} */
module.exports = {
  // Specify the paths to all of the template files in your project
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // All JS, TS, JSX, TSX, and MDX files in the pages directory
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // All JS, TS, JSX, TSX, and MDX files in the components directory
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // All JS, TS, JSX, TSX, and MDX files in the app directory
  ],
  theme: {
    // Configure the container plugin
    container: {
      center: true, // Center the container by default
      padding: {
        DEFAULT: '1rem', // Default padding of 1rem
        md: '1.5rem', // Medium screen padding of 1.5rem
        lg: '2rem' // Large screen padding of 2rem
      }
    }
  },
  plugins: [], // Add any Tailwind CSS plugins here
};