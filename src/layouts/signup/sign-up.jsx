import styles from './sign-up.module.css';
import authService from '../../services/authService';
import { useEffect, useState } from 'react';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [passwordNotMatchError, setPasswordNotMatchError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    
    useEffect(confirmPasswordMatch, [password, confirmPassword]);

    function emailInputHandler(e) {
        const value = e.target.value;
        setEmail(value);
    }

    function passwordInputHandler(e) {
        const value = e.target.value;
        setPassword(value);
    }

    function confirmPasswordInputHandler(e) {
        const value = e.target.value;
        setConfirmPassword(value);
    }

    async function submitButtonHandler() {
        console.log(`${email} ${password} ${confirmPassword}`);
        const response = await authService.register(email, password);
        if (response.isSuccess) {
            setIsSuccess(true);
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        }
    }

    function confirmPasswordMatch() {
        if (password != confirmPassword) {
            setPasswordNotMatchError(true);
        } else {
            setPasswordNotMatchError(false);
        }
    }

    return (
        <div className={`${styles.signUpContainer} d-flex justify-content-center align-items-center`}>
            <div className={`${styles.formCard} rounded-5`}>
                <div className='mb-5'>
                    <h3>Sign Up</h3>
                    <p>with your email account</p>
                </div>
                <div className='mb-5'>
                    <div className='form-group mb-2'>
                        <label htmlFor="email" className='form-label'>Email</label>
                        <input type="email" className='form-control' value={email} onChange={emailInputHandler} required />
                    </div>
                    <div className='form-group mb-2'>
                        <label htmlFor="email" className='form-label'>Password</label>
                        <input type="password" className='form-control' value={password} onChange={passwordInputHandler} required />
                    </div>
                    <div className='form-group mb-2'>
                        <label htmlFor="email" className='form-label'>Confirm password</label>
                        <input type="password" className='form-control' value={confirmPassword} onChange={confirmPasswordInputHandler} required />
                    </div>
                </div>
                {passwordNotMatchError && (
                    <div className='mb-4'>
                        <p className='alert alert-danger'>Password not matched</p>
                    </div>
                )}
                {isSuccess && (
                    <div>
                        <p className='alert alert-success'>Sign up successful</p>
                    </div>
                )}
                <div>
                    <button className='btn btn-gold w-100' onClick={submitButtonHandler}>Sign Up</button>
                </div>
            </div>
        </div>
    )
}