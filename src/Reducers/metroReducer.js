import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { findNearestMetro } from '../requests/commons';

const initialState = {
	items: {},
	isLoading: false,
};

export const getMetroItems = createAsyncThunk('metroItems/getMetroItems', async (_, thunkAPI) => {
	try {
		const items = await findNearestMetro();
		return items;
	} catch (err) {
		return thunkAPI.rejectWithValue(err.message || 'Unknown error');
	}
});

const metroItemsSlice = createSlice({
	name: 'metroItems',
	initialState,

	extraReducers: builder => {
		builder
			.addCase(getMetroItems.pending, state => {
				state.isLoading = true;
			})
			.addCase(getMetroItems.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.items = payload;
			})
			.addCase(getMetroItems.rejected, state => {
				state.isLoading = false;
			});
	},
});

export default metroItemsSlice.reducer;
