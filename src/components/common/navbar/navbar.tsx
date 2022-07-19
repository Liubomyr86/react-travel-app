import React, { useContext } from 'react';
import Button from '../button/button';
import briefcase from '../../../assets/icons/briefcase.svg';
import user from '../../../assets/icons/user.svg';
import { Link } from 'react-router-dom';
import { Context } from '../../../context';

const Navbar = (): JSX.Element => {
    const { setIsAuth } = useContext(Context);
    const logout = (): void => {
        setIsAuth!(false);
        localStorage.removeItem('auth');
    };

    return (
        <nav className='header__nav'>
            <ul className='nav-header__list'>
                <li className='nav-header__item' title='Bookings'>
                    <Link to='/bookings' className='nav-header__inner'>
                        <span className='visually-hidden'>Bookings</span>
                        <img src={briefcase} alt=' icon' />
                    </Link>
                </li>
                <li className='nav-header__item' title='Profile'>
                    <div className='nav-header__inner profile-nav' tabIndex={0}>
                        <span className='visually-hidden'>Profile</span>
                        <img src={user} alt='profile icon' />
                        <ul className='profile-nav__list'>
                            <li className='profile-nav__item'>John Doe</li>
                            <li className='profile-nav__item'>
                                <Button classes='profile-nav__sign-out' onClick={logout}>
                                    Sign Out
                                </Button>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
