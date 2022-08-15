import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/common/button/button';
import Input from 'components/common/input/input';
import Label from 'components/common/label/label';
import { useAppDispatch } from 'hooks/hooks';
import { profileActionCreator } from 'state/actions';
import { isEmailValid } from 'helpers';

const SignUp = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const [emailInputValue, setEmailInputValue] = useState('');
    const [emailError, setEmailError] = useState(false);
    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value;
        setEmailError(false);
        setEmailInputValue(value);
    };

    const login = (event: FormEvent): void => {
        event.preventDefault();
        if (!isEmailValid(emailInputValue)) {
            setEmailError(true);
            return;
        }
        const payload = {
            fullName: ((event.target as HTMLFormElement)[0] as HTMLInputElement).value,
            email: ((event.target as HTMLFormElement)[1] as HTMLInputElement).value,
            password: ((event.target as HTMLFormElement)[2] as HTMLInputElement).value,
        };
        dispatch(profileActionCreator.signUp(payload));
    };

    const classes = ['trip-popup__input input', 'input__heading'];

    return (
        <main className='sign-up-page'>
            <h1 className='visually-hidden'>Travel App</h1>
            <form className='sign-up-form' autoComplete='off' onSubmit={login}>
                <h2 className='sign-up-form__title'>Sign Up</h2>
                <Label inputHeadingName='Full name' classes={classes}>
                    <Input name='full-name' type='text' required={true} />
                </Label>
                <Label inputHeadingName='Email' classes={classes}>
                    <Input
                        name='email'
                        type='email'
                        required={true}
                        onChange={handleEmailChange}
                        value={emailInputValue}
                    />
                    {emailError && <span style={{ color: 'red' }}>Email format is not valid</span>}
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
