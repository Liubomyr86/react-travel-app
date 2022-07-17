import React from 'react';
import { IInputProps } from '../../../models/input.model';

const Input: React.FC<IInputProps> = ({ name, type, required, placeholder, minLength, maxLength }): JSX.Element => {
    return (
        <input
            name={name}
            type={type}
            required={required}
            placeholder={placeholder}
            minLength={minLength}
            maxLength={maxLength}
        />
    );
};

export default Input;
