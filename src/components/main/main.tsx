import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { filterByDuration, filterByLevel, filterBySearchValue } from 'helpers';
import Input from 'components/common/input/input';
import Label from 'components/common/label/label';
import Select from 'components/common/select/select';
import TripCard from 'components/common/trip-card/tripCard';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import { ITripCardProps } from 'models/tripCard.model';
import { tripsActionCreator } from 'state/actions';
import Loader from 'components/common/loader/loader';

const Main = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const { trips, status } = useAppSelector((state) => ({
        trips: state.trips.trips as ITripCardProps[],
        status: state.trips.status,
    }));
    const hasTrips = Boolean(trips.length);

    const [initialData, setInitialData] = useState(trips);
    const [tripsData, setTripsData] = useState(trips);
    const [searchValue, setSearchValue] = useState('');
    const [durationValue, setDurationValue] = useState('');
    const [levelValue, setLevelValue] = useState('');

    const loadTrips = useCallback(() => {
        dispatch(tripsActionCreator.loadTrips());
    }, [dispatch]);

    useEffect(() => {
        loadTrips();
        if (hasTrips) {
            setInitialData(trips);
            setTripsData(trips);
        }
    }, [loadTrips, hasTrips]);

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value;
        setSearchValue(value);
        let filteredData = filterBySearchValue([...initialData!], value);
        filteredData = filterByLevel(filteredData, levelValue);
        filteredData = filterByDuration(filteredData, durationValue);
        setTripsData(filteredData);
    };

    const handleDurationChange = (event: ChangeEvent<HTMLSelectElement>): void => {
        const value = event.target.value;
        setDurationValue(value);
        let filteredData = filterByDuration([...initialData!], value);
        filteredData = filterByLevel(filteredData, levelValue);
        filteredData = filterBySearchValue(filteredData, searchValue);
        setTripsData(filteredData);
    };

    const handleLevelChange = (event: ChangeEvent<HTMLSelectElement>): void => {
        const value = event.target.value;
        setLevelValue(value);
        let filteredData = filterByLevel([...initialData!], value);
        filteredData = filterByDuration(filteredData, durationValue);
        filteredData = filterBySearchValue(filteredData, searchValue);
        setTripsData(filteredData);
    };

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

    return status === 'loading' ? (
        <Loader />
    ) : (
        <main>
            <h1 className='visually-hidden'>Travel App</h1>
            <section className='trips-filter'>
                <h2 className='visually-hidden'>Trips filter</h2>
                <form className='trips-filter__form' autoComplete='off'>
                    <Label inputHeadingName='Search by name' classes={inputClasses}>
                        <Input
                            name='search'
                            type='search'
                            placeholder='search by title'
                            value={searchValue}
                            onChange={handleSearchChange}
                        />
                    </Label>
                    <Label inputHeadingName='Search by duration' classes={selectClasses}>
                        <Select
                            options={durationOptions}
                            defaultValue='duration'
                            name='duration'
                            value={durationValue}
                            onChange={handleDurationChange}
                        />
                    </Label>
                    <Label inputHeadingName='Search by level' classes={selectClasses}>
                        <Select
                            options={levelOptions}
                            defaultValue='level'
                            name='level'
                            value={levelValue}
                            onChange={handleLevelChange}
                        />
                    </Label>
                </form>
            </section>
            <section className='trips'>
                <h2 className='visually-hidden'>Trips List</h2>
                <ul className='trip-list'>
                    {tripsData.map((tripCard) => (
                        <TripCard
                            key={tripCard.id}
                            image={tripCard.image}
                            title={tripCard.title}
                            duration={tripCard.duration}
                            level={tripCard.level}
                            price={tripCard.price}
                            id={tripCard.id}
                        />
                    ))}
                </ul>
            </section>
        </main>
    );
};

export default Main;
