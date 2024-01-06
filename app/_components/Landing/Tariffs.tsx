"use client";

import { useDispatch } from "react-redux";

import TariffItem from "./TariffItem";
import Title from "./Title";
import { setCurrentTariff } from "@/app/_store/slices/landing.slice";

export default function Tariffs() {
	const dispatch = useDispatch();

	return (
		<section className="pt-40" id="rates">
			<Title>Пакеты обучения</Title>
			<div className="mt-[90px] flex items-center justify-center gap-[45px]">
				<TariffItem
					img="clock"
					title="Быстрый старт"
					old_price={549}
					new_price={499}
					advantages={[
						"Доступ к стандартным урокам",
						"24 часа в онлайн-тренажерах",
						"Оперативная поддержка",
					]}
					onClick={(arg: string) => dispatch(setCurrentTariff(arg))}
				/>
				<TariffItem
					img="crown"
					title="Всё включено!"
					old_price={8499}
					new_price={4999}
					advantages={[
						"Доступ ко всем урокам",
						"Доступ к онлайн-тренажеру",
						"Доступ к базе знаний",
						"Гарантия трудоустройства",
						"VIP-поддержка",
					]}
					recommended
					onClick={(arg: string) => dispatch(setCurrentTariff(arg))}
				/>
				<TariffItem
					img="path"
					title="Серьезный настрой"
					old_price={1290}
					new_price={999}
					advantages={[
						"Доступ ко всем урокам",
						"Доступ к онлайн-тренажеру",
						"Доступ к базе знаний",
						"Оперативная поддержка",
					]}
					onClick={(arg: string) => dispatch(setCurrentTariff(arg))}
				/>
			</div>
		</section>
	);
}
