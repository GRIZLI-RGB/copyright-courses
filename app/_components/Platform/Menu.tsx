"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import Logo from "../Logo";
import ModalWindow from "../ModalWindow";

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
		text: "База знаний",
		link: "knowledgebase",
	},
	{
		text: "Финансы",
		link: "finances",
	},
];

export default function Menu() {
	const pathname = usePathname();

	const [accountDeleteTrigger, setAccountDeleteTrigger] = useState(false);
	const [bePartnerTrigger, setBePartnerTrigger] = useState(false);

	return (
		<aside className="fixed top-0 left-0 h-full min-h-screen bg-white w-[260px] text-center border-r border-light/50 z-[10]">
			<Logo height={74} width={74} />
			<nav>
				{tabs.map(tab => (
					<Link
						key={tab.link}
						className={clsx(
							"flex-middle uppercase gap-2 h-[50px] text-[18px] font-medium relative",
							tab.link === "news"
								? "bg-mainDark text-white after:bg-white"
								: "hover:bg-light/40 after:bg-mainDark",
							{
								"after:absolute after:left-0 after:w-1 after:h-2/3 after:rounded-r-md": pathname
									.split("/")
									.includes(tab.link),
							},
						)}
						href={`/platform/${tab.link}`}>
						<img src={`/icons/${tab.link}.svg`} alt={tab.text} />
						{tab.text}
					</Link>
				))}
			</nav>
			<button
				className="h-[50px] flex-middle gap-2 text-[18px] uppercase font-medium text-negative w-full hover:bg-light/40"
				onClick={() => setAccountDeleteTrigger(true)}>
				<img src="/icons/trash-can.svg" alt="Корзина" />
				Удалить аккаунт
			</button>
			<div className="p-[15px] left-0 right-0 absolute bottom-0">
				<button
					className="h-[50px] flex-middle w-full bg-emerald text-white rounded-[6px] text-[18px] font-bold hover:brightness-110"
					onClick={() => setBePartnerTrigger(!bePartnerTrigger)}>
					Стать партнером!
				</button>
			</div>
			<ModalWindow trigger={accountDeleteTrigger} setTrigger={setAccountDeleteTrigger}>
				<h6 className="text-[#D25757] uppercase text-[28px] font-medium text-center">Удаление аккаунта</h6>
				<p className="mt-[22px] mb-7 text-center max-w-[390px]">
					Вы уверены, что хотите удалить аккаунт? Это действие нельзя отменить. Аккаунт будет удален без
					возможности восстановления, а купленные курсы возврату не подлежат!
				</p>
				<div className="gap-4 flex items-center justify-evenly px-4">
					<button
						className="w-full h-11 hover:opacity-80 text-[18px] font-semibold rounded-full text-white bg-[#D25757]"
						onClick={() => setAccountDeleteTrigger(true)}>
						Подтвердить
					</button>
					<button
						className="w-full h-11 hover:opacity-80 text-[18px] font-semibold rounded-full text-[#D25757] border border-[#D25757]"
						onClick={() => setAccountDeleteTrigger(false)}>
						Отменить
					</button>
				</div>
			</ModalWindow>
			<ModalWindow trigger={bePartnerTrigger} setTrigger={setBePartnerTrigger}>
				<h6 className="uppercase text-[28px] font-medium text-center">Партнерство</h6>
				<p className="mt-[22px] mb-7 text-center max-w-[390px]">
					К сожалению, сейчас функция партнерства недоступна для всех пользователей. Следите за новостями платформы и ждите обновления в ближайшее время!
				</p>
				<div className="gap-4 flex items-center justify-evenly px-4">
					<button
						className="w-full h-11 hover:opacity-80 text-[18px] font-semibold rounded-full text-mainDark border border-mainDark"
						onClick={() => setBePartnerTrigger(false)}>
						Понятно
					</button>
				</div>
			</ModalWindow>
		</aside>
	);
}
