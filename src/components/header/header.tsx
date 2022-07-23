import React from 'react';
import { Link } from 'react-router-dom';
import { Context } from 'context';
import Navbar from 'components/common/navbar/navbar';
import { useAppSelector } from 'hooks/hooks';

const Header = (): JSX.Element => {
    const { user } = useAppSelector((state) => ({
        user: state.profile.user,
    }));

    const hasUser = Boolean(user);

    return (
        <header className='header'>
            <div className='header__inner'>
                <Link to='/' className='header__logo'>
                    Travel App
                </Link>
                {hasUser && <Navbar />}
            </div>
        </header>
    );
};

export default Header;
