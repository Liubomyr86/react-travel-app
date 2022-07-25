import { createAsyncThunk } from '@reduxjs/toolkit';
import { ExceptionMessage, HttpCode } from 'common/enums/enums';
import { HttpError } from 'exceptions/http-error.exception';
import { IResponse } from 'models/api.model';
import { IServices } from 'models/services.model';
import { toastr } from 'react-redux-toastr';
import { signOut } from 'state/profile/actions';

import { ActionType } from './common';

const loadTrips = createAsyncThunk<IResponse[], void, { extra: { services: IServices } }>(
    ActionType.SET_ALL_TRIPS,
    async (_request, { dispatch, rejectWithValue, extra: { services } }) => {
        try {
            const trips = await services.trips.getAllTrips();

            return trips as IResponse[];
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

const loadTrip = createAsyncThunk<IResponse, string, { extra: { services: IServices } }>(
    ActionType.SET_TRIP,
    async (request, { dispatch, rejectWithValue, extra: { services } }) => {
        try {
            const trip = await services.trips.getTrip(request);

            return trip as IResponse;
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

export { loadTrips, loadTrip };
