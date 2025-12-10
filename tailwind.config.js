/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Your existing colors
        maroon: '#4A0E0E',
        ivory:  '#F8F6F1',
        gold:   '#C6A664',
        grey:   '#E8E6E1',

        // NEW: Colors used directly in JSX
        'deep-maroon': '#800000',
        'bright-gold': '#D4AF37',

        // Shadcn/ui variables (keep if using)
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: 'hsl(var(--primary))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
        secondary: 'hsl(var(--secondary))',
        'secondary-foreground': 'hsl(var(--secondary-foreground))',
        accent: 'hsl(var(--accent))',
        'accent-foreground': 'hsl(var(--accent-foreground))',
        border: 'hsl(var(--border))',
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
      },
    },
  },
  plugins: [],
};