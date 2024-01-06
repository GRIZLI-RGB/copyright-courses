import { createSlice } from "@reduxjs/toolkit";

const landingSlice = createSlice({
	name: "current-tariff",
	initialState: {
		value: null,
	},
	reducers: {
		setCurrentTariff: (state, props) => {
			state.value = props.payload;
		},
	},
});

export const { setCurrentTariff } = landingSlice.actions;

export default landingSlice.reducer;
