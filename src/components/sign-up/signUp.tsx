import React from 'react';
import Button from '../common/button/button';
import Input from '../common/input/input';
import Label from '../common/label/label';
import styles from './signUp.module.css';

const SignUp = (): JSX.Element => {
    const classes = ['trip-popup__input input', 'input__heading'];

    return (
        <main className={styles.signUpPage}>
            <h1 className='visually-hidden'>Travel App</h1>
            <form className={styles.signUpForm} autoComplete='off'>
                <h2 className={styles.signUpFormTitle}>Sign Up</h2>
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
                <a href='#' className={styles.signUpFormLink}>
                    Sign In
                </a>
            </span>
        </main>
    );
};

export default SignUp;
