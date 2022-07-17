import React from 'react';
import { ISelectProps } from '../../../models/select.model';

const Select: React.FC<ISelectProps> = ({ options, defaultValue, name }): JSX.Element => {
    return (
        <select name={name}>
            <option disabled value=''>
                {defaultValue}
            </option>
            {options.map((option) => (
                <option key={option.value} value={option.value} dangerouslySetInnerHTML={{ __html: option.name }} />
            ))}
        </select>
    );
};

export default Select;
