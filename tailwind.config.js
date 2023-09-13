/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      gray: "#777",
      white: "#fff",
      black: "#333",
      backdrop: "rgba(0, 0, 0, 0.676)",
      primaryGreen: "#55C57A",
      gradient: "linear-gradient(90deg, #7ED56F 0%, #28B485 100%)",
    },
    fontSize: {
      xs: "1.2rem",
      sm: "1.6rem",
      base: "1.9rem",
      xl: "4.2rem",
      "2xl": "7.2rem",
    },
    extend: {
      boxShadow: {
        imagesShadow: "0 18px 48px 0px rgba(0,0,0, 0.40)",
      },
      backgroundImage: {
        navigation: "linear-gradient(120deg, transparent 0%, transparent 50%, #fff 50%)",
        menu: "radial-gradient(#7ed56f, #28b485)",
        orange: "linear-gradient(to right bottom, #ffb900, #ff7730)",
        green: "linear-gradient(to right bottom, #7ed56f, #28b485)",
        blue: "linear-gradient(to right bottom, #2998ff, #5643fa)",

        "hero-bg":
          "linear-gradient(163deg, rgba(126, 213, 111, 0.80) 0%, rgba(40, 180, 133, 0.80) 100%), url(./src/assets/images/hero.jpg)",

        cardGreen:
          "linear-gradient(to right bottom, #2998ff, #28b423),url(./src/assets/images/nat-8.jpg)",
        cardOrange:
          "linear-gradient(to right bottom, #ffb900, #ff7730),url(./src/assets/images/nat-5.jpg)",
        cardBlue:
          "linear-gradient(to right bottom, #2998ff, #5643fa),url(./src/assets/images/nat-7.jpg)",

        gradient: "linear-gradient(90deg, #7ED56F 0%, #28B485 100%)",
        "section-bg":
          "linear-gradient(163deg, rgba(126, 213, 111, 0.80) 0%, rgba(40, 180, 133, 0.80) 100%), url(./src/assets/images/nat-4.jpg)",

        gradient: "linear-gradient(90deg, #7ED56F 0%, #28B485 100%)",
        form: "linear-gradient(105deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.9) 50%, transparent 50%),url(./src/assets/images/nat-10.jpg)",
      },
    },
  },
  plugins: [],
};
