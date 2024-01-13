"use client";

import clsx from "clsx";
import Link from "next/link";

import Logo from "../Logo";
import {
	ArrowsPointingInIcon,
	Cog6ToothIcon,
	CurrencyDollarIcon,
	DocumentTextIcon,
	FolderIcon,
	HomeIcon,
	NewspaperIcon,
	PuzzlePieceIcon,
	UsersIcon,
} from "@heroicons/react/20/solid";
import { usePathname } from "next/navigation";

const tabs = [
	{
		text: "Главная",
		link: "home",
		icon: <HomeIcon className={"w-5 h-5"} />,
	},
	{
		text: "Новости",
		link: "news",
		icon: <NewspaperIcon className={"w-5 h-5"} />,
	},
	{
		text: "Пользователи",
		link: "users",
		icon: <UsersIcon className={"w-5 h-5"} />,
	},
	{
		text: "Курсы",
		link: "courses",
		icon: <FolderIcon className={"w-5 h-5"} />,
	},
	{
		text: "Уроки",
		link: "lessons",
		icon: <DocumentTextIcon className={"w-5 h-5"} />,
	},
	{
		text: "Тренажеры",
		link: "trainers",
		icon: <PuzzlePieceIcon className={"w-5 h-5"} />,
	},
	{
		text: "Финансы",
		link: "finances",
		icon: <CurrencyDollarIcon className={"w-5 h-5"} />,
	},
	{
		text: "Настройки",
		link: "settings",
		icon: <Cog6ToothIcon className={"w-5 h-5"} />,
	},
];

export default function Menu() {
	const pathname = usePathname();

	return (
		<aside className="fixed top-0 left-0 h-full min-h-screen bg-white w-[260px] text-center border-r border-light/50">
			<Logo height={74} width={74} />
			<nav>
				{tabs.map((tab) => (
					<Link
						key={tab.link}
						className={clsx(
							"flex-middle uppercase gap-2 h-[50px] text-[16px] font-bold relative",
							tab.link === pathname.split("/").at(-1)
								? "cursor-default"
								: "hover:bg-light/40 cursor-pointer",
						)}
						href={`/admin-panel/${tab.link}`}
					>
						{tab.link === pathname.split("/").at(-1) && (
							<div
								className={
									"h-9 w-0.5 bg-mainDark rounded-r-md absolute left-0 top-1/2 -translate-y-1/2"
								}
							/>
						)}
						{tab.icon}
						{tab.text}
					</Link>
				))}
				<ArrowsPointingInIcon
					className={"w-5 h-5 mx-auto absolute bottom-5 left-0 right-0 cursor-pointer"}
				/>
			</nav>
		</aside>
	);
}
