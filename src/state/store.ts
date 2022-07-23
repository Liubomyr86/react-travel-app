import { configureStore } from '@reduxjs/toolkit';
import { auth, http, storage, trips } from 'services/services';
import { profileReducer, tripsReducer } from './root-reducer';

const store = configureStore({
    reducer: { profile: profileReducer, trips: tripsReducer },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    services: {
                        http,
                        storage,
                        auth,
                        trips,
                    },
                },
            },
        }),
});

export { store };

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
