"use client";

import { useDispatch } from "react-redux";

import TariffItem from "./TariffItem";
import Title from "./Title";
import { setCurrentTariff } from "@/app/_store/slices/landing.slice";
import { TTariff } from "@/app/types";

export default function Tariffs({ data }: { data: TTariff[] }) {
	const dispatch = useDispatch();

	return (
		<section className="pt-40" id="rates">
			<Title>Пакеты обучения</Title>
			<div className="mt-[90px] flex items-center justify-center gap-[45px]">
				{data.map((tariff, index) => (
					<div
						className={
							index === 0
								? "order-[0]"
								: index === 1
								? "order-[2]"
								: "order-[1]"
						}>
						<TariffItem
							img={tariff.icon}
							title={tariff.name}
							old_price={Number((tariff.price * 1.8).toFixed(0))}
							new_price={tariff.price}
							advantages={tariff.advantages}
							onClick={(arg: string) =>
								dispatch(setCurrentTariff(arg))
							}
							recommended={index === 2}
						/>
					</div>
				))}
			</div>
		</section>
	);
}
