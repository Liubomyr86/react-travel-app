import React from 'react';
import Input from '../common/input/input';
import Label from '../common/label/label';
import Select from '../common/select/select';

const Main = (): JSX.Element => {
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
            <section className='trips-filter'>
                <h2 className='visually-hidden'>Trips filter</h2>
                <form className='trips-filter__form' autoComplete='off'>
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
            <section className='trips'>
                <h2 className='visually-hidden'>Trips List</h2>
                <ul className='trip-list'>
                    <li className='trip-card'>
                        <img src='./assets/images/iceland.jpg' alt='trip image' />
                        <div className='trip-card__content'>
                            <div className='trip-info'>
                                <h3 className='trip-info__title'>Iceland</h3>
                                <div className='trip-info__content'>
                                    <span className='trip-info__duration'>
                                        <strong>15</strong> days
                                    </span>
                                    <span className='trip-info__level'>easy</span>
                                </div>
                            </div>
                            <div className='trip-price'>
                                <span>Price</span>
                                <strong className='trip-price__value'>7000 $</strong>
                            </div>
                        </div>
                        <a href='./trip.html' className='button'>
                            Discover a trip
                        </a>
                    </li>
                    <li className='trip-card'>
                        <img src='./assets/images/iceland.jpg' alt='trip image' />
                        <div className='trip-card__content'>
                            <div className='trip-info'>
                                <h3 className='trip-info__title'>Iceland</h3>
                                <div className='trip-info__content'>
                                    <span className='trip-info__duration'>
                                        <strong>15</strong> days
                                    </span>
                                    <span className='trip-info__level'>easy</span>
                                </div>
                            </div>
                            <div className='trip-price'>
                                <span>Price</span>
                                <strong className='trip-price__value'>7000 $</strong>
                            </div>
                        </div>
                        <a href='./trip.html' className='button'>
                            Discover a trip
                        </a>
                    </li>
                    <li className='trip-card'>
                        <img src='./assets/images/iceland.jpg' alt='trip image' />
                        <div className='trip-card__content'>
                            <div className='trip-info'>
                                <h3 className='trip-info__title'>Iceland</h3>
                                <div className='trip-info__content'>
                                    <span className='trip-info__duration'>
                                        <strong>15</strong> days
                                    </span>
                                    <span className='trip-info__level'>easy</span>
                                </div>
                            </div>
                            <div className='trip-price'>
                                <span>Price</span>
                                <strong className='trip-price__value'>7000 $</strong>
                            </div>
                        </div>
                        <a href='./trip.html' className='button'>
                            Discover a trip
                        </a>
                    </li>
                    <li className='trip-card'>
                        <img src='./assets/images/iceland.jpg' alt='trip image' />
                        <div className='trip-card__content'>
                            <div className='trip-info'>
                                <h3 className='trip-info__title'>Iceland</h3>
                                <div className='trip-info__content'>
                                    <span className='trip-info__duration'>
                                        <strong>15</strong> days
                                    </span>
                                    <span className='trip-info__level'>easy</span>
                                </div>
                            </div>
                            <div className='trip-price'>
                                <span>Price</span>
                                <strong className='trip-price__value'>7000 $</strong>
                            </div>
                        </div>
                        <a href='./trip.html' className='button'>
                            Discover a trip
                        </a>
                    </li>
                </ul>
            </section>
        </main>
    );
};

export default Main;
