import Title from "./Title";

export default function About() {
	return (
		<section className="pt-40 relative" id="about">
			<div className="container">
				<Title>О курсе</Title>
				<div className="max-w-[814px] mx-auto flex flex-col gap-3">
					<div className="mt-[90px] flex gap-[30px] justify-between">
						<span className="font-gayathri font-bold text-[128px] leading-[100%]">
							1
						</span>{" "}
						<p className="text-[20px] leading-[160%]">
							Создан для тех, кто{" "}
							<span className="font-bold">только начинает</span>{" "}
							заниматься копирайтингом и для тех, кто{" "}
							<span className="font-bold">хочет прокачать</span>{" "}
							свои навыки в этой сфере
						</p>
					</div>
					<div className="flex flex-row-reverse gap-[30px] justify-between">
						<span className="font-gayathri font-bold text-[128px] leading-[100%]">
							2
						</span>{" "}
						<p className="text-[20px] leading-[160%]">
							Интерактивные{" "}
							<span className="font-bold">тренажеры</span>,
							большая{" "}
							<span className="font-bold">база знаний</span>,{" "}
							<span className="font-bold">помощь</span> опытных
							авторов — малая часть того, что ждет вас после
							покупки курса
						</p>
					</div>
					<div className="flex gap-[30px] justify-between">
						<span className="font-gayathri font-bold text-[128px] leading-[100%]">
							3
						</span>{" "}
						<p className="text-[20px] leading-[160%]">
							Ну и конечно же,{" "}
							<span className="font-bold">гарантии</span>! Над
							каждым обучающимся закрепляется куратор, который
							доводит до выполнения первой боевой задачи
						</p>
					</div>
				</div>
			</div>
			<img
				className="absolute top-0 left-0 -z-[1]"
				src="/img/landing/decor/1.svg"
				alt=""
			/>
			<img
				className="absolute top-0 right-0 -translate-y-1/2 -z-[1]"
				src="/img/landing/decor/2.svg"
				alt=""
			/>
		</section>
	);
}
