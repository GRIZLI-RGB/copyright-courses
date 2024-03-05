"use client";

import Image from "next/image";

import ModalWindowAvailableSoon from "./ModalWindowAvailableSoon";
import { useState } from "react";

type TTrainerCard = {
	icon: string;
	title: string;
	description: string;
	skills: string[];
	difficult: 1 | 2 | 3;
};

export default function TrainerCard({ icon, title, description, skills, difficult }: TTrainerCard) {
	const [triggerStart, setTriggerStart] = useState(false);

	return (
		<div className="border border-bg-mainDark/50 rounded-2xl p-[25px] pb-[30px] flex flex-col items-center max-w-[352px]">
			<Image src={`/icons/${icon}.svg`} alt={title} width={79} height={79} />
			<h6 className="text-center text-[24px] font-bold mt-2 uppercase">{title}</h6>
			<p className="mt-2.5 mb-2 leading-[150%] text-center">{description}</p>
			<ul className="inline-flex gap-1.5 items-center justify-start">
				<li className="font-bold text-accent">Навыки:</li>
				{skills.map(skill => (
					<li className="text-[13px] font-semibold text-white bg-[#bfbfbf] rounded-full px-3" key={skill}>
						{skill}
					</li>
				))}
			</ul>
			<ul className="inline-flex gap-1.5 items-center justify-start mt-1">
				<li className="font-bold text-accent">Сложность:</li>
				{[0, 0, 0]
					.map((_, index) => +(index + 1 <= difficult))
					.map((item, index) => (
						<li key={index}>
							<Image
								width={22}
								height={22}
								src={`/icons/star--${item ? "fill" : "unfill"}.svg`}
								alt="Сложность"
							/>
						</li>
					))}
			</ul>
			<button
				className="bg-mainDark text-center h-11 max-w-[270px] text-white rounded-full w-full font-semibold text-[18px] hover:opacity-75 mt-7 pb-0.5
            "
				onClick={() => setTriggerStart(true)}>
				Начать
			</button>
			<ModalWindowAvailableSoon trigger={triggerStart} setTrigger={setTriggerStart} />
		</div>
	);
}
