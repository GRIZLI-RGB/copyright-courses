import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const helpers = createMultiStyleConfigHelpers(["table", "th", "td", "thead"]);

const Table = helpers.defineMultiStyleConfig({
	baseStyle: {
		th: {
			fontFamily: "Open Sans",
		},
	},
	sizes: {
		md: {
			th: {
				fontSize: "12px",
			},
			td: {
				fontSize: "14px",
			},
		},
	},
});

export default Table;
