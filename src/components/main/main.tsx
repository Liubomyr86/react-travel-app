import React from 'react';
import Input from '../common/input/input';
import Label from '../common/label/label';
import Select from '../common/select/select';
import data from '../../mocks/trips.json';
import TripCard from '../common/trip-card/tripCard';
import styles from './main.module.css';

const Main = (): JSX.Element => {
    const tripData = data;

    const inputClasses = ['trips-filter__search input', 'visually-hidden'];
    const selectClasses = ['select', 'visually-hidden'];
    const durationOptions = [
        { value: '0_x_5', name: '&lt; 5 days' },
        { value: '5_x_10', name: '&lt; 10 days' },
        { value: '10_x', name: '&ge; 10 days' },
    ];
    const levelOptions = [
        { value: 'easy', name: 'easy' },
        { value: 'moderate', name: 'moderate' },
        { value: 'difficult', name: 'difficult' },
    ];

    return (
        <main>
            <h1 className='visually-hidden'>Travel App</h1>
            <section className={styles.tripsFilter}>
                <h2 className='visually-hidden'>Trips filter</h2>
                <form className={styles.tripsFilterForm} autoComplete='off'>
                    <Label inputHeadingName='Search by name' classes={inputClasses}>
                        <Input name='search' type='search' placeholder='search by title' />
                    </Label>
                    <Label inputHeadingName='Search by duration' classes={selectClasses}>
                        <Select options={durationOptions} defaultValue='duration' name='duration' />
                    </Label>
                    <Label inputHeadingName='Search by level' classes={selectClasses}>
                        <Select options={levelOptions} defaultValue='level' name='level' />
                    </Label>
                </form>
            </section>
            <section className={styles.trips}>
                <h2 className='visually-hidden'>Trips List</h2>
                <ul className={styles.tripList}>
                    {tripData.map((tripCard) => (
                        <TripCard
                            key={tripCard.id}
                            image={tripCard.image}
                            title={tripCard.title}
                            duration={tripCard.duration}
                            level={tripCard.level}
                            price={tripCard.price}
                        />
                    ))}
                </ul>
            </section>
        </main>
    );
};

export default Main;
