/* eslint-disable @next/next/no-img-element */

export default function Estimation() {
	return (
		<div className="rounded-2xl bg-gradient-to-tr from-[#284B63] to-[#3C6E71] p-[35px] pb-10">
			<h6 className="font-bold text-[32px] text-center text-white">Оцените пройденный урок</h6>
			<div className="flex items-center mt-6 gap-14 justify-center">
				<img className="cursor-pointer hover:scale-110 transition-transform"  src="/img/emoji/smile-with-hearts.png" alt="" />
				<img className="cursor-pointer hover:scale-110 transition-transform"  src="/img/emoji/smile-not-understand.png" alt="" />
				<img className="cursor-pointer hover:scale-110 transition-transform"  src="/img/emoji/smile-aggressive.png" alt="" />
			</div>
		</div>
	);
}
