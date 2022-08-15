import { MouseEventHandler } from 'react';

export interface IBookingProps {
    title: string;
    guests: number;
    date: string;
    price: number;
    handleClick: MouseEventHandler;
}

export interface IBookingsData {
    id: string;
    userId: string;
    tripId: string;
    guests: number;
    date: string;
    trip: {
        title: string;
        duration: number;
        price: number;
    };
    totalPrice: number;
    createdAt: string;
}
