import { IBookingsData } from '../../../models/booking.model';

export const sortBookingsData = (data: IBookingsData[]): IBookingsData[] =>
    data.sort((a, b) => a.date.localeCompare(b.date));
