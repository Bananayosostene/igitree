/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["poppins"],
        body: ['"poppins"'],
      },
      colors: {
        primary: "#3A6EA5", 
        secondary: "#F9A03F",
        black: "#000000",
        lightBlue: "#C7DBEE",
        accent: "#4B5563",
        btn: "#C7DBEE",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
      },
      borderRadius: {
        sm: "5px",
        md: "8px",
        lg: "10px",
        xl: "16px",
        "2xl": "24px",
      },
      screens: {
        phone: "450px",
        bigphone: "650px",
        tablet: "860px",
        laptop: "1200px",
      },
      height: {
        "50vh": "50vh",
      },
      boxShadow: {
        "black-shadow": "0 4px 6px rgba(0, 0, 0, 0.1)",
      },
      fontSize: {
        "custom-size": "0.60rem",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".outline-none": {
          outline: "0",
        },
      });
    },
  ],
};
