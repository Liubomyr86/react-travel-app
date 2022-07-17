import React from 'react';
import { ITripCardProps } from '../../../models/tripCard.model';
import styles from './tripCardPrice.module.css';

const TripCardPrice: React.FC<ITripCardProps> = ({ price }) => {
    return (
        <div className={styles.tripPrice}>
            <span>Price</span>
            <strong className={styles.tripPriceValue}>{`${price} $`}</strong>
        </div>
    );
};

export default TripCardPrice;
