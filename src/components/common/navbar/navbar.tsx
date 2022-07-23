import React, { useContext } from 'react';
import Button from 'components/common/button/button';
import briefcase from 'assets/icons/briefcase.svg';
import userIco from 'assets/icons/user.svg';
import { Link } from 'react-router-dom';
import { Context } from 'context';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import { profileActionCreator } from 'state/actions';

const Navbar = (): JSX.Element => {
    const { user } = useAppSelector((state) => ({ user: state.profile.user }));
    const dispatch = useAppDispatch();

    const logout = (): void => {
        dispatch(profileActionCreator.signOut());
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
                        <img src={userIco} alt='profile icon' />
                        <ul className='profile-nav__list'>
                            <li className='profile-nav__item'>{user ? user.fullName : 'User'}</li>
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
