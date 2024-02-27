export default function Heading({ children, variant }: { children: React.ReactNode; variant: "h2" | "h3" }) {
	if (variant === "h2") {
		return <h2 className="font-bold text-[48px]">{children}</h2>;
	}
	if (variant === "h3") {
		return <h3 className="font-bold text-[32px] text-[#505050]">{children}</h3>;
	}
}
