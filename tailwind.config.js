/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lovesunshine: ['lovesunshine', 'sans-serif'],
        barlow:['Barlow', 'sans-serif'],
        Inter:['Inter', 'sans-serif'],
      },
      'testimonial-bg': "url('/public/testimonial-background.jpg')"
    }
  }
};
