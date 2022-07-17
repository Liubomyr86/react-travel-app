import React from 'react';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import SignUp from './components/sign-up/signUp';

const App = (): JSX.Element => {
    return (
        <>
            <Header />
            <SignUp />
            <Footer />
        </>
    );
};

export default App;
