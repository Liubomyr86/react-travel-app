import React from 'react';
import styles from './footer.module.css';
import heart from '../../assets/icons/heart.svg';

const Footer = (): JSX.Element => {
    return (
        <footer className={styles.footer}>
            <span className={styles.footerText}>
                from{' '}
                <a className={styles.footerLink} href='https://binary-studio.com'>
                    binary studio
                </a>{' '}
                with
                <img className={styles.footerIcon} src={heart} alt='heart icon' />
            </span>
        </footer>
    );
};

export default Footer;
