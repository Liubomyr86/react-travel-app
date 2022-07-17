import React from 'react';
import { ILableProps } from '../../../models/label.model';

const Label: React.FC<ILableProps> = ({ children, inputHeadingName, classes }): JSX.Element => {
    return (
        <label className={`${classes[0]}`}>
            <span className={classes[1]}>{inputHeadingName}</span>
            {children}
        </label>
    );
};

export default Label;
