"use client";

import { useState } from "react";

import Heading from "./Heading";

export default function Test({
	data,
}: {
	data: { id: number; question: string; answers: string[]; right_answer: string }[];
}) {
	const [questionIndex, setQuestionIndex] = useState(0);

	return (
		<div className="ml-[50px]">
			<Heading variant="h2">Тестирование</Heading>
			<div className="mt-2.5 relative">
				<div className="absolute right-0 font-bold text-light top-0 -translate-y-full">
					{questionIndex + 1} из {data.length}
				</div>
				<h6 className="text-[18px]">
					{questionIndex + 1}. {data[questionIndex].question}
				</h6>
				<ol className="flex flex-col gap-2 mt-3 addListMarkersTypeRussianAlphabet">
					{data[questionIndex].answers.map(answer => (
						<li key={answer} className="bg-mainDark rounded-full text-white font-medium px-4 py-[5px] cursor-pointer hover:bg-mainDark/80 transition-colors">
							{answer}
						</li>
					))}
				</ol>
			</div>
		</div>
	);
}
