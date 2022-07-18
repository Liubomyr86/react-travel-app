import React from 'react';
import Button from '../button/button';
import Input from '../input/input';
import Label from '../label/label';
import TripCardInfo from '../trip-card-info/tripCardInfo';
import styles from './modal.module.css';
import data from '../../../mocks/trips.json';
import { getCurrentDate } from '../../../helpers/index';

const Modal = (): JSX.Element => {
    const classes = ['trip-popup__input input', 'input__heading'];
    const currentDate = getCurrentDate();
    const tripData = data;
    const { title, duration, level } = tripData[0];

    return (
        <div hidden>
            <div className='modal'>
                <div className={styles.tripPopup}>
                    <Button classes={styles.tripPopupClose} flag={false}>
                        ×
                    </Button>
                    <form className={styles.tripPopupForm} autoComplete='off'>
                        <TripCardInfo title={title} duration={duration} level={level} />
                        <Label inputHeadingName='Date' classes={classes}>
                            <Input name='date' type='date' min={currentDate} required />
                        </Label>
                        <Label inputHeadingName='Number of guests' classes={classes}>
                            <Input name='guests' type='number' min={1} max={10} value='1' required />
                        </Label>
                        <span className={styles.tripPopupTotal}>
                            Total: <output className={styles.tripPopupTotalValue}>4000$</output>
                        </span>
                        <Button type='submit'> Book a trip</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;
