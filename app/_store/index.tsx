import { configureStore } from "@reduxjs/toolkit";

import landingSlice from "./slices/landing.slice";

const store = configureStore({
	reducer: {
		landing: landingSlice,
	},
});

export type TStoreState = ReturnType<typeof store.getState>;
export type TStoreDispatch = typeof store.dispatch;

export default store;
