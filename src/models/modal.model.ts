import { Dispatch, SetStateAction } from 'react';

export interface IModalProps {
    visible: boolean;
    setModal: Dispatch<SetStateAction<boolean>>;
}
