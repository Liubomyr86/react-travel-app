import React from 'react';
import { ITripCardProps } from '../../../models/tripCard.model';
import styles from './tripCardInfo.module.css';

const TripCardInfo: React.FC<ITripCardProps> = ({ title, duration, level }) => {
    return (
        <div className={styles.tripInfo}>
            <h3 className={styles.tripInfoTitle}>{title}</h3>
            <div className={styles.tripInfoContent}>
                <span className={styles.tripInfoDuration}>
                    <strong>{duration}</strong> days
                </span>
                <span className={styles.tripInfoLevel}>{level}</span>
            </div>
        </div>
    );
};

export default TripCardInfo;
