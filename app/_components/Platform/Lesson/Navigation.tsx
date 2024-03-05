import Image from "next/image";
import Link from "next/link";

export default function Navigation({ prev_link, next_link }: { prev_link: string; next_link: string }) {
	return (
		<div className="flex items-center justify-between mt-[30px]">
			<Link
				href={"/platform/lessons" + prev_link}
				className="flex gap-3 items-center font-semibold text-[20px] hover:opacity-80 transition-opacity">
				<Image width={36} height={36} src="/icons/arrow-prev.svg" alt="Предыдущий урок" />
				Предыдущий урок
			</Link>
			<Link
				href={"/platform/lessons" + next_link}
				className="flex gap-3 items-center font-semibold text-[20px] hover:opacity-80 transition-opacity">
				Следующий урок
				<Image width={36} height={36} src="/icons/arrow-next.svg" alt="Следующий урок" />
			</Link>
		</div>
	);
}
