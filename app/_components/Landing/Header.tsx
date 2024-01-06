import Logo from "../Logo";

export default function Header() {
	return (
		<header className="absolute top-0 left-0 right-0 z-50 font-inter">
			<div className="flex items-center justify-between container">
				<Logo width={100} height={100} />
				<nav className="flex gap-7 items-center">
					{[
						{
							text: "О курсе",
							href: "about",
						},
						{
							text: "Пакеты обучения",
							href: "rates",
						},
						{
							text: "FAQ",
							href: "faq",
						},
						{
							text: "Начать обучение",
							href: "start",
							isButton: true,
						},
					].map(({ text, href, isButton }) => (
						<a
							key={text}
							className={
								isButton
									? "font-semibold text-[15px] tracking-button rounded-full py-2.5 px-4 ml-2 hover:text-white hover:bg-mainDark border-[2px] border-mainDark"
									: "hover:text-black"
							}
							href={`#${href}`}>
							{text}
						</a>
					))}
				</nav>
			</div>
		</header>
	);
}
