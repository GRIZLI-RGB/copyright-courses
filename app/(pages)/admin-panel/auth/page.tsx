"use client";

import { useState } from "react";

import AuthLayout from "../../(general)/auth/layout";

import Input from "@/app/_components/Auth/Input";
import Button from "@/app/_components/Auth/Button";

export default function AdminPanelAuth() {
	const [loginData, setLoginData] = useState({
		login: "",
		password: "",
	});

	return (
		<AuthLayout>
			<h1>Вход в админку</h1>
			<form className="flex flex-col gap-2 max-w-[270px] mx-auto">
				<Input
					icon="email--light"
					placeholder="Логин"
					value={loginData.login}
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
			</form>
		</AuthLayout>
	);
}
