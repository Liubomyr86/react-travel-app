import { createReducer, isAnyOf } from '@reduxjs/toolkit';
import { StateStatus } from 'common/enums/enums';
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
        state.status = StateStatus.RESOLVED;
    });
    builder.addMatcher(isAnyOf(signIn.pending, signUp.pending, signOut.pending, loadCurrentUser.pending), (state) => {
        state.status = StateStatus.LOADING;
        state.error = null;
    });
    builder.addMatcher(isAnyOf(signIn.fulfilled, signUp.fulfilled, loadCurrentUser.fulfilled), (state, action) => {
        state.user = action.payload as IQuery;
        state.status = StateStatus.RESOLVED;
    });
    builder.addMatcher(
        isAnyOf(signIn.rejected, signUp.rejected, signOut.rejected, loadCurrentUser.rejected),
        (state, action) => {
            state.user = null;
            state.status = StateStatus.REJECTED;
            state.error = action.payload as string;
        },
    );
});

export { reduser };
