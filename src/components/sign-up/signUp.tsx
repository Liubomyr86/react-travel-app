import React from 'react';
import Button from '../common/button/button';
import Input from '../common/input/input';
import Label from '../common/label/label';

const SignUp = (): JSX.Element => {
    const classes = ['trip-popup__input input', 'input__heading'];

    return (
        <main className='sign-up-page'>
            <h1 className='visually-hidden'>Travel App</h1>
            <form className='sign-up-form' autoComplete='off'>
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
                <a href='#' className='sign-up-form__link'>
                    Sign In
                </a>
            </span>
        </main>
    );
};

export default SignUp;
