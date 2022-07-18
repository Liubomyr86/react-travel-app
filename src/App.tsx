import React from 'react';
import Bookings from './components/bookings/bookings';
import Modal from './components/common/modal/modal';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Main from './components/main/main';
import SignIn from './components/sign-in/signIn';
import SignUp from './components/sign-up/signUp';
import TripPage from './components/trip-page/tripPage';

const App = (): JSX.Element => {
    return (
        <>
            <Header />
            {/* <SignUp />
            <SignIn />
            <Main />
            <TripPage />
            <Modal /> */}
            <Bookings />
            <Footer />
        </>
    );
};

export default App;
