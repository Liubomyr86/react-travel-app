import { SelectHTMLAttributes } from 'react';

export interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    options: { value: string; name: string }[];
    defaultValue: string;
}
