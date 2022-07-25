import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from 'router';
import Loader from 'components/common/loader/loader';
import { useAppSelector } from 'hooks/hooks';

const Router = (): JSX.Element => {
    const { user, status } = useAppSelector((state) => ({ status: state.profile.status, user: state.profile.user }));
    const hasUser = Boolean(user);

    return status === 'loading' ? (
        <Loader />
    ) : (
        <Routes>
            {hasUser
                ? privateRoutes.map((route) => <Route path={route.path} element={route.element} key={route.path} />)
                : publicRoutes.map((route) => <Route path={route.path} element={route.element} key={route.path} />)}
        </Routes>
    );
};

export default Router;
