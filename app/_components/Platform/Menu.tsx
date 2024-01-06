import clsx from "clsx";
import Link from "next/link";

import Logo from "../Logo";

const tabs = [
	{
		text: "Новости",
		link: "news",
	},
	{
		text: "Мой профиль",
		link: "profile",
	},
	{
		text: "Уроки",
		link: "lessons",
	},
	{
		text: "Тренажеры",
		link: "trainers",
	},
	{
		text: "Финансы",
		link: "finances",
	},
];

export default function Menu() {
	return (
		<aside className="fixed top-0 left-0 h-full min-h-screen bg-white w-[260px] text-center border-r border-light/50">
			<Logo height={74} width={74} />
			<nav>
				{tabs.map(tab => (
					<Link
						key={tab.link}
						className={clsx(
							"flex-middle uppercase gap-2 h-[50px] text-[18px] font-medium",
							tab.link === "news"
								? "bg-mainDark text-white"
								: "hover:bg-light/40",
						)}
						href={`/platform/${tab.link}`}>
						<img src={`/icons/${tab.link}.svg`} alt={tab.text} />
						{tab.text}
					</Link>
				))}
			</nav>
			<button className="h-[50px] flex-middle gap-2 text-[18px] uppercase font-medium text-negative w-full hover:bg-light/40">
				<img src="/icons/trash-can.svg" alt="Корзина" />
				Удалить аккаунт
			</button>
			<div className="p-[15px] left-0 right-0 absolute bottom-0">
				<button className="h-[50px] flex-middle w-full bg-emerald text-white rounded-[6px] text-[18px] font-bold hover:brightness-110">
					Стать партнером!
				</button>
			</div>
		</aside>
	);
}