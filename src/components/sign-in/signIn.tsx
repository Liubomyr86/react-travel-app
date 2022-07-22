import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/common/button/button';
import Input from 'components/common/input/input';
import Label from 'components/common/label/label';
import { profileActionCreator } from 'state/actions';
import { useAppDispatch } from 'hooks/hooks';

const SignIn = (): JSX.Element => {
    const dispatch = useAppDispatch();

    const login = (event: FormEvent): void => {
        event.preventDefault();
        const payload = {
            email: ((event.target as HTMLFormElement)[0] as HTMLInputElement).value,
            password: ((event.target as HTMLFormElement)[1] as HTMLInputElement).value,
        };
        dispatch(profileActionCreator.signIn(payload));
    };

    const classes = ['trip-popup__input input', 'input__heading'];

    return (
        <main className='sign-in-page'>
            <h1 className='visually-hidden'>Travel App</h1>
            <form className='sign-in-form' autoComplete='off' onSubmit={login}>
                <h2 className='sign-in-form__title'>Sign In</h2>
                <Label inputHeadingName='Email' classes={classes}>
                    <Input name='email' type='email' required={true} />
                </Label>
                <Label inputHeadingName='Password' classes={classes}>
                    <Input
                        name='password'
                        type='password'
                        autoComplete='new-password'
                        required={true}
                        minLength={3}
                        maxLength={20}
                    />
                </Label>
                <Button type='submit'>Sign In</Button>
            </form>
            <span>
                Don&apos;t have an account?
                <Link to='/sign-up' className='sign-in-form__link'>
                    Sign Up
                </Link>
            </span>
        </main>
    );
};

export default SignIn;
