import React, { useContext, useState } from 'react';
import Button from '../common/button/button';
import TripCardDescription from '../common/trip-card-description/tripCardDescription';
import styles from './tripPage.module.css';
import TripCardInfo from '../common/trip-card-info/tripCardInfo';
import TripCardPrice from '../common/trip-card-price/tripCardPrice';
import { Context } from '../../context';
import { useParams } from 'react-router-dom';

const TripPage = (): JSX.Element => {
    const { tripId } = useParams();
    const { data } = useContext(Context);
    const trip = data?.find((item) => item.id === tripId);
    const [tripData, setTripData] = useState(trip);
    const { image, title, duration, level, price, description } = tripData!;

    return (
        <main className={styles.tripPage}>
            <h1 className='visually-hidden'>Travel App</h1>
            <div className={styles.trip}>
                <img src={image} className={styles.tripImg} alt='trip image' />
                <div className={styles.tripContent}>
                    <TripCardInfo title={title} duration={duration} level={level} />
                    <TripCardDescription classes={styles.tripDescription} description={description} />
                    <TripCardPrice price={price} />
                    <Button classes={styles.tripButton}>Book a trip</Button>
                </div>
            </div>
        </main>
    );
};

export default TripPage;
