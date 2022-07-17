import React from 'react';
import Button from '../common/button/button';
import TripCardDescription from '../common/trip-card-description/tripCardDescription';
import styles from './tripPage.module.css';
import data from '../../mocks/trips.json';
import TripCardInfo from '../common/trip-card-info/tripCardInfo';
import TripCardPrice from '../common/trip-card-price/tripCardPrice';

const TripPage = (): JSX.Element => {
    const tripData = data;
    const { image, title, duration, level, price, description } = tripData[0];
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
