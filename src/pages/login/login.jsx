import styles from './login.module.css';

export function Login() {
    return (
        <div className={styles.signinContainer}>
            <div className={styles.formCardContainer}>
                <div className={styles.formCardHeader}>
                    <h1 className={styles.cardHeaderTitle}>Sign in</h1>
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
                </div>
                <div className={styles.cardBottom}>
                    <button type='button' className={styles.btnHignlight}>Sign in</button>
                </div>
            </div>
        </div>
    )
}