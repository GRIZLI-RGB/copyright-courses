"use client";

import type { Metadata } from "next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const metadata: Metadata = {
	title: "Ошибка 404: запрашиваемая страница не существует",
};

export default function NotFound() {
	const [seconds, setSeconds] = useState<number>(10);

	const { push } = useRouter();

	useEffect(() => {
		if (seconds === 1) {
			push("/");
		}
		setTimeout(() => {
			setSeconds(seconds => seconds - 1);
		}, 1000);
	}, [seconds, push]);

	return (
		<section className="w-screen h-screen p-[50px] bg-[#f6f6f6]">
			<div className="text-center rounded-[20px] border border-light bg-white flex-middle flex-col w-full h-full shadow-soDark">
				<p className="font-bold text-[36px]">
					Ошибка 404 (страница не найдена)
				</p>
				<p className="mt-3">
					Через {seconds} секунд вы будете перенаправлены на главную
					страницу
				</p>
			</div>
		</section>
	);
}
