export default function List({ variant, items }: { items: string[]; variant: "circles" | "nums" }) {
	if (variant === "circles") {
		return (
			<ul className="flex flex-col gap-1 ml-5 my-[30px]">
				{items.map(item => (
					<li key={item} className="flex items-center gap-3 text-[18px] leading-[150%] ">
						<span className="w-2 h-2 rounded-full bg-[#464646]" />
						<span>{item}</span>
					</li>
				))}
			</ul>
		);
	}
}
