"use client";

import { Provider } from "react-redux";

import store from "../_store";

export default function RootClientLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <Provider store={store}>{children}</Provider>;
}
