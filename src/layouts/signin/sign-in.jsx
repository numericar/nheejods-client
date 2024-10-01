import styles from './sign-in.module.css';

import authService from '../../services/authService.js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function emailInputHandler(e) {
        const value = e.target.value;
        setEmail(value);
    }

    function passwordInputHandler(e) {
        const value = e.target.value;
        setPassword(value);
    }

    async function loginSubmitHandler() {
        const response = await authService.login(email, password);
        console.log(response.isSuccess)
        if (response.isSuccess) {
            navigate('/');
        }
    }

    return (
        <div className={`${styles.signInContainer} d-flex justify-content-center align-items-center`}>
            <div className={`${styles.formCard} rounded-5`}>
                <div className='mb-5'>
                    <h3>Sign In</h3>
                    <p>with your email account</p>
                </div>
                <div className='mb-5'>
                    <div className='form-group mb-2'>
                        <label htmlFor="email" className='form-label'>Email</label>
                        <input type="email" className='form-control' onChange={emailInputHandler} required />
                    </div>
                    <div className='form-group mb-2'>
                        <label htmlFor="email" className='form-label'>Password</label>
                        <input type="password" className='form-control' onChange={passwordInputHandler} required />
                    </div>
                </div>
                <div>
                    <button className='btn btn-gold w-100' onClick={loginSubmitHandler}>Sign in</button>
                </div>
            </div>
        </div>
    );
}