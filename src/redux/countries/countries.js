import { createSlice } from '@reduxjs/toolkit';
import getCountries from '../api';

const initialState = {
  countries: [],
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCountries.fulfilled, (state, action) => ({
      ...state,
      countries: action.payload,
    }));
  },
});

//   export const { bookReservation, cancelReservation } = countrieslice.actions;
export default countriesSlice.reducer;
