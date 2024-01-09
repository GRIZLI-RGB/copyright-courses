"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { getPaymentByID, getSettings } from "@/app/_services/api.service";

import {
	TPayment,
	TPaymentMethod,
	TPaymentMethodOnce,
	TTariff,
} from "@/app/types";
import toast from "react-hot-toast";
import clsx from "clsx";

// import { Metadata } from "next";

/* export const metadata: Metadata = {
	title: "Оплата платежного документа №12345",
}; */

export default function PaymentPage() {
	const [payment, setPayment] = useState<TPayment>();
	const [paymentMethods, setPaymentMethods] = useState<TPaymentMethod[]>();
	const [tariff, setTariff] = useState<TTariff>();

	const [currentPaymentMethod, setCurrentPaymentMethod] =
		useState<TPaymentMethodOnce>();

	const searchParams = useSearchParams();

	const [iAmOplatil, setIAmOplatil] = useState(true);

	useEffect(() => {
		getPaymentByID(searchParams.get("order_id") || "").then(res => {
			setPayment(res.data);
			getSettings().then(settings => {
				setTariff(
					settings.landing.tariffs.filter(
						tariff =>
							tariff.access_level === res.data.user.access_level,
					)[0],
				);
				setPaymentMethods(settings.payment_methods);
			});
		});
	}, []);

	if (payment && tariff && paymentMethods) {
		return (
			<div
				className={clsx("bg-darkWhite min-h-screen", {
					"flex-middle": iAmOplatil,
				})}>
				{iAmOplatil ? (
					<div className="text-center font-notoSans max-w-[1025px] mx-auto pb-[5vh]">
						<div className="flex-middle">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="120"
								height="120"
								viewBox="0 0 120 120"
								fill="none">
								<path
									d="M60 110C87.6142 110 110 87.6142 110 60C110 32.3858 87.6142 10 60 10C32.3858 10 10 32.3858 10 60C10 87.6142 32.3858 110 60 110Z"
									stroke="#353535"
									stroke-width="10"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M60 30V60L80 70"
									stroke="#353535"
									stroke-width="10"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</div>
						<h1 className="my-[30px] text-[48px] font-extrabold">
							Заказ #{payment.id} в обработке
						</h1>
						<p className="text-[20px] leading-[150%]">
							<span className="font-medium">Отлично!</span>{" "}
							Ожидайте данные для входа на платформу обучения на
							указанную электронную почту вместе с чеком об
							оплате. <br />
							<br />
							Обычно этот процесс занимает{" "}
							<span className="font-medium">
								не более 5 минут
							</span>
							, но иногда время ожидания может доходить до трёх
							рабочих суток.
						</p>
						<button className="mt-[65px] flex items-center gap-[7px] bg-mainDark text-white rounded-full mx-auto font-bold leading-[150%] h-[52px] justify-center px-6 hover:opacity-80">
							Остались вопросы? Напишите нам в{" "}
							<img src="/icons/telegram.svg" alt="Телеграмм" />
						</button>
					</div>
				) : (
					<div className="max-w-[1220px] mx-auto px-[30px] flex items-start gap-x-[100px] justify-between py-16 font-notoSans">
						{/* LEFT INFO */}
						<div>
							<h1 className="text-[48px] font-extrabold mb-2">
								Оплата заказа #{payment.id}
							</h1>
							<p className="text-black/70 text-[12px] mb-[30px]">
								Данная ссылка действительна до{" "}
								{new Date(
									payment.date_expire,
								).toLocaleDateString()}
								,{" "}
								{new Date(payment.date_expire)
									.toLocaleTimeString()
									.slice(0, 5)}
							</p>
							<ul className="py-[30px] border-y border-dashed border-light">
								<li className="text-[15px]">
									<span>Выбранный тариф: </span>
									<span className="font-bold">
										«{tariff.name}»
									</span>
								</li>
								<li className="text-[15px]">
									<span>
										Отправка чека на электронный адрес:{" "}
									</span>
									<span className="font-bold">
										{payment.user.email}
									</span>
								</li>
							</ul>
							<div className="my-[30px] bg-white shadow-[0_0_4px_0_rgba(0,0,0,0.05)] rounded-[8px] px-[30px] py-7">
								<h3 className="text-black text-[24px] font-bold mb-6">
									Выберите способ оплаты
								</h3>
								<div className="flex flex-col gap-y-6">
									{paymentMethods.map(paymentMethod => (
										<div key={paymentMethod.title}>
											<h5 className="mb-[18px] text-[15px] font-medium text-black">
												{paymentMethod.title}
											</h5>
											<ul className="flex flex-wrap gap-4">
												{paymentMethod.methods.map(
													method => (
														<li
															key={method.name}
															onClick={() =>
																setCurrentPaymentMethod(
																	method,
																)
															}
															className="w-[85px] h-[85px] border border-light rounded-[6px] flex-middle flex-col cursor-pointer hover:scale-105 transition-transform">
															<img
																className="h-8"
																src={`/img/payment-methods/${method.img}.png`}
																alt={
																	method.name
																}
															/>
															<span className="text-[14px] text-black/50 mt-2">
																{method.name}
															</span>
														</li>
													),
												)}
											</ul>
										</div>
									))}
								</div>
								{currentPaymentMethod && (
									<ul className="mt-[30px] pt-[30px] pb-0.5 text-[15px] flex flex-col gap-2 border-t border-dashed border-light">
										<li className="flex items-center gap-1">
											<span>Выбранный способ:</span>
											<img
												className="h-5"
												src={`/img/payment-methods/${currentPaymentMethod.img}.png`}
												alt={currentPaymentMethod.name}
											/>
											<span className="font-bold text-black/50">
												{currentPaymentMethod.name}
											</span>
										</li>
										<li className="flex items-center gap-1">
											<span>Получатель:</span>
											<span className="font-bold">
												{currentPaymentMethod.recipient}
											</span>
										</li>
										<li className="flex items-center gap-1">
											<span>Реквизиты:</span>
											<span className="font-bold">
												{
													currentPaymentMethod.requisites
												}
											</span>
										</li>
										<li className="flex items-center gap-1">
											<span>Сумма к оплате:</span>
											<span className="font-bold">
												{tariff.price} ₽
											</span>
										</li>
										<li className="flex items-center gap-1">
											<span>Комментарий к платежу:</span>
											<span className="font-bold">
												{payment.id}
											</span>
											<img
												onClick={() =>
													navigator.clipboard
														.writeText(
															payment.id.toString(),
														)
														.then(_ =>
															toast.success(
																"Скопировано в буфер обмена",
															),
														)
												}
												className="cursor-pointer"
												src="/icons/copy.svg"
												alt="Скопировать"
											/>
										</li>
									</ul>
								)}
							</div>
							<div className="font-light px-6 py-[18px] rounded-[8px] border border-veryNegative/50 bg-veryNegative/30 text-veryNegative">
								<span className="font-bold text-veryNegative">
									Внимание!
								</span>{" "}
								Не забудьте указать уникальный идентификатор
								платежа в комментариях к заказу, иначе платеж не
								будет получен и обработан нами!
							</div>
						</div>

						{/* RIGHT CHECK */}
						<div className="min-w-[340px] max-w-[340px] bg-white rounded-[8px] shadow-[0_0_4px_0_rgba(0,0,0,0.05)] px-[30px] py-[25px] [&_span]:text-black [&_h6]:text-black">
							<h6 className="font-medium text-[18px]">
								Заказ{" "}
								<span className="font-bold">#{payment.id}</span>
							</h6>
							<div className="py-[18px] my-[18px] border-y border-dashed border-light">
								<div className="flex items-center justify-between">
									<span>Продавец:</span>
									<span className="underline underline-offset-2">
										Козлов Е.И.
									</span>
								</div>
								<div className="flex items-center justify-between">
									<span>Покупатель:</span>
									<span className="underline underline-offset-2">
										{payment.user.email}
									</span>
								</div>
								<div className="flex items-center justify-between">
									<span>Товар:</span>
									<span className="underline underline-offset-2">
										«{tariff.name}»
									</span>
								</div>
							</div>
							<div className="font-bold flex items-end justify-between">
								<span>Всего к оплате:</span>
								<span className="text-[28px]">
									{tariff.price} ₽
								</span>
							</div>
							<button
								onClick={() => setIAmOplatil(true)}
								className={clsx(
									"h-[52px] flex-middle w-full rounded-[6px] tracking-[0.36px] uppercase text-[18px] font-bold text-white mt-7",
									currentPaymentMethod
										? "bg-mainDark cursor-pointer hover:opacity-80"
										: "bg-mainDark/50 cursor-default",
								)}>
								Я оплатил
							</button>
						</div>
					</div>
				)}
			</div>
		);
	}
}
