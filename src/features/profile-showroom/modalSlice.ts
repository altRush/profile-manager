import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Staff } from '../../interfaces/Staff.interface';

const initialState = {
	selectedStaff: {} as Partial<Staff>,
	isModalOpen: false
};

export const modalForStaff = createSlice({
	name: 'staffInModal',
	initialState,
	reducers: {
		selectStaff: (state, action: PayloadAction<Staff>) => {
			state.selectedStaff = action.payload;
		},
		openModal: state => {
			state.isModalOpen = true;
		},
		closeModal: state => {
			state.isModalOpen = false;
		}
	}
});

export const { selectStaff, openModal, closeModal } = modalForStaff.actions;

export default modalForStaff.reducer;
