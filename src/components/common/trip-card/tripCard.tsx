import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ITripCardProps } from '../../../models/tripCard.model';
import Button from '../button/button';
import TripCardInfo from '../trip-card-info/tripCardInfo';
import TripCardPrice from '../trip-card-price/tripCardPrice';
import styles from './tripCard.module.css';

const TripCard: React.FC<ITripCardProps> = ({ image, title, duration, level, price, id }): JSX.Element => {
    const router = useNavigate();
    const goToTripPage = (): void => router(`trip/${id}`);

    return (
        <li className={styles.tripCard}>
            {image && <img src={image} alt='trip image' />}
            <div className={styles.tripCardContent}>
                <TripCardInfo title={title} duration={duration} level={level} />
                <TripCardPrice price={price} />
            </div>
            <Button onClick={goToTripPage}>Discover a trip</Button>
        </li>
    );
};

export default TripCard;
