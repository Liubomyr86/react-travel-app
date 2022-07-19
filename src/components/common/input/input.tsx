import React from 'react';
import { IInputProps } from '../../../models/input.model';

const Input: React.FC<IInputProps> = ({
    name,
    type,
    required,
    placeholder,
    minLength,
    maxLength,
    max,
    min,
    value,
    onChange,
}): JSX.Element => {
    return (
        <input
            name={name}
            type={type}
            required={required}
            placeholder={placeholder}
            minLength={minLength}
            maxLength={maxLength}
            max={max}
            min={min}
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;
