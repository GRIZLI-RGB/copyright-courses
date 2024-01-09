import type { Metadata } from "next";
import { Gayathri, Inter, Noto_Sans, Open_Sans } from "next/font/google";

import "./_styles/index.scss";
import { Providers } from "@/app/_utils/providers";

const inter = Inter({
	subsets: ["cyrillic"],
	weight: ["400", "600", "700"],
	variable: "--font-inter",
});

const open_sans = Open_Sans({
	subsets: ["cyrillic"],
	weight: ["400", "500", "600", "700", "800"],
	variable: "--font-open-sans",
});

const gayathri = Gayathri({
	subsets: ["latin"],
	weight: "700",
	variable: "--font-gayathri",
});

const noto_sans = Noto_Sans({
	subsets: ["cyrillic"],
	weight: ["300", "400", "500", "600", "700", "800"],
	variable: "--font-noto-sans",
});

export const metadata: Metadata = {
	title: "Курсы копирайтинга — начни зарабатывать на текстах прямо сейчас!",
	icons: {
		icon: [
			{
				media: '(prefers-color-scheme: dark)',
				url: '/favicon-light.ico',
				href: '/favicon-light.ico',
			},
			{
				media: '(prefers-color-scheme: light)',
				url: '/favicon-dark.ico',
				href: '/favicon-dark.ico',
			},
		],
	},
};

export default function RootServerLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ru">
			<body
				className={`${inter.variable} ${open_sans.variable} ${gayathri.variable} ${noto_sans.variable} font-openSans`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
