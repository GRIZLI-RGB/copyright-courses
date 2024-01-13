export default function Header() {
	return (
		<header className="fixed top-0 left-0 right-0 bg-white h-[74px] border-b border-light/50">
			<div className="max-w-[1400px] ml-[290px] flex items-center justify-between h-full pr-[30px]">
				<h6 className="uppercase font-bold">Админ-панель</h6>
				<div className="flex items-center gap-[25px]">
					<div className="flex gap-4 items-center">
						<div className="flex flex-col items-end">
							Администратор
						</div>
						<img
							className="w-[42px] h-[42px] rounded-full object-cover"
							src="/img/avatar.jpg"
							alt="Аватар пользователя"
						/>
					</div>
					<div className="bg-light h-6 w-px" />
					<div className="relative">
						<img
							src="/icons/bell.svg"
							alt="Уведомления"
						/>
						<span className="absolute top-0 right-0 bg-negative w-3 h-3 flex-middle text-[10px] font-bold text-white rounded-full">
							5
						</span>
					</div>
					<button className="text-negative uppercase flex items-center gap-2 text-[18px] hover:opacity-80 font-medium">
						<img
							src="/icons/exit.svg"
							alt="Выйти"
						/>
						Выйти
					</button>
				</div>
			</div>
		</header>
	);
}