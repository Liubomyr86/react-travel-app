import { createContext } from 'react';
import { IContextValue } from '../models/context.model';

export const Context = createContext<IContextValue>({});
