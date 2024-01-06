"use client";

import Button from "@/app/_components/Auth/Button";
import Input from "@/app/_components/Auth/Input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AuthRememberPassword() {
	const [step, setStep] = useState<"input" | "manual">("input");
	const [email, setEmail] = useState("");

	const { push } = useRouter();

	if (step === "input") {
		return (
			<>
				<h1>Восстановление пароля</h1>
				<form>
					<Input
						icon="email--light"
						placeholder="Электронная почта"
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<div className="mt-2.5">
						<Button onClick={() => setStep("manual")}>
							Восстановить
						</Button>
					</div>
				</form>
			</>
		);
	}

	if (step === "manual") {
		return (
			<>
				<p>
					Проверьте вашу электронную почту{" "}
					<span className="font-bold">ek916569@gmail.com</span>
					<br />
					<br />
					Дождитесь письма с ссылкой для смены пароля и следуйте
					действиям, указанным в инструкции к письму
				</p>
				<div className="mt-6">
					<Button onClick={() => push("/auth/login")}>
						Вернуться к страницу входа
					</Button>
				</div>
			</>
		);
	}
}
