interface IButton {
	children: React.ReactNode;
	onClick: () => void;
}

export default function Button({ children, onClick }: IButton) {
	return (
		<button
			type="button"
			className="font-semibold leading-[25px] bg-white rounded-full p-2.5  hover:opacity-70"
			onClick={onClick}>
			{children}
		</button>
	);
}
