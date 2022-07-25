import { createAsyncThunk } from '@reduxjs/toolkit';
import { IResponse } from 'models/api.model';
import { IServices } from 'models/services.model';
import { ActionType } from './common';

const loadTrips = createAsyncThunk<IResponse[], void, { extra: { services: IServices } }>(
    ActionType.SET_ALL_TRIPS,
    async (_request, { extra: { services } }) => {
        const trips = await services.trips.getAllTrips();

        return trips as IResponse[];
    },
);

const loadTrip = createAsyncThunk<IResponse, string, { extra: { services: IServices } }>(
    ActionType.SET_TRIP,
    async (request, { extra: { services } }) => {
        const trip = await services.trips.getTrip(request);

        return trip as IResponse;
    },
);

export { loadTrips, loadTrip };
