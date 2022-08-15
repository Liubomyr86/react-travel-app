import { Dispatch, SetStateAction } from 'react';
import { ITripCardProps } from './tripCard.model';

export interface IContextValue {
    isAuth?: boolean;
    setIsAuth?: Dispatch<SetStateAction<boolean>>;
    isLoading?: boolean;
    data?: ITripCardProps[];
}
