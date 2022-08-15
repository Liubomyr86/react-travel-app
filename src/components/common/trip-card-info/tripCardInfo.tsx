import React from 'react';
import { ITripCardProps } from 'models/tripCard.model';

const TripCardInfo: React.FC<ITripCardProps> = ({ title, duration, level }) => {
    return (
        <div className='trip-info'>
            <h3 className='trip-info__title'>{title}</h3>
            <div className='trip-info__content'>
                <span className='trip-info__duration '>
                    <strong>{duration}</strong> days
                </span>
                <span className='trip-info__level'>{level}</span>
            </div>
        </div>
    );
};

export default TripCardInfo;
