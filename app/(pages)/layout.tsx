"use client";

import { Provider } from "react-redux";

import store from "../_store";
import { Toaster } from "react-hot-toast";

export default function RootClientLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Provider store={store}>
			<Toaster
				position="bottom-right"
				toastOptions={{
					style: {
						color: "#353535",
						fontSize: "15px",
						fontWeight: "500",
						fontFamily: "var(--font-inter)",
					},
				}}
			/>
			{children}
		</Provider>
	);
}
