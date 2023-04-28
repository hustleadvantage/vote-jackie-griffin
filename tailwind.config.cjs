const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'node_modules/preline/dist/*.js',
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      gray: colors.zinc,
      neutral: colors.neutral,

      // Brand
      primary: colors.neutral,
      secondary: colors.blue,
      accent: colors.rose,

      // Feedback
      success: colors.green,
      error: colors.red,
      warning: colors.yellow,
      info: colors.blue,

      surface: colors.neutral,
    },
    fontSize: {
      xs: ['.75rem', '1.125rem'],
      sm: ['.875rem', '1.25rem'],
      base: ['1rem', '1.5rem'],
      lg: ['1.125rem', '1.75rem'],
      xl: ['1.25rem', '1.875rem'],

      'heading-1': ['2.5rem', '3rem'],
      'heading-2': ['2.25rem', '2.75rem'],
      'heading-3': ['1.875rem', '2.25rem'],
      'heading-4': ['1.5rem', '1.875rem'],
      'heading-5': ['1.25rem', '1.5rem'],
    },
    extend: {},
  },
  plugins: [require('preline/plugin')],
};
