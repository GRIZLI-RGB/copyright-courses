interface IButton {
	children: React.ReactNode;
	onClick: () => void;
}

export default function Button({ children, onClick }: IButton) {
	return (
		<button
			className="bg-mainDark rounded-full text-[18px] font-semibold h-11 flex-middle text-white w-full hover:opacity-80"
			onClick={onClick}>
			{children}
		</button>
	);
}
