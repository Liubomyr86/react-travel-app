import React, { useEffect, useMemo, useState } from 'react';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Router from './components/router';
import { Context } from './context';
import tripsData from './mocks/trips.json';

const App = (): JSX.Element => {
    const [data, setData] = useState(tripsData);
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const contextValue = useMemo(
        () => ({
            isAuth,
            setIsAuth,
            isLoading,
            data,
        }),
        [isAuth, isLoading],
    );

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true);
        }
        setIsLoading(false);
    }, []);

    return (
        <>
            <Context.Provider value={contextValue}>
                <Header />
                <Router />
                <Footer />
            </Context.Provider>
        </>
    );
};

export default App;
