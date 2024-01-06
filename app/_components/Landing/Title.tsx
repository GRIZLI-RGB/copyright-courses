export default function Title({ children }: { children: React.ReactNode }) {
	return (
		<h2 className="font-bold text-[48px] leading-[120%] text-center">
			{children}
		</h2>
	);
}
