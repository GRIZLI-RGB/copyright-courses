import Homework from "./Homework";
import Test from "./Test";

export default function Extra({
	homework_items,
	test_data,
}: {
	homework_items: string[];
	test_data: {
		id: number;
		question: string;
		answers: string[];
		right_answer: string;
	}[];
}) {
	return (
		<div className=" py-6 grid grid-cols-2 mt-1.5 mb-12 relative">
			<Homework items={homework_items} />
			<div className="bg-light/80 w-px absolute top-0 bottom-0 mx-auto left-0 right-0" />
			<Test data={test_data} />
		</div>
	);
}
