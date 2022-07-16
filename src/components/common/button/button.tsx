import React from 'react';
import { IButtonProps } from '../../../models/button.model';
import styles from './button.module.css';

const Button: React.FC<IButtonProps> = ({ children, style }): JSX.Element => {
    return <button className={`${styles.button} ${style}`}>{children}</button>;
};

export default Button;
