"use client";

import Button from "@/app/_components/Auth/Button";
import Input from "@/app/_components/Auth/Input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AuthLoginPage() {
	const [loginData, setLoginData] = useState({
		email: "",
		password: "",
	});

	const { push } = useRouter();

	return (
		<>
			<h1>Вход в ЛК</h1>
			<form className="flex flex-col gap-2 max-w-[270px] mx-auto">
				<Input
					icon="email--light"
					placeholder="Электронная почта"
					value={loginData.email}
					onChange={e =>
						setLoginData(prev => ({
							...prev,
							login: e.target.value,
						}))
					}
				/>
				<Input
					icon="guard"
					type="password"
					placeholder="Пароль"
					value={loginData.password}
					onChange={e =>
						setLoginData(prev => ({
							...prev,
							password: e.target.value,
						}))
					}
				/>
				<div className="mt-2.5">
					<Button onClick={() => {}}>Войти</Button>
				</div>
				<div className="text-right">
					<span
						className="text-sea text-[14px] cursor-pointer hover:opacity-80 transition-opacity border-b border-sea"
						onClick={() => push("/auth/remember-password")}>
						забыли пароль?
					</span>
				</div>
			</form>
		</>
	);
}
