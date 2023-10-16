import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#1D5B79",
                secondary: "#2ec0bb",
                heading: "#233036",
                body: "#667074",
                light: "#f6f6f6",
                yellowLight: "#fff3d9",
                greenLight: "#ccf0ee",
                purpleLight: "#aea3e1",
            },
            animation: {
                "slide-in-right":
                    "slide-in-right 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
            },
            keyframes: {
                "slide-in-right": {
                    "0%": {
                        transform: "translateX(1000px)",
                        opacity: "0",
                    },
                    to: {
                        transform: "translateX(0)",
                        opacity: "1",
                    },
                },
            },
        },
    },
    plugins: [],
};
export default config;
