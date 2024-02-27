import Image from "next/image";

export default function Info({
	date_created,
	reading_time,
	difficult,
}: {
	date_created: Date;
	reading_time: string;
	difficult: number;
}) {
	return (
		<div className="flex items-center gap-[45px]">
			<div className="flex items-center gap-1.5">
				<Image src="/icons/calendar.svg" alt="Дата публикации статьи" width={26} height={26} />
				<span className="font-medium">{date_created.toLocaleDateString()}</span>
			</div>
			<div className="flex items-center gap-1.5">
				<span>Сложность изучения:</span>
				{[0, 0, 0]
					.map((_, index) => +(index + 1 <= difficult))
					.map((item, index) => (
						<Image
							key={index}
							width={22}
							height={22}
							src={`/icons/star--${item ? "fill" : "unfill"}.svg`}
							alt="Сложность"
						/>
					))}
			</div>
			<div className="flex items-center gap-1.5">
				<span>Время прочтения:</span>
				<span className="font-bold">3-5 минут</span>
			</div>
		</div>
	);
}
