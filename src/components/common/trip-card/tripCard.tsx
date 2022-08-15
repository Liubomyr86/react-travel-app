import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ITripCardProps } from 'models/tripCard.model';
import Button from 'components/common/button/button';
import TripCardInfo from 'components/common/trip-card-info/tripCardInfo';
import TripCardPrice from 'components/common/trip-card-price/tripCardPrice';

const TripCard: React.FC<ITripCardProps> = ({ image, title, duration, level, price, id }): JSX.Element => {
    const router = useNavigate();
    const goToTripPage = (): void => router(`trip/${id}`);

    return (
        <li className='trip-card'>
            {image && <img src={image} alt='trip image' />}
            <div className='trip-card__content'>
                <TripCardInfo title={title} duration={duration} level={level} />
                <TripCardPrice price={price} />
            </div>
            <Button onClick={goToTripPage}>Discover a trip</Button>
        </li>
    );
};

export default TripCard;
