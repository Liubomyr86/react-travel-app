import React, { useEffect } from 'react';
import Footer from 'components/footer/footer';
import Header from 'components/header/header';
import Router from 'components/router';
import { storage } from 'services/services';
import { StorageKey } from 'common/enums/app/storage-key';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import { profileActionCreator } from 'state/actions';

const App = (): JSX.Element => {
    const { user } = useAppSelector((state) => ({
        user: state.profile.user,
    }));
    const dispatch = useAppDispatch();

    const hasToken = Boolean(storage.getItem(StorageKey.TOKEN));
    const hasUser = Boolean(user);

    useEffect(() => {
        if (hasToken) {
            dispatch(profileActionCreator.loadCurrentUser());
            console.log(hasToken);
        }
    }, [hasToken, dispatch]);

    return (
        <>
            <Header />
            <Router hasUser={hasUser} hasToken={hasToken} />
            <Footer />
        </>
    );
};

export default App;
