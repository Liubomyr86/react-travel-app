import React from 'react';
import { formatDate } from 'helpers/index';
import { IBookingProps } from 'models/booking.model';
import Button from 'components/common/button/button';

const Booking: React.FC<IBookingProps> = ({ title, guests, date, price, handleClick }): JSX.Element => {
    const formattedDate = formatDate(date);

    return (
        <li className='booking'>
            <h3 className='booking__title'>{title}</h3>
            <span className='booking__guests'>{`${guests} guests`}</span>
            <span className='booking__date'>{formattedDate}</span>
            <span className='booking__total'>{`${price} $`}</span>
            <Button classes='booking__cancel' title='Cancel booking' flag={false} onClick={handleClick}>
                <span className='visually-hidden'>Cancel booking</span>×
            </Button>
        </li>
    );
};

export default Booking;
