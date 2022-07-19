import React, { ChangeEvent, FormEvent, useState } from 'react';
import Button from '../button/button';
import Input from '../input/input';
import Label from '../label/label';
import TripCardInfo from '../trip-card-info/tripCardInfo';
import styles from './modal.module.css';
import { getCurrentDate } from '../../../helpers/index';
import { IModalProps } from '../../../models/modal.model';

const Modal: React.FC<IModalProps> = ({ visible, setModal, title, duration, level, price }): JSX.Element => {
    const [totalPrice, setTotalPrice] = useState(price);
    const [inputValue, setInputValue] = useState('1');
    const classes = ['trip-popup__input input', 'input__heading'];
    const currentDate = getCurrentDate();

    const closeModal = (event: FormEvent): void => {
        event.preventDefault();
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
                <div className={styles.tripPopup}>
                    <Button classes={styles.tripPopupClose} flag={false} onClick={closeModal}>
                        ×
                    </Button>
                    <form className={styles.tripPopupForm} autoComplete='off' onSubmit={closeModal}>
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
                        <span className={styles.tripPopupTotal}>
                            Total: <output className={styles.tripPopupTotalValue}>{`${totalPrice} $`}</output>
                        </span>
                        <Button type='submit'> Book a trip</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;
