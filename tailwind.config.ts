import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:"class",
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				'50': '#f0f9ff',
  				'100': '#e0f2fe',
  				'200': '#bae6fd',
  				'300': '#7dd3fc',
  				'400': '#38bdf8',
  				'500': '#0ea5e9',
  				'600': '#0284c7',
  				'700': '#0369a1',
  				'800': '#075985',
  				'900': '#0c4a6e',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			
  		},
  		animation: {
  			float: 'float 6s ease-in-out infinite',
  			'float-delayed': 'float-delayed 7s ease-in-out infinite',
  			'float-slow': 'float-slow 8s ease-in-out infinite',
  			'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite'
  		},

  	}
  },
  plugins: [],
};
export default config;
