import Block from "@/app/_components/Platform/Block";
import LessonCard from "@/app/_components/Platform/LessonCard";

export default function PlatformLessonsPage() {
	return (
		<section className="max-w-[1350px] ml-auto flex gap-[50px]">
			<Block title="Траектория обучения">
				<div className="flex items-center gap-[18px] my-[50px]">
					<div className="bg-[#dddddd] rounded-full h-3 grow">
						<div
							className="bg-[#284B63] rounded-full h-full"
							style={{
								width: `${100 / 3}%`,
							}}
						/>
					</div>
					<p>1 из 3 пройдено</p>
				</div>
				<div className="flex flex-col gap-[30px]">
					<LessonCard
						title="#1 Инструменты современного копирайтера"
						description="Простыми словами об актуальных инструментах для современного копирайтера: Google Docs, Google Sheets и другое."
						complete
					/>
					<LessonCard
						title="#1 Инструменты современного копирайтера"
						description="Простыми словами об актуальных инструментах для современного копирайтера: Google Docs, Google Sheets и другое."
					/>
					<LessonCard
						title="#1 Инструменты современного копирайтера"
						description="Простыми словами об актуальных инструментах для современного копирайтера: Google Docs, Google Sheets и другое."
					/>
				</div>
			</Block>
			<Block title="Статистика">
				<h6 className="text-[18px] text-light font-semibold mb-0.5 mt-[30px]">Уроки</h6>
				<ul className="flex flex-col gap-1.5">
					{[
						{
							label: "Текущий пакет обучения",
							value: "«Быстрый старт»",
						},
						{
							label: "Обучение завершено на",
							value: "86%",
						},
						{
							label: "Пройдено уроков",
							value: 16,
						},
						{
							label: "Осталось уроков",
							value: 4,
						},
					].map(({ label, value }) => (
						<li key={label}>
							{label}: <span className="font-bold">{value}</span>
						</li>
					))}
				</ul>
				<h6 className="text-[18px] text-light font-semibold mb-0.5 mt-[30px]">Тренажеры</h6>
				<ul className="flex flex-col gap-1.5">
					{[
						{
							label: "Пройдено тренажеров",
							value: 3,
						},
						{
							label: "Осталось пройти тренажеров",
							value: 5,
						},
						{
							label: "Навыки",
							value: ["скорость печати", "скорость печати", "скорость печати", "скорость печати"],
						},
					].map(({ label, value }) => (
						<li key={label}>
							{Array.isArray(value) ? (
								<div className="inline-flex items-center gap-1.5 flex-wrap justify-start">
									<span>{label}:</span>
									{value.map((item, index) => (
										<span
											className="bg-[#BFBFBF] text-white rounded-full px-[14px] text-[13px] py-0.5 leading-[150%] font-semibold inline-block"
											key={index}>
											{item}
										</span>
									))}
								</div>
							) : (
								<>
									{label}: <span className="font-bold">{value}</span>
								</>
							)}
						</li>
					))}
				</ul>
			</Block>
		</section>
	);
}
