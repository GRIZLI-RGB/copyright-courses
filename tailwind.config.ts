import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./app/**/*.tsx"],
	theme: {
		transitionDuration: {
			DEFAULT: "200ms",
		},
		extend: {
			boxShadow: {
				soDark: "6px 6px 8px rgba(0, 0, 0, 0.05)",
			},
			fontFamily: {
				inter: ["var(--font-inter)", "sans-serif"],
				openSans: ["var(--font-open-sans)", "sans-serif"],
				gayathri: ["var(--font-gayathri)", "sans-serif"],
				notoSans: ["var(--font-noto-sans)", "sans-serif"],
			},
			colors: {
				mainDark: "#353535",
				accent: "#3c6e71",
				positive: "#1EAF5A",
				neutral: "#979897",
				light: "#D9D9D9",
				sea: "#284B63",
				negative: "#CB4040",
				veryNegative: "#FF0000",
				darkWhite: "#F6F6F6",
			},
			letterSpacing: {
				button: "0.01em",
			},
			backgroundImage: {
				emerald: "linear-gradient(93deg, #1EAF5A 0.29%, #129E4D 100%)",
			},
		},
	},
	plugins: [],
};
export default config;
