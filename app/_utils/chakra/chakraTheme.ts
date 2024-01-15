import { extendTheme } from "@chakra-ui/react";

import Table from "./styling/table";

const chakraTheme = extendTheme({
	components: {
		Table,
	},
});

export default chakraTheme;
