import React from 'react';
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
            <Main /> */}
            <TripPage />
            <Footer />
        </>
    );
};

export default App;
