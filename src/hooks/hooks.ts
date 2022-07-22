import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { IServices } from 'models/services.model';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from 'state/store';

export const useAppDispatch = (): ThunkDispatch<RootState, { services: IServices }, AnyAction> =>
    useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
