import { createReducer, isAnyOf } from '@reduxjs/toolkit';
import { IResponse } from 'models/api.model';
import { addBooking, loadBookings, removeBooking } from './actions';

const initialState: { [key: string]: IResponse[] | null | string } = {
    bookings: [],
    error: null,
    status: null,
};

const reduser = createReducer(initialState, (builder) => {
    builder.addCase(loadBookings.fulfilled, (state, action) => {
        state.bookings = action.payload;
        state.status = 'resolved';
    });

    builder.addCase(addBooking.fulfilled, (state, action) => {
        (state.bookings as IResponse[]).push(action.payload);
        state.status = 'resolved';
    });

    builder.addCase(removeBooking.fulfilled, (state, action) => {
        state.bookings = (state.bookings as IResponse[]).filter((booking) => booking.id !== action.payload);
        state.status = 'resolved';
    });

    builder.addMatcher(isAnyOf(loadBookings.pending, addBooking.pending, removeBooking.pending), (state) => {
        state.error = null;
        state.status = 'loading';
    });

    builder.addMatcher(isAnyOf(loadBookings.rejected, addBooking.rejected, removeBooking.rejected), (state, action) => {
        state.error = action.payload as string;
        state.status = 'rejected';
    });
});

export { reduser };
