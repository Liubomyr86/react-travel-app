import { createReducer } from '@reduxjs/toolkit';
import { IResponse } from 'models/api.model';
import { loadTrip, loadTrips } from './actions';

const initialState: { [key: string]: IResponse[] | null | [] | IResponse } = {
    trips: [],
    trip: null,
};

const reduser = createReducer(initialState, (builder) => {
    builder.addCase(loadTrips.fulfilled, (state, action) => {
        state.trips = action.payload as IResponse[];
    });

    builder.addCase(loadTrip.fulfilled, (state, action) => {
        state.trip = action.payload as IResponse;
    });
});

export { reduser };
