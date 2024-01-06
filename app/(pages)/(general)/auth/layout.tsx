export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="bg-[#f6f6f6] min-h-screen flex-middle">
			<div className="bg-white border border-light shadow-soDark rounded-[20px] pt-[55px] pb-[60px] px-[75px] max-w-[754px] w-full [&_p]:text-[20px] [&_p]:text-center [&_h1]:text-center [&_h1]:font-bold [&_h1]:text-[36px] [&_h1]:mb-3 [&_form]:flex [&_form]:flex-col [&_form]:gap-2 [&_form]:mx-auto [&_form]:max-w-[270px]" >
				{children}
			</div>
		</div>
	);
}
