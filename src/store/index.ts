import { configureStore } from '@reduxjs/toolkit';
import searchFieldReducer from '../features/profile-showroom/searchFieldSlice';
import staffReducer from '../features/profile-showroom/staffSlice';

export const store = configureStore({
	reducer: {
		searchField: searchFieldReducer,
		staff: staffReducer
	}
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
