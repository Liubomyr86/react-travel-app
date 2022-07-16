import React from 'react';
import Navbar from '../common/navbar/navbar';
import styles from './header.module.css';

const Header = (): JSX.Element => {
    return (
        <header className={styles.header}>
            <div className={styles.header__inner}>
                <a href='#' className={styles.header__logo}>
                    Travel App
                </a>
                <Navbar />
            </div>
        </header>
    );
};

export default Header;
