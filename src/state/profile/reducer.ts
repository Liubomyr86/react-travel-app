import { createReducer, isAnyOf } from '@reduxjs/toolkit';
import { IQuery } from 'models/api.model';
import { loadCurrentUser, signIn, signOut, signUp } from './actions';

const initialState: { [key: string]: IQuery | null | string } = {
    user: null,
    status: null,
    error: null,
};

const reduser = createReducer(initialState, (builder) => {
    builder.addCase(signOut.fulfilled, (state) => {
        state.user = null;
        state.status = 'resolved';
    });
    builder.addMatcher(isAnyOf(signIn.pending, signUp.pending, signOut.pending, loadCurrentUser.pending), (state) => {
        state.status = 'loading';
        state.error = null;
    });
    builder.addMatcher(isAnyOf(signIn.fulfilled, signUp.fulfilled, loadCurrentUser.fulfilled), (state, action) => {
        state.user = action.payload as IQuery;
        state.status = 'resolved';
    });
    builder.addMatcher(
        isAnyOf(signIn.rejected, signUp.rejected, signOut.rejected, loadCurrentUser.rejected),
        (state, action) => {
            state.user = null;
            state.status = 'rejected';
            state.error = action.payload as string;
        },
    );
});

export { reduser };
