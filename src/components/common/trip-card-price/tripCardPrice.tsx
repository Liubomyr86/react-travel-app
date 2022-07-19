import React from 'react';
import { ITripCardProps } from '../../../models/tripCard.model';

const TripCardPrice: React.FC<ITripCardProps> = ({ price }) => {
    return (
        <div className='trip-price'>
            <span>Price</span>
            <strong className='trip-price__value '>{`${price} $`}</strong>
        </div>
    );
};

export default TripCardPrice;
