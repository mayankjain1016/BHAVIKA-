/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#1e88e5',
          700: '#1565c0', // Main brand blue
          800: '#0d47a1',
          900: '#0a2540', // Deep corporate navy
          950: '#071526',
        },
        navy: {
          800: '#0d233a',
          900: '#0a192f',
          950: '#050c18',
        },
        accent: {
          amber: '#f59e0b',
          orange: '#ea580c',
          gold: '#eab308',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Montserrat', 'Poppins', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.06), 0 2px 8px -2px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 20px 25px -5px rgba(21, 101, 192, 0.12), 0 8px 10px -6px rgba(21, 101, 192, 0.08)',
        'blue-glow': '0 0 25px rgba(30, 136, 229, 0.35)',
      },
    },
  },
  plugins: [],
}
