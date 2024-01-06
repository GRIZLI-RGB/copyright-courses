import Image from "next/image";
import { createPortal } from "react-dom";

type TModalWindow = {
	children: React.ReactNode;
	trigger: boolean;
	setTrigger: (state: boolean) => void;
};

export default function ModalWindow({
	children,
	trigger,
	setTrigger,
}: TModalWindow) {
	if (trigger) {
		return createPortal(
			<div className="fixed top-0 left-0 right-0 bottom-0 bg-black/75 z-50 flex-middle p-10">
				<div className="p-[30px] bg-white/30 rounded-[6px] border border-white/30 relative shadow-[0_4px_10px_rgba(0,0,0,0.1)] backdrop-blur-[50px]">
					<Image
						onClick={() => setTrigger(false)}
						className="cursor-pointer absolute top-0 right-0 translate-x-[110%] -translate-y-[110%] p-[3px] w-6 h-6 bg-white/30 shadow-[0_4px_10px_rgba(0,0,0,0.1)] border border-white/30 rounded-full"
						src="/icons/close.svg"
						alt="Закрыть модальное окно"
						width={32}
						height={32}
					/>
					{children}
				</div>
			</div>,
			document.body,
		);
	}
}
