import Image from "next/image";

type TLogo = {
	width: number;
	height: number;
};

export default function Logo({ width, height }: TLogo) {
	return (
		<a className="inline-block align-top" href="/">
			<Image
				src="/img/logo.svg"
				alt="Логотип"
				width={width}
				height={height}
			/>
		</a>
	);
}
