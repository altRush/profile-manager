import { configureStore } from '@reduxjs/toolkit';
import searchFieldReducer from '../features/profile-showroom/searchFieldSlice';
import staffReducer from '../features/profile-showroom/staffSlice';
import modalForStaffReducer from '../features/profile-showroom/modalSlice';

export const store = configureStore({
	reducer: {
		searchField: searchFieldReducer,
		staff: staffReducer,
		modalForStaff: modalForStaffReducer
	}
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
