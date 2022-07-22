import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from 'router';
import Loader from 'components/common/loader/loader';
import { IRouterProps } from 'models/router.model';

const Router: React.FC<IRouterProps> = ({ hasToken, hasUser }): JSX.Element => {
    if (!hasUser && hasToken) {
        return <Loader />;
    }

    return (
        <Routes>
            {hasToken
                ? privateRoutes.map((route) => <Route path={route.path} element={route.element} key={route.path} />)
                : publicRoutes.map((route) => <Route path={route.path} element={route.element} key={route.path} />)}
        </Routes>
    );
};

export default Router;
