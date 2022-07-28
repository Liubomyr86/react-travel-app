import React, { ChangeEvent, FormEvent, useState } from 'react';
import Button from 'components/common/button/button';
import Input from 'components/common/input/input';
import Label from 'components/common/label/label';
import TripCardInfo from 'components/common/trip-card-info/tripCardInfo';
import { getTomorrowDate } from 'helpers/index';
import { IModalProps } from 'models/modal.model';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import { IResponse } from 'models/api.model';
import { bookingsActionCreator } from 'state/actions';

const Modal: React.FC<IModalProps> = ({ visible, setModal }): JSX.Element => {
    const { title, duration, level, price, userId, tripId } = useAppSelector((state) => ({
        title: (state.trips.trip as IResponse).title as string,
        duration: (state.trips.trip as IResponse).duration as number,
        level: (state.trips.trip as IResponse).level as string,
        price: (state.trips.trip as IResponse).price as number,
        tripId: (state.trips.trip as IResponse).id as string,
        userId: (state.profile.user as IResponse).id,
    }));

    const dispatch = useAppDispatch();

    const [totalPrice, setTotalPrice] = useState(price);
    const [inputValue, setInputValue] = useState('1');
    const classes = ['trip-popup__input input', 'input__heading'];
    const currentDate = getTomorrowDate();

    const closeModal = (event: FormEvent): void => {
        event.preventDefault();
        console.dir(event.target);

        const payload = {
            tripId: tripId,
            userId: String(userId),
            guests: Number(inputValue),
            date: ((event.target as HTMLFormElement)[0] as HTMLInputElement).valueAsDate!.toISOString(),
        };

        dispatch(bookingsActionCreator.addBooking(payload));
        setModal(true);
    };

    const changeTotalPrice = (event: ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value;
        const max = 10;
        const newValue = Number(value) < max ? value : max;
        setInputValue(newValue.toString());
        const updatePrice = price * Number(newValue);
        setTotalPrice(updatePrice);
    };

    return (
        <div hidden={visible}>
            <div className='modal'>
                <div className='trip-popup'>
                    <Button classes='trip-popup__close' flag={false} onClick={closeModal}>
                        ×
                    </Button>
                    <form className='trip-popup__form' autoComplete='off' onSubmit={closeModal}>
                        <TripCardInfo title={title} duration={duration} level={level} />
                        <Label inputHeadingName='Date' classes={classes}>
                            <Input name='date' type='date' min={currentDate} required />
                        </Label>
                        <Label inputHeadingName='Number of guests' classes={classes}>
                            <Input
                                name='guests'
                                type='number'
                                min={1}
                                max={10}
                                value={inputValue}
                                onChange={changeTotalPrice}
                                required
                            />
                        </Label>
                        <span className='trip-popup__total'>
                            Total: <output className='trip-popup__total-value'>{`${totalPrice} $`}</output>
                        </span>
                        <Button type='submit'> Book a trip</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;
