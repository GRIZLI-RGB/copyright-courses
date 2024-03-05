/* eslint-disable @next/next/no-img-element */

export default function Caution({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-[#DA8D46] text-[18px] font-medium leading-[150%] tracking-[2%] text-white px-7 py-6 my-7 rounded-md">
			<img className="float-left pl-2 pt-1 pr-5" src="/icons/exclamation.svg" alt="" />
			{children}
		</div>
	);
}
