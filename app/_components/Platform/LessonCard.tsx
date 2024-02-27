import clsx from "clsx";
import Image from "next/image";

type TLessonCard = {
	title: string;
	description: string;
	complete?: boolean;
};

export default function LessonCard({ title, description, complete }: TLessonCard) {
	return (
		<div className="flex items-center gap-7 rounded-2xl hover:bg-light/40 transition-colors cursor-pointer">
			<div className="min-w-[170px] h-[120px] relative">
				<Image
					width={170}
					height={120}
					src="/img/platform/lesson-preview.jpg"
					className="object-fit h-[120px] w-full rounded-2xl"
					alt="Превью урока"
				/>
				{complete && (
					<div className="bg-black/60 flex-middle absolute z-[1] left-0 top-0 right-0 bottom-0 rounded-2xl">
						<Image src="/icons/check.svg" alt="Пройденный урок" width={66} height={66} />
					</div>
				)}
			</div>
			<div className={clsx(complete && "opacity-45")}>
				<h6 className={clsx("text-[20px] text-[#3C6E71] font-medium", complete && "line-through")}>{title}</h6>
				<p className="mt-1">{description}</p>
			</div>
		</div>
	);
}
