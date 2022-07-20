import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Context } from 'context';
import { privateRoutes, publicRoutes } from 'router';
import Loader from 'components/common/loader/loader';

const Router = (): JSX.Element => {
    const { isAuth, isLoading } = useContext(Context);

    if (isLoading) {
        return <Loader />;
    }
    // const isAuth = false;

    return (
        <Routes>
            {isAuth
                ? privateRoutes.map((route) => <Route path={route.path} element={route.element} key={route.path} />)
                : publicRoutes.map((route) => <Route path={route.path} element={route.element} key={route.path} />)}
        </Routes>
    );
};

export default Router;
