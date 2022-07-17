import React from 'react';
import Button from '../button/button';
import styles from './navbar.module.css';
import briefcase from '../../../assets/icons/briefcase.svg';
import user from '../../../assets/icons/user.svg';

const Navbar = (): JSX.Element => {
    return (
        <nav className={styles.headerNav}>
            <ul className={styles.navHeaderList}>
                <li className={styles.navHeaderItem} title='Bookings'>
                    <a href='#' className={styles.navHeaderInner}>
                        <span className='visually-hidden'>Bookings</span>
                        <img src={briefcase} alt=' icon' />
                    </a>
                </li>
                <li className={styles.navHeaderItem} title='Profile'>
                    <div className={`${styles.navHeaderInner} ${styles.profileNav}`} tabIndex={0}>
                        <span className='visually-hidden'>Profile</span>
                        <img src={user} alt='profile icon' />
                        <ul className={styles.profileNavList}>
                            <li className={styles.profileNavItem}>John Doe</li>
                            <li className={styles.profileNavItem}>
                                <Button classes={styles.profileNavSignOut}>Sign Out</Button>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
