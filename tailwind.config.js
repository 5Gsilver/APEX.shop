/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ src 안의 모든 React 파일 포함
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
