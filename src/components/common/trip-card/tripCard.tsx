import React from 'react';
import { ITripCardProps } from '../../../models/tripCard.model';
import Button from '../button/button';
import styles from './tripCard.module.css';

const TripCard: React.FC<ITripCardProps> = ({ image, title, duration, level, price }) => {
    return (
        <li className={styles.tripCard}>
            <img src={image} alt='trip image' />
            <div className={styles.tripCardContent}>
                <div className={styles.tripInfo}>
                    <h3 className={styles.tripInfoTitle}>{title}</h3>
                    <div className={styles.tripInfoContent}>
                        <span className={styles.tripInfoDuration}>
                            <strong>{duration}</strong> days
                        </span>
                        <span className={styles.tripInfoLevel}>{level}</span>
                    </div>
                </div>
                <div className={styles.tripPrice}>
                    <span>Price</span>
                    <strong className={styles.tripPriceValue}>{`${price} $`}</strong>
                </div>
            </div>
            <Button>Discover a trip</Button>
        </li>
    );
};

export default TripCard;
