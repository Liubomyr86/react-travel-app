import React, { useContext, useState } from 'react';
import Button from '../common/button/button';
import TripCardDescription from '../common/trip-card-description/tripCardDescription';
import TripCardInfo from '../common/trip-card-info/tripCardInfo';
import TripCardPrice from '../common/trip-card-price/tripCardPrice';
import { Context } from '../../context';
import { useParams } from 'react-router-dom';
import Modal from '../common/modal/modal';

const TripPage = (): JSX.Element => {
    const { tripId } = useParams();
    const { data } = useContext(Context);
    const trip = data?.find((item) => item.id === tripId);
    const [tripData, setTripData] = useState(trip);
    const [modal, setModal] = useState(true);

    const { image, title, duration, level, price, description } = tripData!;

    return (
        <main className='trip-page'>
            <h1 className='visually-hidden'>Travel App</h1>
            <div className='trip'>
                <img src={image} className='trip__img' alt='trip image' />
                <div className='trip__content'>
                    <TripCardInfo title={title} duration={duration} level={level} />
                    <TripCardDescription classes='trip__description' description={description} />
                    <TripCardPrice price={price} />
                    <Button classes='trip__button' onClick={() => setModal(false)}>
                        Book a trip
                    </Button>
                </div>
            </div>
            <Modal
                visible={modal}
                setModal={setModal}
                title={title!}
                duration={duration!}
                level={level!}
                price={price!}
            />
        </main>
    );
};

export default TripPage;
