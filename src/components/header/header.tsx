import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from 'context';
import Navbar from 'components/common/navbar/navbar';

const Header = (): JSX.Element => {
    const { isAuth } = useContext(Context);

    return (
        <header className='header'>
            <div className='header__inner'>
                <Link to='/' className='header__logo'>
                    Travel App
                </Link>
                {isAuth && <Navbar />}
            </div>
        </header>
    );
};

export default Header;
