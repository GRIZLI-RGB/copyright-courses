import Header from "@/app/_components/AdminPanel/Header";
import Menu from "@/app/_components/AdminPanel/Menu";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Админ-панель «Сиди, пиши»",
};

export default function AdminPanelLayout({
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
