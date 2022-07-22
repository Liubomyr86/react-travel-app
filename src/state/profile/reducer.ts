import { createReducer, isAnyOf } from '@reduxjs/toolkit';
import { IQuery } from 'models/api.model';
import { loadCurrentUser, signIn, signOut, signUp } from './actions';

const initialState: { user: IQuery | null } = {
    user: null,
};

const reduser = createReducer(initialState, (builder) => {
    builder
        .addMatcher(
            isAnyOf(signIn.fulfilled, signUp.fulfilled, signOut.fulfilled, loadCurrentUser.fulfilled),
            (state, action) => {
                state.user = action.payload as IQuery;
            },
        )
        .addMatcher(isAnyOf(signIn.rejected, signUp.rejected, signOut.rejected, loadCurrentUser.rejected), (state) => {
            state.user = null;
        });
});

export { reduser };
