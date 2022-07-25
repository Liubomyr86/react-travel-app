import { createReducer } from '@reduxjs/toolkit';
import { IResponse } from 'models/api.model';
import { addBooking, loadBookings, removeBooking } from './actions';

const initialState: { [key: string]: IResponse[] } = {
    bookings: [],
};

const reduser = createReducer(initialState, (builder) => {
    builder.addCase(loadBookings.fulfilled, (state, action) => {
        state.bookings = action.payload;
    });

    builder.addCase(addBooking.fulfilled, (state, action) => {
        state.bookings.push(action.payload);
    });

    builder.addCase(removeBooking.fulfilled, (state, action) => {
        state.bookings = state.bookings.filter((booking) => booking.id !== action.payload);
    });
});

export { reduser };
