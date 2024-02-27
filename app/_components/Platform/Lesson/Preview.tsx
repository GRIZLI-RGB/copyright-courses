import Image from "next/image";

export default function Preview({ image_url, title }: { image_url: string; title: string }) {
	return (
		<div className="rounded-2xl overflow-hidden relative mb-[30px]">
			<Image width={1250} height={440} src={image_url} alt="Превью урока" />
			<h1 className="font-bold text-[48px] bottom-10 left-12 right-12 text-white z-[2] absolute">{title}</h1>
            <div className="z-[1] bg-gradient-to-b from-transparent to-black absolute left-0 right-0 bottom-0 top-0"/>
		</div>
	);
}
