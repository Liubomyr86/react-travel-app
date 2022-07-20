import React, { FormEvent, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from 'context';
import Button from 'components/common/button/button';
import Input from 'components/common/input/input';
import Label from 'components/common/label/label';

const SignUp = (): JSX.Element => {
    const classes = ['trip-popup__input input', 'input__heading'];
    const { setIsAuth } = useContext(Context);
    const login = (event: FormEvent): void => {
        event.preventDefault();
        setIsAuth!(true);
        localStorage.setItem('auth', 'true');
    };

    return (
        <main className='sign-up-page'>
            <h1 className='visually-hidden'>Travel App</h1>
            <form className='sign-up-form' autoComplete='off' onSubmit={login}>
                <h2 className='sign-up-form__title'>Sign Up</h2>
                <Label inputHeadingName='Full name' classes={classes}>
                    <Input name='full-name' type='text' required={true} />
                </Label>
                <Label inputHeadingName='Email' classes={classes}>
                    <Input name='email' type='email' required={true} />
                </Label>
                <Label inputHeadingName='Password' classes={classes}>
                    <Input name='password' type='password' required={true} minLength={3} maxLength={20} />
                </Label>

                <Button type='submit'>Sign Up</Button>
            </form>
            <span>
                Already have an account?
                <Link to='/sign-in' className='sign-up-form__link'>
                    Sign In
                </Link>
            </span>
        </main>
    );
};

export default SignUp;
