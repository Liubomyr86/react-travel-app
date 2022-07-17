import React from 'react';
import Button from '../common/button/button';
import Input from '../common/input/input';
import Label from '../common/label/label';

const SignIn = (): JSX.Element => {
    const classes = ['trip-popup__input', 'input', 'input__heading'];

    return (
        <main className='sign-in-page'>
            <h1 className='visually-hidden'>Travel App</h1>
            <form className='sign-in-form' autoComplete='off'>
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
                <a href='./sign-up.html' className='sign-in-form__link'>
                    Sign Up
                </a>
            </span>
        </main>
    );
};

export default SignIn;
