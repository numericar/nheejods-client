import styles from './box-item.module.css';

export default function BoxItem() {
    return (
        <div className={styles.boxItemContainer}>
            <div className='d-flex justify-content-between'>
                <div>
                    <p>2024-06</p>
                    <div>
                        <span>remaining</span>
                        <h4>24500</h4>
                    </div>
                </div>
                <div className='w-50'>
                    <div className={`${styles.barContainer} d-flex gap-2`}>
                        <div className={styles.barItemGreen}></div>
                        <div className={styles.barItemYellow}></div>
                        <div className={styles.barItemRed}></div>
                        <div className={styles.barItemDark}></div>
                    </div>
                    <h2>38.75%</h2>
                </div>
            </div>
            <div className='d-flex gap-4 align-items-center mt-2'>
                <div className='d-flex align-items-center gap-2'>
                    <div className={styles.circleIncome}></div>
                    <span>40000</span>
                </div>
                <div className='d-flex align-items-center gap-2'>
                    <div className={styles.circleExpense}></div>
                    <span>15500</span>
                </div>
            </div>
        </div>
    )
}