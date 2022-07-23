import { createAsyncThunk, Dispatch } from '@reduxjs/toolkit';
import { StorageKey } from 'common/enums/app/storage-key';
import { ExceptionMessage, HttpCode } from 'common/enums/enums';
import { HttpError } from 'exceptions/http-error.exception';
import { IQuery, IResponse } from 'models/api.model';
import { IServices } from 'models/services.model';
import { ActionType } from './common';

const signIn = createAsyncThunk<IQuery, IQuery, { extra: { services: IServices } }>(
    ActionType.SIGN_IN,
    async (request, { extra: { services } }) => {
        const { user, token } = (await services.auth.login(request)) as IResponse;

        services.storage.setItem(StorageKey.TOKEN, token as string);
        return user as IQuery;
    },
);

const signUp = createAsyncThunk<IQuery, IQuery, { extra: { services: IServices } }>(
    ActionType.SIGN_UP,
    async (request, { extra: { services } }) => {
        const { user, token } = (await services.auth.registration(request)) as IResponse;

        services.storage.setItem(StorageKey.TOKEN, token as string);
        return user as IQuery;
    },
);

const signOut = createAsyncThunk<null, void, { extra: { services: IServices } }>(
    ActionType.SIGN_OUT,
    (_request, { extra: { services } }) => {
        services.storage.removeItem(StorageKey.TOKEN);

        return null;
    },
);

const loadCurrentUser = createAsyncThunk<
    IResponse,
    void,
    { dispatch?: Dispatch; rejectValue: string; extra: { services: IServices } }
>(ActionType.AUTHENTICATED_USER, async (_request, { dispatch, rejectWithValue, extra: { services } }) => {
    try {
        return (await services.auth.getCurrentUser()) as IResponse;
    } catch (error) {
        const isHttpError = error instanceof HttpError;

        if (isHttpError && error.status === HttpCode.UNAUTHORIZED) {
            dispatch(signOut());
        }

        return rejectWithValue((error as Error).message ?? ExceptionMessage.UNKNOWN_ERROR);
    }
});

export { signIn, signUp, signOut, loadCurrentUser };
