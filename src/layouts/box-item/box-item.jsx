import styles from './box-item.module.css';

export default function BoxItem() {
    return (
        <div>
            <div className='mt-3'>
                <div>
                    <h2>2024-06</h2>
                    <div className='d-flex justify-content-end'>
                        <button className='btn btn-gold'>save</button>
                    </div>
                    <hr />
                </div>
                <div className='d-flex gap-3 mb-5'>
                    <div className={styles.totalBox}>
                        <p>Income total</p>
                        <h2>24750</h2>
                    </div>
                    <div className={styles.totalBox}>
                        <p>Expense total</p>
                        <h2>12900</h2>
                    </div>
                    <div className={styles.totalBox}>
                        <p>Remaining</p>
                        <h2>11850</h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <div>
                            <p>Incomes</p>
                        </div>
                        <table className='table table-dark table-striped'>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Amount</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <input type="text" className={`form-control m-2 ${styles.tableInput}`} />
                                    </td>
                                    <td>
                                        <input type="number" className={`form-control m-2 ${styles.tableInput}`} />
                                    </td>
                                    <td>
                                        <button type='button' className='btn btn-success m-2'>add</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>SPayLater</td>
                                    <td>2000</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='col-6'>
                        <div>
                            <p>Expenses</p>
                        </div>
                        <table className='table table-dark table-striped'>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Amount</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody className=''>
                                <tr>
                                    <td>
                                        <input type="text" className={`form-control m-2 ${styles.tableInput}`} />
                                    </td>
                                    <td>
                                        <input type="number" className={`form-control m-2 ${styles.tableInput}`} />
                                    </td>
                                    <td>
                                        <button type='button' className='btn btn-success m-2'>add</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>SPayLater</td>
                                    <td>2000</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>SPayLater</td>
                                    <td>2000</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}