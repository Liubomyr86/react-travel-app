import React, { useState } from 'react';
import Booking from 'components/common/booking/booking';
import data from 'mocks/bookings.json';
import { sortBookingsData } from 'helpers';

const Bookings = (): JSX.Element => {
    const bookingsData = sortBookingsData(data);
    const [sortedBookingsData, setSortedBookingsData] = useState(bookingsData);
    const deleteBooking = (id: string): void => {
        const sortedData = [...sortedBookingsData].filter((booking) => booking.id !== id);
        setSortedBookingsData(sortedData);
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
