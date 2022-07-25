import { createAsyncThunk } from '@reduxjs/toolkit';
import { IQuery, IResponse } from 'models/api.model';
import { IServices } from 'models/services.model';
import { ActionType } from './common';

const loadBookings = createAsyncThunk<IResponse[], void, { extra: { services: IServices } }>(
    ActionType.SET_ALL_BOOKINGS,
    async (_request, { extra: { services } }) => {
        const bookings = await services.bookings.getAllBookings();

        return bookings as IResponse[];
    },
);

const addBooking = createAsyncThunk<IResponse, IQuery, { extra: { services: IServices } }>(
    ActionType.ADD_BOOKING,
    async (request, { extra: { services } }) => {
        const bookings = await services.bookings.postBooking(request);

        return bookings as IResponse;
    },
);

const removeBooking = createAsyncThunk<string, string, { extra: { services: IServices } }>(
    ActionType.DELETE_BOOKING,
    async (request, { extra: { services } }) => {
        services.bookings.deleteBooking(request);
        return request;
    },
);

export { loadBookings, addBooking, removeBooking };
