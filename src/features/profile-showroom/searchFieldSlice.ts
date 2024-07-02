import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
	searchText: ''
};

export const searchFieldSlice = createSlice({
	name: 'searchField',
	initialState,
	reducers: {
		search: (state, action: PayloadAction<string>) => {
			state.searchText = action.payload;
		}
	}
});

export const { search } = searchFieldSlice.actions;

export default searchFieldSlice.reducer;
