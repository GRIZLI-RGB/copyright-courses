import Heading from "./Heading";

export default function Homework({ items }: { items: string[] }) {
	return (
		<div>
			<Heading variant="h2">Домашнее задание</Heading>
			<ol className="mt-7 ml-5 gap-4 flex flex-col">
				{items.map((item, index) => (
					<li key={item} className="flex items-center gap-4">
						<span className="w-8 h-8 rounded-full bg-mainDark text-white inline-flex items-center justify-center font-bold">
							{++index}
						</span>
						<span className="leading-[150%] text-[18px]">{item}</span>
					</li>
				))}
			</ol>
		</div>
	);
}
