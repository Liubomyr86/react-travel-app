import { configureStore } from '@reduxjs/toolkit';
import { auth, bookings, http, storage, trips } from 'services/services';
import { bookingsReducer, profileReducer, toastrReducer, tripsReducer } from './root-reducer';

const store = configureStore({
    reducer: { profile: profileReducer, trips: tripsReducer, bookings: bookingsReducer, toastr: toastrReducer },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    services: {
                        http,
                        storage,
                        auth,
                        trips,
                        bookings,
                    },
                },
            },
        }),
});

export { store };

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
