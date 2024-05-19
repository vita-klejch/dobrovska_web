// import img from "./public/chevron.svg";
// const src = img.src;

/** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
   theme: {
      // container: {
      //   padding: "2rem",
      //   width: "100%",
      // },
      extend: {
         colors: {
            // withOpacity: "rgba(255, 255, 255, 0.9)",
            withOpacity: "rgba(37, 50, 92, 0.9)",
            // primary: "rgb(37, 50, 92)", // dark blue
            // primary: "#2563eb", // light blue
            // primary: "#334155", // dark green
            // primary: "#1d3734", // Ivca green
            primary: "#ceb8aa",
            // secondary: "#1b5f57", //dark green
            secondary: "#144a44", //dark green
            primaryText: "rgb(241, 245, 249)", // light color/almost white
            // primaryText: "red", // light color/almost white
            secondaryText: "black", // dark color
         },
         // content: {
         //   // chevron: 'url("/chevron.svg")',
         //   chevron: 'url("/chevron_circle.svg")',
         // },
         // backgroundImage: {
         //   test: 'url("/chevron.svg")',
         // },
         spacing: {
            layout: "3rem",
            layoutMax: "1000px",
            textWidth: "500px",
         },
      },
   },
   plugins: [],
};
