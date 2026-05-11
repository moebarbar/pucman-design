/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2A3FE5',
        secondary: '#F4B9B0',
        success: '#16A34A',
        warning: '#D97706',
        danger: '#DC2626',
        info: '#0EA5E9',
        surface: '#000000',
        ink: '#111827',
        pellet: '#FFD166',
        ghost: {
          blinky: '#FF0000',
          pinky: '#FFB8FF',
          inky: '#00FFFF',
          clyde: '#FFB852',
        },
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'system-ui', 'monospace'],
        mono: ['"Space Mono"', 'ui-monospace', 'monospace'],
      },
      spacing: {
        // 8pt baseline grid
        '0.5': '4px',
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '5': '40px',
        '6': '48px',
        '8': '64px',
        '10': '80px',
        '12': '96px',
      },
      borderRadius: {
        none: '0',
        sm: '2px',
        DEFAULT: '4px',
      },
      boxShadow: {
        pixel: '4px 4px 0 0 #000000',
        'pixel-lg': '8px 8px 0 0 #000000',
        'pixel-primary': '4px 4px 0 0 #2A3FE5',
      },
    },
  },
  plugins: [],
};
