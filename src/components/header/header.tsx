import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context';
import Navbar from '../common/navbar/navbar';
import styles from './header.module.css';

const Header = (): JSX.Element => {
    const { isAuth } = useContext(Context);

    return (
        <header className={styles.header}>
            <div className={styles.headerInner}>
                <Link to='/' className={styles.headerLogo}>
                    Travel App
                </Link>
                {isAuth && <Navbar />}
            </div>
        </header>
    );
};

export default Header;
