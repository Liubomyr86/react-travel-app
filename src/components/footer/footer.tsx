import React from 'react';
import heart from 'assets/icons/heart.svg';

const Footer = (): JSX.Element => {
    return (
        <footer className='footer'>
            <span className='footer__text'>
                from{' '}
                <a className='footer__link' href='https://binary-studio.com'>
                    binary studio
                </a>{' '}
                with
                <img className='footer__icon' src={heart} alt='heart icon' />
            </span>
        </footer>
    );
};

export default Footer;
