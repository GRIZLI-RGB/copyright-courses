"use client";

import { useState } from "react";
import { BookOpenIcon, DocumentTextIcon, VideoCameraIcon } from "@heroicons/react/20/solid";

import Block from "@/app/_components/Platform/Block";
import ModalWindowAvailableSoon from "@/app/_components/Platform/ModalWindowAvailableSoon";

export default function PlatformKnowledgebasePage() {
	const [triggerAvailableSoon, setTriggerAvailableSoon] = useState(false);

	return (
		<section className="max-w-[1350px] ml-auto grid grid-cols-3 gap-5">
			<div
				className="hover:shadow-md transition-all cursor-pointer rounded-2xl"
				onClick={() => setTriggerAvailableSoon(true)}>
				<Block>
					<div className="flex-middle gap-3">
						<DocumentTextIcon className="w-10" />
						<span className="text-[32px] font-bold ">Терминология</span>
					</div>
				</Block>
			</div>
			<div
				className="hover:shadow-md transition-all cursor-pointer rounded-2xl"
				onClick={() => setTriggerAvailableSoon(true)}>
				<Block>
					<div className="flex-middle gap-3">
						<BookOpenIcon className="w-10" />
						<span className="text-[32px] font-bold ">Книги</span>
					</div>
				</Block>
			</div>
			<div
				className="hover:shadow-md transition-all cursor-pointer rounded-2xl"
				onClick={() => setTriggerAvailableSoon(true)}>
				<Block>
					<div className="flex-middle gap-3">
						<VideoCameraIcon className="w-10" />
						<span className="text-[32px] font-bold ">Видеоуроки</span>
					</div>
				</Block>
			</div>
			<ModalWindowAvailableSoon trigger={triggerAvailableSoon} setTrigger={setTriggerAvailableSoon} />
		</section>
	);
}
