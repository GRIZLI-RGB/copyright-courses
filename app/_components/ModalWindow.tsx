import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { createPortal } from "react-dom";

type TModalWindow = {
	variant?: "default" | "faq";
	children: React.ReactNode;
	trigger: boolean;
	setTrigger: (state: boolean) => void;
};

const variants = {
	visible: { opacity: 1, scale: 1 },
	hidden: { opacity: 0, scale: 1.35 },
};

export default function ModalWindow({ variant = "default", children, trigger, setTrigger }: TModalWindow) {
	if (typeof window !== "undefined") {
		return createPortal(
			<AnimatePresence>
				{trigger && (
					<motion.div
						className="fixed top-0 left-0 right-0 bottom-0 bg-black/75 z-50 flex-middle p-10"
						initial={"hidden"}
						animate={"visible"}
						exit={"hidden"}
						variants={variants}
						transition={{
							duration: 0.1,
						}}>
						{variant === "default" ? (
							<div className="bg-white p-10 rounded-2xl shadow-md">{children}</div>
						) : (
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
						)}
					</motion.div>
				)}
			</AnimatePresence>,
			document.body,
		);
	}
}
