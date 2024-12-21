/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Roboto", "ui-sans-serif", "system-ui"], // Default sans font
                urbanist: ["Urbanist", "ui-sans-serif", "system-ui"],
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            colors: {},
            backgroundImage: {
                "f54f35-to-transparent":
                    "linear-gradient(to right, #FEF1EF, transparent)",
                "custom-gradient":
          "linear-gradient(to bottom right, rgba(245, 219, 53, 0.8) 5%, rgba(245, 79, 53, 0.8) 30%, rgba(207, 23, 23, 0.8) 75%, rgba(192, 12, 242, 0.8) 100%)",
      
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
