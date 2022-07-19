import { Navigate } from 'react-router-dom';

import TripPage from '../components/trip-page/tripPage';
import SignIn from '../components/sign-in/signIn';
import SignUp from '../components/sign-up/signUp';
import Main from '../components/main/main';
import Bookings from '../components/bookings/bookings';

export const privateRoutes: { path: string; element: JSX.Element }[] = [
    { path: '/', element: <Main /> },
    { path: 'trip/:tripId', element: <TripPage /> },
    { path: 'bookings', element: <Bookings /> },
    { path: '*', element: <Navigate to='/' replace /> },
];

export const publicRoutes: { path: string; element: JSX.Element }[] = [
    { path: '/', element: <SignIn /> },
    { path: 'sign-in', element: <SignIn /> },
    { path: 'sign-up', element: <SignUp /> },
    { path: '*', element: <Navigate to='sign-in' replace /> },
];
