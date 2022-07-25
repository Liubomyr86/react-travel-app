import { createReducer, isAnyOf } from '@reduxjs/toolkit';
import { IResponse } from 'models/api.model';
import { loadTrip, loadTrips } from './actions';

const initialState: { [key: string]: IResponse[] | null | [] | IResponse | string } = {
    trips: [],
    trip: null,
    error: null,
    status: null,
};

const reduser = createReducer(initialState, (builder) => {
    builder.addCase(loadTrips.fulfilled, (state, action) => {
        state.trips = action.payload as IResponse[];
        state.status = 'resolved';
    });

    builder.addCase(loadTrip.fulfilled, (state, action) => {
        state.trip = action.payload as IResponse;
        state.status = 'resolved';
    });
    builder.addMatcher(isAnyOf(loadTrips.pending, loadTrip.pending), (state) => {
        state.error = null;
        state.status = 'loading';
    });

    builder.addMatcher(isAnyOf(loadTrips.rejected, loadTrip.rejected), (state, action) => {
        state.error = action.payload as string;
        state.status = 'rejected';
    });
});

export { reduser };
