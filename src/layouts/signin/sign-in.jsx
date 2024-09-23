import styles from './sign-in.module.css';

export default function SignIn() {
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
                        <input type="email" className='form-control' required />
                    </div>
                    <div className='form-group mb-2'>
                        <label htmlFor="email" className='form-label'>Password</label>
                        <input type="password" className='form-control' required />
                    </div>
                </div>
                <div>
                    <button className='btn btn-gold w-100'>Sign in</button>
                </div>
            </div>
        </div>
    );
}