import News from "@/app/_components/Platform/News";

export default function PlatformNewsPage() {
	return (
		<section className="max-w-[1200px] ml-auto flex flex-col gap-10">
			<News
				tags={[
					{
						text: "Красный тег",
						background: "red",
					},
				]}
				title="Скидки до 30% на все пакеты обучения"
				image_url="https://rabkor.ru/wp-content/uploads/2019/12/d59ddc8ce75c2b7861d6cbadf09fa40d.jpg"
				created_date={new Date()}>
				<p>
					В честь открытия даем возможность получить все пакеты обучения со скидкой до 30%! Никаких переплат,
					доплат и дополнительных взносов — всё зеркально чисто. Успейте приобрести доступ уже сегодня и
					получите гарантию трудоустройства в подарок!
				</p>
			</News>
			<News
				image_url="https://rabkor.ru/wp-content/uploads/2019/12/d59ddc8ce75c2b7861d6cbadf09fa40d.jpg"
				tags={[
					{
						text: "Зеленый тег",
						background: "green",
					},
				]}
				title="Скидки до 30% на все пакеты обучения"
				created_date={new Date()}>
				<p>
					В честь открытия даем возможность получить все пакеты обучения со скидкой до 30%! Никаких переплат,
					доплат и дополнительных взносов — всё зеркально чисто. Успейте приобрести доступ уже сегодня и
					получите гарантию трудоустройства в подарок!
				</p>
			</News>
			<News
				image_url="https://rabkor.ru/wp-content/uploads/2019/12/d59ddc8ce75c2b7861d6cbadf09fa40d.jpg"
				tags={[
					{
						text: "Зеленый тег",
						background: "green",
					},
					{
						text: "Финансы",
						background: "green",
					},
				]}
				title="Скидки до 30% на все пакеты обучения"
				created_date={new Date()}>
				<p>
					В честь открытия даем возможность получить все пакеты обучения со скидкой до 30%! Никаких переплат,
					доплат и дополнительных взносов — всё зеркально чисто. Успейте приобрести доступ уже сегодня и
					получите гарантию трудоустройства в подарок!
				</p>
			</News>
		</section>
	);
}