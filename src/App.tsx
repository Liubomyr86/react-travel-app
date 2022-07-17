import React from 'react';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import SignIn from './components/sign-in/signIn';
import SignUp from './components/sign-up/signUp';

const App = (): JSX.Element => {
    return (
        <>
            <Header />
            <SignUp />
            <SignIn />
            <Footer />
        </>
    );
};

export default App;
