import './box-item.module.css';

export default function BoxItem() {
    return (
        <div>
            <div className='mt-3'>
                <div>
                    <h2>2024-06</h2>
                    <hr />
                </div>
                <div>
                    <div>
                        <p>Income total</p>
                        <h2>24750</h2>
                    </div>
                    <div>
                        <p>Expense total</p>
                        <h2>12900</h2>
                    </div>
                    <div>
                        <p>Remaining</p>
                        <h2>11850</h2>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <span>Incomes</span>
                        </div>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Amount</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>SPayLater</td>
                                    <td>2000</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <div>
                            <span>Expenses</span>
                        </div>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Amount</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
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