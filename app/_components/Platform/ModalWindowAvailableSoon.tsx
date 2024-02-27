import ModalWindow from "../ModalWindow";

export default function ModalWindowAvailableSoon({
	trigger,
	setTrigger,
}: {
	trigger: boolean;
	setTrigger: (state: boolean) => void;
}) {
	return (
		<ModalWindow trigger={trigger} setTrigger={setTrigger}>
			<h6 className="uppercase text-[28px] font-medium text-center">Скоро будет доступно!</h6>
			<p className="mt-[22px] mb-7 text-center max-w-[390px]">
				В связи с тем, что наша платформа <span className="font-bold">«Сиди, пиши»</span> появилась недавно, мы не успели протестировать
				весь функционал.<br/><br/> Следите за новостями и ждите обновления в ближайшее время!
			</p>
			<div className="gap-4 flex items-center justify-evenly px-4">
				<button
					className="w-full h-11 hover:opacity-80 text-[18px] font-semibold rounded-full text-mainDark border border-mainDark block pb-0.5"
					onClick={() => setTrigger(false)}>
					Понятно, спасибо!
				</button>
			</div>
		</ModalWindow>
	);
}
