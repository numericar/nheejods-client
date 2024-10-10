import styles from './short-box-item.module.css';

export default function ShortBoxItem({ box }) {

    function bar() {
        const startLow = (box.expensePercent >= 0) ? <div className={styles.barItemGreen}></div> : <div className={styles.barItemDark}></div>;
        const stateMedium = (box.expensePercent >= 50.00) ? <div className={styles.barItemYellow}></div> : <div className={styles.barItemDark}></div>;
        const stateHigh = (box.expensePercent >= 75.00) ? <div className={styles.barItemRed}></div> : <div className={styles.barItemDark}></div>;
        const stateElevated = (box.expensePercent >= 80.00) ? <div className={styles.barItemRed}></div> : <div className={styles.barItemDark}></div>;

        return (
            <>
                {startLow}
                {stateMedium}
                {stateHigh}
                {stateElevated}
            </>
        )
    }

    return (
        <div className={styles.boxItemContainer}>
            <div className='d-flex justify-content-between'>
                <div>
                    <p>{box.title}</p>
                    <div>
                        <span>remaining</span>
                        <h4>{box.remaining}</h4>
                    </div>
                </div>
                <div className='w-50'>
                    <div className={`${styles.barContainer} d-flex gap-2`}>
                        {bar()}
                    </div>
                    <h2>{box.expensePercent}%</h2>
                </div>
            </div>
            <div className='d-flex gap-4 align-items-center mt-2'>
                <div className='d-flex align-items-center gap-2'>
                    <div className={styles.circleIncome}></div>
                    <span>{box.income}</span>
                </div>
                <div className='d-flex align-items-center gap-2'>
                    <div className={styles.circleExpense}></div>
                    <span>{box.expense}</span>
                </div>
            </div>
        </div>
    )
}