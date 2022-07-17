import React from 'react';
import { ITripCardDescriptionProps } from '../../../models/tripCard.model';

const TripCardDescription: React.FC<ITripCardDescriptionProps> = ({ classes, description }): JSX.Element => {
    return <div className={classes}>{description}</div>;
};

export default TripCardDescription;
