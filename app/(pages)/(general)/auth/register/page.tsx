"use client";

import Button from "@/app/_components/Auth/Button";
import Input from "@/app/_components/Auth/Input";
import { useState } from "react";

interface IRegisterData {
	last_name: string;
	first_name: string;
	password: string;
}

export default function AuthRegisterPage() {
	const [step, setStep] = useState<"greeting" | "register">("greeting");
	const [registerData, setRegisterData] = useState<IRegisterData>({
		last_name: "",
		first_name: "",
		password: "",
	});

	if (step === "greeting") {
		return (
			<>
				<p>
					Здравствуйте, <span className="font-bold">Алексей</span>! Мы
					рады приветствовать вас в системе интерактивного обучения
					копирайтингу{" "}
					<span className="text-black">«Сиди, пиши»</span>. Надеемся,
					что уроки не покажутся вам скучными, а пройденный материал
					обязательно пригодится в работе.
					<br />
					<br />
					Чтобы продолжить, заполните простую форму. Она поможет нам
					настроить ваш личный кабинет.
				</p>
				<button
					className="bg-mainDark rounded-[8px] flex items-center gap-2.5 text-[20px] text-white font-medium px-4 py-2.5 mt-12 mx-auto hover:opacity-80"
					onClick={() => setStep("register")}>
					Перейти к форме
					<svg
						width="26"
						height="26"
						viewBox="0 0 26 26"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M16.125 20.75L14.2875 18.8469L18.9469 14.1875H3V11.5625H18.9469L14.2875 6.90312L16.125 5L24 12.875L16.125 20.75Z"
							fill="white"
						/>
					</svg>
				</button>
			</>
		);
	}

	if (step === "register") {
		return (
			<form className="max-w-[270px] flex flex-col gap-2 mx-auto">
				<Input
					icon="user"
					placeholder="Фамилия"
					value={registerData.last_name}
					onChange={e =>
						setRegisterData(prev => ({
							...prev,
							last_name: e.target.value,
						}))
					}
				/>
				<Input
					icon="user"
					placeholder="Имя"
					value={registerData.first_name}
					onChange={e =>
						setRegisterData(prev => ({
							...prev,
							first_name: e.target.value,
						}))
					}
				/>
				<Input
					icon="email--light"
					value={"mail@mail.ru"}
					onChange={() => {}}
					disabled
				/>
				<Input
					icon="cart--light"
					value={"«Быстрый старт»"}
					onChange={() => {}}
					disabled
				/>
				<Input
					icon="guard"
					type="password"
					placeholder="Пароль"
					value={registerData.password}
					onChange={e =>
						setRegisterData(prev => ({
							...prev,
							password: e.target.value,
						}))
					}
				/>
				<div className="mt-2.5">
					<Button onClick={() => {}}>Создать ЛК</Button>
				</div>
				<span className="leading-[125%] text-[13px] text-center">
					* все данные можно будет изменить в личном кабинете
				</span>
			</form>
		);
	}
}
