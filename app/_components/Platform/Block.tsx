export default function Block({ children, title }: { children: React.ReactNode; title?: string }) {
	return (
		<div className="border border-light/50 rounded-2xl bg-white px-[50px] py-[45px]">
			{title && <h6 className="text-[32px] font-bold">{title}</h6>}
			{children}
		</div>
	);
}
