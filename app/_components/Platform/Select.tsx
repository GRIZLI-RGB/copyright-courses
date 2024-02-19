import Image from "next/image";

export default function Select() {
	return (
		<div className="relative">
			<div className="bg-white flex items-center justify-between pl-[14px] pr-[16px] rounded-full border border-[#DDDDDD] h-11 cursor-pointer hover:border-gray-400 transition-colors">
				<div className="flex items-center gap-1.5">
					<Image src="/icons/cart.svg" alt="" width={26} height={26} />
					<span className="text-[18px] text-[#DDDDDD] pb-px">Пакет обучения</span>
				</div>
				<Image src="/icons/arrow-down--gray.svg" alt="" width={20} height={20} />
			</div>
		</div>
	);
}
