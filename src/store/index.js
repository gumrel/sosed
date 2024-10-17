import { configureStore } from '@reduxjs/toolkit';
import geoReducer from '../Reducers/geoReducer';
import metroReducer from '../Reducers/metroReducer';

export const store = configureStore({
	reducer: {
		geo: geoReducer,
		metro: metroReducer,
	},
	devTools: true,
});
