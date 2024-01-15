"use client";

import { ChakraProvider } from "@chakra-ui/react";

import chakraTheme from "./chakra/chakraTheme";

export function Providers({ children }: { children: React.ReactNode }) {
	return <ChakraProvider theme={chakraTheme}>{children}</ChakraProvider>;
}
