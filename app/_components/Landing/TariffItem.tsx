import Image from "next/image";

type TTariffItem = {
	img: string;
	title: string;
	old_price: number;
	new_price: number;
	advantages: string[];
	recommended?: boolean;
	onClick: (title: string) => void;
};

export default function TariffItem({
	img,
	title,
	old_price,
	new_price,
	advantages,
	recommended = false,
	onClick,
}: TTariffItem) {
	return (
		<div className="border border-light rounded-[20px] text-center relative pt-[35px] pb-[30px] w-[325px] top-0 transition-all duration-[350ms] hover:-top-2.5">
			{recommended && (
				<Image
					className="absolute top-0 right-0"
					src="/img/landing/tariffs/recommended.svg"
					alt="Рекомендуем"
					width="120"
					height="87"
				/>
			)}
			<div className="rounded-full bg-accent w-[100px] h-[100px] flex items-center justify-center mx-auto">
				<Image
					src={`/img/landing/tariffs/${img}.svg`}
					alt={title}
					width="64"
					height="64"
				/>
			</div>
			<h6 className="bg-accent mt-[30px] mb-5 font-bold text-[24px] leading-[120%] text-white py-[19px]">
				{title}
			</h6>
			<div className="flex-middle gap-2.5">
				<div className="font-bold text-[24px] leading-[46px] text-neutral relative before:absolute before:bg-neutral before:h-[3px] before:right-0 before:top-1/2 before:-translate-y-1/2 before:left-0">
					{old_price}₽
				</div>
				<div className="font-bold text-[34px] leading-[46px] text-positive">
					{new_price}₽
				</div>
			</div>
			<ul className="mt-5 mb-[30px]">
				{advantages.map((advantage, index) => (
					<li
						className="relative leading-[22px] pb-2 mb-2 last:mb-0 after:absolute after:h-[1px] after:bg-light after:left-0 after:right-0 after:bottom-0"
						key={index}>
						{advantage}
					</li>
				))}
			</ul>
			<button
				className="font-bold text-[20px] px-10 py-[15px] bg-accent rounded-[8px] text-white hover:opacity-75 leading-[100%]"
				onClick={() => {
					onClick(title);
					window.location.href = "#start";
				}}>
				Выбрать
			</button>
		</div>
	);
}
