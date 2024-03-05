/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

import Block from "@/app/_components/Platform/Block";
import Select from "@/app/_components/Platform/Select";

export default function PlatformFinancesPage() {
	return (
		<section className="max-w-[1350px] ml-auto grid gap-12">
			<div>
				<Block title="Мои финансы">
					<div className="bg-mainDark rounded-full pl-7 pr-4 mt-[30px] inline-flex items-center justify-between gap-[18px]">
						<span className="text-[48px] font-bold text-white">1582₽</span>
						<button className="text-white w-[45px] h-[45px] bg-[#2BE84A] flex-middle font-bold rounded-full text-[48px] tracking-[5%]">
							+
						</button>
					</div>
					<p className="mt-3 mb-[30px] text-[14px] max-w-[255px]">
						Последняя синхронизация баланса 12 января 2023 года
						<Image
							className="inline ml-1.5"
							width={18}
							height={18}
							src="/icons/sync.svg"
							alt="Синхронизировать баланс"
						/>
					</p>
					<ul>
						{[
							{
								label: "Всего пополнений на сумму",
								value: "11 342 руб.",
							},
							{
								label: "Самая крупная транзация: ",
								value: "832 руб.",
							},
							{
								label: "Последняя операция: ",
								value: "пополнение (108 руб.)",
							},
						].map(({ label, value }) => (
							<li key={label}>
								{label}: <span className="font-bold">{value}</span>
							</li>
						))}
					</ul>
				</Block>
			</div>
			<div>
				<Block title="Покупка курсов">
					<div className="mt-2 mb-[22px] flex items-stretch gap-[30px]">
						<div className="my-5 max-w-[320px]">
							<Select />
							<ol className="mt-4 list-decimal pl-4">
								<li className="leading-[150%]">
									Выберите пакет обучения или курс, который вы хотите приобрести.
								</li>
								<li className="leading-[150%]">Выберите способ оплаты (справа)</li>
								<li className="leading-[150%]">Нажмите «Купить» и следуйте инструкциям на экране</li>
							</ol>
						</div>
						<div className="w-px bg-light/50" />
						<div className="my-5 grid grid-cols-2 gap-x-5 gap-y-4">
							{[...new Array(6)].map((_, index) => (
								<div key={index} className="bg-white rounded-2xl border border-light/50 flex-middle h-[56px] w-[105px]">
									<img src="/img/payment-methods/sberbank.png" alt="Сбербанк" />
								</div>
							))}
						</div>
					</div>
					<div className="flex-middle">
						<button className="text-[18px] font-semibold text-center bg-mainDark h-11 max-w-[270px] rounded-full text-white w-full hover:opacity-80 pb-0.5">
							Купить
						</button>
					</div>
				</Block>
			</div>
			<div className="[grid-column:span_2]">
				<Block title="История операций">
					<table className="mt-[45px] w-full">
						<thead>
							<tr>
								{["Дата", "Операция", "Сумма", "Откуда", "Куда", "Статус"].map(head => (
									<th key={head} className="text-[18px] uppercase font-normal text-left pb-1.5">
										{head}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{[
								{
									created_at: "01.01.2023 15:32",
									operation: "Пополнение",
									sum: "150",
									from: "Банковская карта",
									where: "Счет на сайте",
									status: "Выполнено",
								},
								{
									created_at: "01.01.2023 15:32",
									operation: "Пополнение",
									sum: "150",
									from: "Банковская карта",
									where: "Счет на сайте",
									status: "Выполнено",
								},
								{
									created_at: "01.01.2023 15:32",
									operation: "Пополнение",
									sum: "150",
									from: "Банковская карта",
									where: "Счет на сайте",
									status: "Выполнено",
								},
							].map((deal, index) => (
								<tr key={index}>
									<td className="py-5 border-b border-light/50">{deal.created_at}</td>
									<td className="py-5 border-b border-light/50">{deal.operation}</td>
									<td className="py-5 border-b border-light/50">{deal.sum} руб.</td>
									<td className="py-5 border-b border-light/50">{deal.from}</td>
									<td className="py-5 border-b border-light/50">{deal.where}</td>
									<td className="py-5 border-b border-light/50 ">
										<span className="text-white bg-[#12d132] font-semibold h-8 leading-[125%] flex-middle px-3.5 rounded-full text-[14px] w-fit">
											{deal.status}
										</span>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</Block>
			</div>
		</section>
	);
}
