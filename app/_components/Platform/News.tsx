/* eslint-disable @next/next/no-img-element */
import { TNewsTag } from "@/app/_utils/types";

type TNews = {
	tags: TNewsTag[];
	title: string;
	created_date: Date;
	children: React.ReactNode;
	author?: string;
	image_url: string;
};

export default function News({ tags, title, created_date, author, children, image_url }: TNews) {
	return (
		<div className="rounded-2xl overflow-hidden border border-[#D9D9D9]/50 shadow-sm bg-white">
			<div className="relative">
				{/* Теги */}
				<div className="absolute flex gap-2 top-4 left-4 z-[1]">
					{tags.map(tag => (
						<span
							key={tag.text}
							className="text-white rounded-full font-notoSans text-[14px] font-semibold px-3 pt-0.5 pb-1"
							style={{
								background: tag.background,
							}}>
							{tag.text}
						</span>
					))}
				</div>
				{/* Заголовок, дата, автор */}
				<div className="absolute bottom-[25px] left-[45px] z-[1]">
					<h1 className="mb-1 text-white text-[48px] font-bold">{title}</h1>
					<p className="text-white/50">
						{created_date.toLocaleDateString()} / {author || "Администрация платформы"}
					</p>
				</div>
				{/* Градиент затемнение */}
				<div className="absolute bg-gradient-to-b from-black/0 to-black left-0 right-0 bottom-0 top-0" />
				<img className="block h-[430px] w-full object-cover" src={image_url} alt="Обложка новости" />
			</div>
			<div className="p-[45px] pb-[50px] leading-[150%] text-[#353535] text-[24px]">{children}</div>
		</div>
	);
}
