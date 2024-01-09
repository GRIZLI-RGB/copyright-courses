import { createSlice } from "@reduxjs/toolkit";

const landingSlice = createSlice({
	name: "landing",
	initialState: {
		currentTariff: null,
	},
	reducers: {
		setCurrentTariff: (state, props) => {
			state.currentTariff = props.payload;
		},
	},
});

export const { setCurrentTariff } = landingSlice.actions;

export default landingSlice.reducer;
