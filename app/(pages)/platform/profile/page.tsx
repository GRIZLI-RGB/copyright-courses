import Image from "next/image";

import Block from "@/app/_components/Platform/Block";

export default function PlatformProfilePage() {
	return (
		<section className="max-w-[1350px] ml-auto grid gap-12">
			<Block>
				<div className="flex items-start gap-7">
					<div>
						<Image
							className="rounded-full"
							src="/img/avatar.jpg"
							width={117}
							height={117}
							alt="Аватар пользователя"
						/>
						<p className="text-[#56C73A] mt-3 mb-2.5 font-medium text-center flex-middle">
							<span className="bg-[#56C73A] rounded-full w-[5px] h-[5px] mr-1 inline-block" />
							Online
						</p>
						{/* <div className="flex items-center justify-between">
							<a href="#">
								<Image
									className="hover:brightness-50 transition-all inline-block"
									width={32}
									height={32}
									src="/icons/vk.svg"
									alt="Вконтакте"
								/>
							</a>
							<a href="#">
								<Image
									className="hover:brightness-50 transition-all inline-block"
									width={32}
									height={32}
									src="/icons/tg.svg"
									alt="Телеграмм"
								/>
							</a>
							<a href="#">
								<Image
									className="hover:brightness-50 transition-all inline-block"
									width={32}
									height={32}
									src="/icons/whatsapp.svg"
									alt="Ватсапп"
								/>
							</a>
						</div> */}
					</div>
					<div>
						<div>
							<h1 className="text-[32px] inline-flex items-center gap-1.5">
								Алексей Норманов
								<Image className="opacity-70 hover:opacity-95 transition-opacity cursor-pointer pt-1" src="/icons/edit.svg" alt="Редактировать профиль" width={26} height={26} />
							</h1>
							<p className="uppercase text-[20px] font-bold">Новичок</p>
						</div>
						<ul className="flex flex-col gap-1.5 mt-8">
							{[
								/* {
									label: "Страна",
									value: "–",
								},
								{
									label: "Город",
									value: "–",
								},
								{
									label: "Дата рождения",
									value: "–",
								},
								{
									label: "Пол",
									value: "мужской",
								}, */
								{
									label: "Мобильный телефон",
									value: "+7 (982)-783-04-18",
								},
								{
									label: "Электронная почта",
									value: "superman72@mail.ru",
								},
							].map(({ label, value }) => (
								<li key={label}>
									{label}: <span className="font-bold">{value}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</Block>
			<Block title="Текущие курсы">
				<div className="flex items-center gap-6 mt-[30px] max-w-[500px]">
					<Image
						className="object-cover rounded-2xl"
						src="/img/platform/course-preview.jpg"
						alt="Превью курса"
						width={128}
						height={124}
					/>
					<div>
						<h6 className="text-[20px] text-[#3C6E71]">«Путь копирайтера: от А до Я»</h6>
						<p className="mt-1.5 leading-[150%] text-[14px]">
							Научитесь правильно выстраивать композицию продающего текста, решать задачи бизнеса и
							грамотно расписывать техническое задание.
						</p>
					</div>
				</div>
			</Block>
			<div className="[grid-column:span_2]">
				<Block title="Витрина достижений">
					<p className="text-center py-16 font-bold text-[96px] text-light uppercase">Нет достижений</p>
				</Block>
			</div>
		</section>
	);
}
