/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "banner-bg":
          "linear-gradient(90deg, rgba(20,168,0,0.1500175070028011) 0%, rgba(20,168,0,0.3847514005602241) 100%), url('https://i.ibb.co/4dG23xY/corporate-management-strategy-solution-branding-concept.jpg')",
        "banner-text-gradient": "linear-gradient(90deg, rgba(13,13,13,0.8547794117647058) 22%, rgba(20,168,0,0) 100%)",
      },
      colors: {
        "action-primary-clr": "rgb(20,168,0)",
      },
      fontFamily: {
        Roboto: "'Roboto', sans-serif",
      }
    },
  },
  plugins: [require("daisyui")],
};
