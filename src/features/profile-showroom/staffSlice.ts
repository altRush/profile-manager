import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Staff } from '../../interfaces/Staff.interface';

const initialState = {
	members: [] as Staff[]
};

export const staffSlice = createSlice({
	name: 'staff',
	initialState,
	reducers: {
		storeStaff: (state, action: PayloadAction<Staff[]>) => {
			state.members = action.payload;
		}
	}
});

export const { storeStaff } = staffSlice.actions;

export default staffSlice.reducer;
