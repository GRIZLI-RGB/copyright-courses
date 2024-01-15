export default function ContentBlock({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="rounded-2xl border-light/50 bg-white border p-5">
			{children}
		</div>
	);
}
