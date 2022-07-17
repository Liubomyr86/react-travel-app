import React from 'react';
import { IButtonProps } from '../../../models/button.model';
import styles from './button.module.css';

const Button: React.FC<IButtonProps> = ({ children, type, classes, flag = true }): JSX.Element => {
    return (
        <button className={`${flag ? styles.button : ''} ${classes || ''}`} type={type ? 'submit' : 'button'}>
            {children}
        </button>
    );
};

export default Button;
