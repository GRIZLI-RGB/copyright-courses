import { Metadata } from "next";

const checkInfoData = [
	{
		left: "Продавец",
		right: "Козлов Е.И.",
	},
	{
		left: "Покупатель",
		right: "email@mail.ru",
	},
	{
		left: "Товар",
		right: "«Быстрый старт»",
	},
];

const infoData = [
	{
		left: "Выбранный тариф",
		right: "«Быстрый старт»",
	},
	{
		left: "Отправка чека на электронный адрес",
		right: "freelancer.grizli@gmail.com",
	},
];

const paymentMethodsData = [
	{
		title: "Банковские карты и переводы",
		methods: [
			{
				name: "Сбер",
				img: "sber",
				recipient: "Козлов Евгений Игоревич",
				requisites: "+7(982)-783-04-18",
			},
			{
				name: "Тинькофф",
				img: "tinkoff",
				recipient: "Козлов Евгений Игоревич",
				requisites: "+7(982)-783-04-18",
			},
			{
				name: "СБП",
				img: "sbp",
				recipient: "Козлов Евгений Игоревич",
				requisites: "+7(982)-783-04-18",
			},
		],
	},
	{
		title: "Электронные кошельки",
		methods: [
			{
				name: "QIWI",
				img: "qiwi",
				recipient: "Козлов Евгений Игоревич",
				requisites: "+7(982)-783-04-18",
			},
			{
				name: "YooMoney",
				img: "yoomoney",
				recipient: "Козлов Евгений Игоревич",
				requisites: "+7(982)-783-04-18",
			},
		],
	},
];

export const metadata: Metadata = {
	title: "Оплата платежного документа №12345",
};

export default function PaymentPage() {
	return (
		<div className="bg-darkWhite min-h-screen">
			<div className="max-w-[1220px] mx-auto px-[30px] flex items-start gap-x-[100px] justify-between py-16 font-notoSans">
				{/* LEFT INFO */}
				<div>
					<h1 className="text-[48px] font-extrabold mb-2">
						Оплата заказа #123456
					</h1>
					<p className="text-black/70 text-[12px] mb-[30px]">
						Данная ссылка действительна до 01.01.1970, 23:57
					</p>
					<ul className="py-[30px] border-y border-dashed border-light">
						{infoData.map(({ left, right }) => (
							<li key={left} className="text-[15px]">
								<span>{left}: </span>
								<span className="font-bold">{right}</span>
							</li>
						))}
					</ul>
					<div className="my-[30px] bg-white shadow-[0_0_4px_0_rgba(0,0,0,0.05)] rounded-[8px] px-[30px] py-7">
						<h3 className="text-black text-[24px] font-bold mb-6">
							Выберите способ оплаты
						</h3>
						<div className="flex flex-col gap-y-6">
							{paymentMethodsData.map(paymentMethod => (
								<div key={paymentMethod.title}>
									<h5 className="mb-[18px] text-[15px] font-medium text-black">
										{paymentMethod.title}
									</h5>
									<ul className="flex flex-wrap gap-4">
										{paymentMethod.methods.map(method => (
											<li
												key={method.name}
												className="w-[85px] h-[85px] border border-light rounded-[6px] flex-middle flex-col cursor-pointer hover:scale-105 transition-transform">
												<img
													className="h-8"
													src={`/img/payment-methods/${method.img}.png`}
													alt={method.name}
												/>
												<span className="text-[14px] text-black/50 mt-2">
													{method.name}
												</span>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
					<div className="font-light px-6 py-[18px] rounded-[8px] border border-veryNegative/50 bg-veryNegative/30 text-veryNegative">
						<span className="font-bold text-veryNegative">
							Внимание!
						</span>{" "}
						Не забудьте указать уникальный идентификатор платежа в
						комментариях к заказу, иначе платеж не будет получен и
						обработан нами!
					</div>
				</div>

				{/* RIGHT CHECK */}
				<div className="min-w-[320px] max-w-[320px] bg-white rounded-[8px] shadow-[0_0_4px_0_rgba(0,0,0,0.05)] px-[30px] py-[25px] [&_span]:text-black [&_h6]:text-black">
					<h6 className="font-medium text-[18px]">
						Заказ <span className="font-bold">#123456</span>
					</h6>
					<div className="py-[18px] my-[18px] border-y border-dashed border-light">
						{checkInfoData.map(({ left, right }) => (
							<div
								key={left}
								className="flex items-center justify-between">
								<span>{left}:</span>
								<span className="underline underline-offset-2">
									{right}
								</span>
							</div>
						))}
					</div>
					<div className="font-bold flex items-end justify-between">
						<span>Всего к оплате:</span>
						<span className="text-[28px]">349 ₽</span>
					</div>
					<button className="h-[52px] flex-middle w-full rounded-[6px] tracking-[0.36px] uppercase text-[18px] font-bold text-white bg-mainDark/50 mt-7">
						Я оплатил
					</button>
				</div>
			</div>
		</div>
	);
}