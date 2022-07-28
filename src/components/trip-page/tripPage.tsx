import React, { useCallback, useEffect, useState } from 'react';
import Button from 'components/common/button/button';
import TripCardDescription from 'components/common/trip-card-description/tripCardDescription';
import TripCardInfo from 'components/common/trip-card-info/tripCardInfo';
import TripCardPrice from 'components/common/trip-card-price/tripCardPrice';
import { useParams } from 'react-router-dom';
import Modal from 'components/common/modal/modal';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import { tripsActionCreator } from 'state/actions';
import { ITripCardProps } from 'models/tripCard.model';
import Loader from 'components/common/loader/loader';

const TripPage = (): JSX.Element => {
    const dispatch = useAppDispatch();

    const { trip } = useAppSelector((state) => ({ trip: state.trips.trip as ITripCardProps }));
    const { tripId } = useParams();
    const hasTrip = Boolean(trip);

    useEffect(() => {
        dispatch(tripsActionCreator.loadTrip(tripId!));
    }, [hasTrip, tripId]);

    const [modal, setModal] = useState(true);

    if (!hasTrip || tripId !== trip.id) {
        return <Loader />;
    }

    return (
        <main className='trip-page'>
            <h1 className='visually-hidden'>Travel App</h1>
            <div className='trip'>
                <img src={trip.image} className='trip__img' alt='trip image' />
                <div className='trip__content'>
                    <TripCardInfo title={trip.title} duration={trip.duration} level={trip.level} />
                    <TripCardDescription classes='trip__description' description={trip.description} />
                    <TripCardPrice price={trip.price} />
                    <Button classes='trip__button' onClick={() => setModal(false)}>
                        Book a trip
                    </Button>
                </div>
            </div>
            <Modal visible={modal} setModal={setModal} />
        </main>
    );
};

export default TripPage;
