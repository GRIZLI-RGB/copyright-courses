import Image from "next/image";

export default function Hero() {
	return (
		<section className="relative w-screen h-screen">
			<div className="flex items-center justify-between h-full container">
				<div className="max-w-[700px]">
					<h6 className="text-accent mb-1.5 font-bold text-[22px]">
						ПИСАТЬ ТЕКСТА В 2023 ГОДУ — ИНТЕРЕСНО И ПРИБЫЛЬНО!
					</h6>
					<h1 className="text-[48px] leading-[120%] font-bold">
						Станьте копирайтером всего за 12 уроков
					</h1>
					<p className="mt-4 mb-6 text-[20px] leading-[160%]">
						Онлайн-курсы по копирайтингу от «Сиди, пиши» — это
						десятки полезных уроков, интерактивные тренажеры для
						практики и бесценный опыт от действительно крутых
						наставников
					</p>
					<a
						className="tracking-button px-10 py-3 border border-mainDark rounded-full font-inter hover:text-white hover:bg-mainDark inline-block"
						href="#about">
						Подробнее
					</a>
				</div>
				<Image
					src="/img/landing/copywriter.svg"
					alt="Копирайтер за работой"
					width="636"
					height="636"
				/>
				<Image
					className="absolute bottom-[5vh] mx-auto left-0 right-0 animate-bounce"
					src="/img/landing/mouse.svg"
					alt="Листайте дальше"
					width="48"
					height="48"
				/>
			</div>
		</section>
	);
}
