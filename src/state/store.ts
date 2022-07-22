import { configureStore } from '@reduxjs/toolkit';
import { auth, http, storage } from 'services/services';
import { profileReducer } from './root-reduser';

const store = configureStore({
    reducer: { profile: profileReducer },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    services: {
                        http,
                        storage,
                        auth,
                    },
                },
            },
        }),
});

export { store };

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
