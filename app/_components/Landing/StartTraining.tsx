"use client";

import Image from "next/image";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TStoreState } from "@/app/_store";
import { setCurrentTariff } from "@/app/_store/slices/landing.slice";

export default function StartTraining() {
	const currentTariff = useSelector(
		(state: TStoreState) => state.landing.value,
	);
	const dispatch = useDispatch();

	const [selectedTariff, setSelectedTariff] = useState(false);

	return (
		<section className="bg-mainDark relative mt-40" id="start">
			<p className="opacity-75 absolute top-0 left-0 right-0 bottom-0 flex-middle font-extrabold text-[180px] text-black/10 uppercase">
				Я — копирайтер!
			</p>
			<div className="container flex-middle gap-[85px]">
				<div className="relative">
					<div className="bg-black/35 blur-[50px] rounded-full w-[420px] h-[450px] -left-[5px] bottom-0 absolute" />
					<Image
						className="absolute -left-10 mix-blend-darken"
						src="/img/landing/start-training/boy.svg"
						width="546"
						height="546"
						alt="Мальчик"
					/>
					<Image
						className="relative z-[1] block"
						src="/img/landing/start-training/boy.svg"
						width="546"
						height="546"
						alt="Мальчик"
					/>
				</div>
				<form
					className="relative flex flex-col max-w-[300px] mr-40"
					action="">
					<div className="relative">
						<Image
							className="absolute left-[14px] top-1/2 -translate-y-1/2"
							src="/icons/email--white.svg"
							alt="Электронная почта"
							width="26"
							height="26"
						/>
						<input
							className="pr-5 pl-[46px] w-full h-11 border border-light bg-transparent text-white placeholder:text-light rounded-full"
							type="email"
							placeholder="Электронная почта"
						/>
					</div>
					<div
						className="h-11 border border-light rounded-full mt-2 cursor-pointer relative"
						onClick={() => setSelectedTariff(!selectedTariff)}>
						<div className="flex items-center h-full relative">
							<Image
								className="absolute left-[14px]"
								src="/icons/cart--white.svg"
								alt="Выбранный тариф"
								width="26"
								height="26"
							/>
							<p
								className="text-light pr-5 pl-[46px]"
								id="start-tariff"
								style={{
									color: currentTariff ? "#fff" : "",
								}}>
								{currentTariff
									? `«${currentTariff}»`
									: "Пакет обучения"}
							</p>
							<Image
								className="absolute right-[14px]"
								src="/icons/arrow-down.svg"
								alt="Открыть выбор доступных тарифов"
								width="20"
								height="20"
								style={{
									transform: `rotate(${
										selectedTariff ? "-180deg" : "0deg"
									})`,
									transition: "all .2s",
								}}
							/>
						</div>
						{selectedTariff && (
							<ul className="absolute p-5 -bottom-2 translate-y-full rounded-[6px] left-0 right-0 bg-white z-30">
								{[
									"Быстрый старт",
									"Всё включено!",
									"Серьезный настрой",
								].map((tariff, index) => (
									<li
										className="mb-2 last:mb-0 hover:opacity-75 transition-opacity"
										key={index}
										onClick={() =>
											dispatch(setCurrentTariff(tariff))
										}>
										{tariff}
									</li>
								))}
							</ul>
						)}
					</div>
					<button className="font-semibold leading-[25px] bg-white rounded-full p-2.5 mt-4 hover:opacity-70">
						Получить доступ
					</button>
					<p className="text-[13px] leading-[125%] text-white mt-2">
						* на указанную почту придет инструкция по активации
						личного кабинета
					</p>
				</form>
			</div>
		</section>
	);
}
