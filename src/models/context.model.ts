import { ITripCardProps } from './tripCard.model';

export interface IContextValue {
    isAuth?: boolean;
    setIsAuth?: (isAuth: boolean) => void;
    isLoading?: boolean;
    data?: ITripCardProps[];
}
