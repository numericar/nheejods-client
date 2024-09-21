import styles from './register.module.css';

export default function Register() {
    return (
        <div className={styles.signupContainer}>
            <div className={styles.formCardContainer}>
                <div className={styles.formCardHeader}>
                    <h1 className={styles.cardHeaderTitle}>Sign up</h1>
                    <p>with your email account</p>
                </div>
                <div className={styles.formCardBody}>
                    <div className={styles.cardInputGroup}>
                        <label htmlFor='email' className={styles.cardLabel}>Email</label>
                        <input type='email' className={styles.cardInput} required/>
                    </div>
                    <div className={styles.cardInputGroup}>
                        <label htmlFor='password' className={styles.cardLabel}>Password</label>
                        <input type='password' className={styles.cardInput} required/>
                    </div>
                    <div className={styles.cardInputGroup}>
                        <label htmlFor='password' className={styles.cardLabel}>Confirm password</label>
                        <input type='password' className={styles.cardInput} required/>
                    </div>
                </div>
                <div className={styles.cardBottom}>
                    <button type='button' className={styles.btnHignlight}>Sign up</button>
                </div>
            </div>
        </div>
    )
}