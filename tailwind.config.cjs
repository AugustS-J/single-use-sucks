/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
    theme: {
        extend: {
            fontFamily: {
                'unica': ['montserrat', 'sans-serif'],
                'grotesk': ['Public Sans', 'sans-serif'],
            },
            colors: {
                primary: {
                  100: "#184B5C",
                },
          
                secondary: {
                  100: "#DCF0F1",
                },
          
                tertiary: {
                  100: "#A0D4D1",
                },
          
                highlight: {
                  100: "#F4F9FB",
                },
          
                accent: {
                  100: "#FF6E65",
                },
              },
        },
    },
  };