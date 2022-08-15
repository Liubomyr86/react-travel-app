import { createAsyncThunk } from '@reduxjs/toolkit';
import { ExceptionMessage, HttpCode } from 'common/enums/enums';
import { HttpError } from 'exceptions/http-error.exception';
import { IQuery, IResponse } from 'models/api.model';
import { IServices } from 'models/services.model';
import { toastr } from 'react-redux-toastr';
import { signOut } from 'state/profile/actions';
import { ActionType } from './common';

const loadBookings = createAsyncThunk<IResponse[], void, { extra: { services: IServices } }>(
    ActionType.SET_ALL_BOOKINGS,
    async (_request, { dispatch, rejectWithValue, extra: { services } }) => {
        try {
            const bookings = await services.bookings.getAllBookings();

            return bookings as IResponse[];
        } catch (error) {
            const isHttpError = error instanceof HttpError;

            if (isHttpError && error.status === HttpCode.UNAUTHORIZED) {
                dispatch(signOut());
            }

            toastr.error('Error', `${(error as Error).message ?? ExceptionMessage.UNKNOWN_ERROR}`);
            return rejectWithValue((error as Error).message ?? ExceptionMessage.UNKNOWN_ERROR);
        }
    },
);

const addBooking = createAsyncThunk<IResponse, IQuery, { extra: { services: IServices } }>(
    ActionType.ADD_BOOKING,
    async (request, { dispatch, rejectWithValue, extra: { services } }) => {
        try {
            const bookings = await services.bookings.postBooking(request);

            return bookings as IResponse;
        } catch (error) {
            const isHttpError = error instanceof HttpError;

            if (isHttpError && error.status === HttpCode.UNAUTHORIZED) {
                dispatch(signOut());
            }

            toastr.error('Error', `${(error as Error).message ?? ExceptionMessage.UNKNOWN_ERROR}`);
            return rejectWithValue((error as Error).message ?? ExceptionMessage.UNKNOWN_ERROR);
        }
    },
);

const removeBooking = createAsyncThunk<string, string, { extra: { services: IServices } }>(
    ActionType.DELETE_BOOKING,
    async (request, { dispatch, rejectWithValue, extra: { services } }) => {
        try {
            services.bookings.deleteBooking(request);

            return request;
        } catch (error) {
            const isHttpError = error instanceof HttpError;

            if (isHttpError && error.status === HttpCode.UNAUTHORIZED) {
                dispatch(signOut());
            }

            toastr.error('Error', `${(error as Error).message ?? ExceptionMessage.UNKNOWN_ERROR}`);
            return rejectWithValue((error as Error).message ?? ExceptionMessage.UNKNOWN_ERROR);
        }
    },
);

export { loadBookings, addBooking, removeBooking };
