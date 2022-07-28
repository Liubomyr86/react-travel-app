import React from 'react';
import { IButtonProps } from 'models/button.model';

const Button: React.FC<IButtonProps> = ({ children, type, classes, flag = true, onClick }): JSX.Element => {
    return (
        <button
            className={`${flag ? 'button' : ''} ${classes || ''}`}
            type={type ? 'submit' : 'button'}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
