/* eslint-disable @next/next/no-img-element */

export default function Picture({ url, opinion }: { url: string; opinion?: string }) {
	return (
		<div className="flex-middle flex-col gap-5 my-12">
			<img src={url} alt="" />
			{opinion && <p className="text-[14px] font-medium opacity-60">{opinion}</p>}
		</div>
	);
}
