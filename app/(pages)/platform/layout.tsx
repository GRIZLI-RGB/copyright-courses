import { Metadata } from "next";

import Header from "@/app/_components/Platform/Header";
import Menu from "@/app/_components/Platform/Menu";

export const metadata: Metadata = {
	title: "Платформа обучения копирайтингу «Сиди, пиши»",
};

export default function PlatformLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="bg-darkWhite min-h-screen">
			<Header />
			<Menu />
			<section className="pl-[260px] pt-[74px]">
				<div className="max-w-[1450px] p-[50px]">{children}</div>
			</section>
		</div>
	);
}
