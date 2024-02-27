import Block from "@/app/_components/Platform/Block";
import TrainerCard from "@/app/_components/Platform/TrainerCard";

export default function PlatformTrainersPage() {
	return (
		<section className="max-w-[1350px] ml-auto">
			<Block title="Тренажеры">
				<div className="flex item-start gap-7 mt-[45px]">
					<TrainerCard icon="clock" title='«Быстрее всех»' description='Нередки случаи, когда заказчик хочет получить результат быстрее намеченного срока. Тогда в дело вступают быстрые руки копирайтера, задача которых — за короткое время выполнить работу.' skills={['скорость печати']} difficult={1} />
				</div>
			</Block>
		</section>
	);
}
