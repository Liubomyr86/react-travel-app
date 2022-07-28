import React, { useEffect } from 'react';
import Footer from 'components/footer/footer';
import Header from 'components/header/header';
import Router from 'components/router';
import { storage } from 'services/services';
import { StorageKey } from 'common/enums/app/storage-key';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import { profileActionCreator } from 'state/actions';
import ReduxToastr from 'react-redux-toastr';

const App = (): JSX.Element => {
    const dispatch = useAppDispatch();

    const hasToken = Boolean(storage.getItem(StorageKey.TOKEN));

    useEffect(() => {
        if (hasToken) {
            dispatch(profileActionCreator.loadCurrentUser());
        }
    }, [hasToken, dispatch]);

    return (
        <>
            <Header />
            <Router />
            <Footer />
            <ReduxToastr
                timeOut={4000}
                newestOnTop={true}
                preventDuplicates
                position='top-right'
                transitionIn='fadeIn'
                transitionOut='fadeOut'
                progressBar
                closeOnToastrClick
            />
        </>
    );
};

export default App;
