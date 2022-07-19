import React, { FormEvent, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context';
import Button from '../common/button/button';
import Input from '../common/input/input';
import Label from '../common/label/label';
import styles from './signIn.module.css';

const SignIn = (): JSX.Element => {
    const classes = ['trip-popup__input input', 'input__heading'];
    const { setIsAuth } = useContext(Context);
    const login = (event: FormEvent): void => {
        event.preventDefault();
        setIsAuth!(true);
        localStorage.setItem('auth', 'true');
    };

    return (
        <main className={styles.signInPage}>
            <h1 className='visually-hidden'>Travel App</h1>
            <form className={styles.signInForm} autoComplete='off' onSubmit={login}>
                <h2 className={styles.signInFormTitle}>Sign In</h2>
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
                <Link to='/sign-up' className={styles.signInFormLink}>
                    Sign Up
                </Link>
            </span>
        </main>
    );
};

export default SignIn;
