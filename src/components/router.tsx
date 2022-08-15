import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from 'router';
import Loader from 'components/common/loader/loader';
import { useAppSelector } from 'hooks/hooks';
import { storage } from 'services/services';
import { StorageKey } from 'common/enums/app/storage-key';

const Router = (): JSX.Element => {
    const { status } = useAppSelector((state) => ({
        status: state.profile.status,
    }));
    const isAuth = Boolean(storage.getItem(StorageKey.TOKEN));

    return status === 'loading' ? (
        <Loader />
    ) : (
        <Routes>
            {isAuth
                ? privateRoutes.map((route) => <Route path={route.path} element={route.element} key={route.path} />)
                : publicRoutes.map((route) => <Route path={route.path} element={route.element} key={route.path} />)}
        </Routes>
    );
};

export default Router;
