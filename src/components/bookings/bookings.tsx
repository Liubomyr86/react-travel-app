import React, { useCallback, useEffect, useState } from 'react';
import Booking from 'components/common/booking/booking';
import { sortBookingsData } from 'helpers';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import { bookingsActionCreator } from 'state/actions';
import { IBookingsData } from 'models/booking.model';

const Bookings = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const { bookings } = useAppSelector((state) => ({
        bookings: state.bookings.bookings as unknown as IBookingsData[],
    }));
    const hasBookings = Boolean(bookings.length);
    const [sortedBookingsData, setSortedBookingsData] = useState(bookings);
    const loadBookings = useCallback(() => {
        dispatch(bookingsActionCreator.loadBookings());
    }, [dispatch]);

    useEffect(() => {
        loadBookings();
        if (hasBookings) setSortedBookingsData(sortBookingsData([...bookings]));
    }, [loadBookings, hasBookings]);

    const deleteBooking = (id: string): void => {
        const sortedData = [...sortedBookingsData].filter((booking) => booking.id !== id);
        setSortedBookingsData(sortedData);
        dispatch(bookingsActionCreator.removeBooking(id));
    };

    return (
        <main className='bookings-page'>
            <h1 className='visually-hidden'>Travel App</h1>
            <ul className='bookings__list'>
                {sortedBookingsData.map((booking) => (
                    <Booking
                        key={booking.id}
                        title={booking.trip.title}
                        guests={booking.guests}
                        date={booking.date}
                        price={booking.totalPrice}
                        handleClick={() => deleteBooking(booking.id)}
                    />
                ))}
            </ul>
        </main>
    );
};

export default Bookings;
