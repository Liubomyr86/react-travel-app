import React from 'react';
import Booking from '../common/booking/booking';
import data from '../../mocks/bookings.json';

const Bookings = (): JSX.Element => {
    const bookingsData = data.sort((a, b) => a.date.localeCompare(b.date));

    return (
        <main className='bookings-page'>
            <h1 className='visually-hidden'>Travel App</h1>
            <ul className='bookings__list'>
                {bookingsData.map((booking) => (
                    <Booking
                        key={booking.id}
                        title={booking.trip.title}
                        guests={booking.guests}
                        date={booking.date}
                        price={booking.totalPrice}
                    />
                ))}
            </ul>
        </main>
    );
};

export default Bookings;
