import { useParams } from 'react-router-dom';
import styles from './box-item.module.css';
import financeBoxService from '../../services/financeBoxService';
import { useEffect, useState } from 'react';

export default function BoxItem() {
    const { itemId } = useParams();

    const [title, setTitle] = useState('');
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [remaining, setRemaining] = useState(0);
    const [incomeItems, setIncomeItems] = useState([]);
    const [expenseItems, setExpenseItems] = useState([]);
    
    const [incomeInput, setIncomeInput] = useState({
        title: '',
        amount: ''
    });

    const [expenseInput, setExpenseInput] = useState({
        title: '',
        amount: ''
    });

    const [updateState, setUpdateState] = useState({
        appends: [],
        updateds: [],
        removes: []
    });

    useEffect(() => {
        getFinanceBoxById();
    }, []);

    useEffect(() => {
        incomeSummaryHandler();
    }, [incomeItems]);

    useEffect(() => {
        expenseSummaryHandler();
    }, [expenseItems]);

    useEffect(() => {
        remainingSummaryHandler();
    }, [income, expense]);

    useEffect(() => {

    }, [updateState])

    async function getFinanceBoxById() {
        const response = await financeBoxService.getFinanceBoxById(itemId);
        setTitle(response.data.title);
        setIncome(response.data.income);
        setExpense(response.data.expense);
        setRemaining(response.data.remaining);
        setIncomeItems(response.data.incomeItems);
        setExpenseItems(response.data.expenseItems);
    }

    function incomeAppendHandler() {
        if (typeof incomeInput.amount == 'string' || incomeInput.amount <= 0) {

        } else {
            // convert amount from any or string to number
            const amountTemp = Number(incomeInput.amount);

            // add new income obj to append state
            const appendTemps = updateState.appends;
            appendTemps.push({ title: incomeInput.title, amount: amountTemp, type: 1 });

            // push append state to update state
            const updateStateTemp = { ...updateState, appends: appendTemps };
            setUpdateState(updateStateTemp);

            // push to income item list
            const incomeItem = {
                id: -1,
                title: incomeInput.title,
                amount: amountTemp,
                type: 1,
                created_at: new Date()
            };

            const incomeItemTemps = [...incomeItems, incomeItem];
            setIncomeItems(incomeItemTemps);

            setIncomeInput({
                title: '',
                amount: ''
            });
        }
    }

    function incomeSummaryHandler() {
        let total = 0;

        for(let i = 0; i < incomeItems.length; i++) {
            total += incomeItems[i].amount;
        }

        setIncome(total);
    }

    function remainingSummaryHandler() {
        let total = income - expense;

        setRemaining(total);
    }

    function incomeInputTitleHandler(e) {
        const value = e.target.value;
        const obj = { ...incomeInput, title: value };
        setIncomeInput(obj);
    }

    function incomeInputAmountHandler(e) {
        const value = e.target.value;

        let obj;

        // if value from amount is empty
        if (value.trim().length <= 0) {
            obj = { ...incomeInput, amount: '' }; // set amount to empty string
        } else {
            obj = { ...incomeInput, amount: Number(value) }; // set amount with convert to number
        }

        setIncomeInput(obj);
    }

    // expense

    function expenseInputTitleHandler(e) {
        const value = e.target.value;
        const obj = { ...expenseInput, title: value };

        setExpenseInput(obj);
    }

    function expenseInputAmountHandler(e) {
        const value = e.target.value;

        let obj;

        // if value from amount is empty
        if (value.trim().length <= 0) {
            obj = { ...expenseInput, amount: '' }; // set amount to empty string
        } else {
            obj = { ...expenseInput, amount: Number(value) }; // set amount with convert to number
        }

        setExpenseInput(obj);
    }

    function expenseSummaryHandler() {
        let total = 0;

        for(let i = 0; i < expenseItems.length; i++) {
            total += expenseItems[i].amount;
        }

        setExpense(total);
    }

    function expenseAppendHandler() {
        if (typeof expenseInput.amount === 'string' || expenseInput.amount <= 0) {
            // flag error
        } else {
            // convert amount from any or string to number
            const amountTemp = Number(expenseInput.amount);

            // add new expense obj to append state
            const appendTemps = updateState.appends;
            appendTemps.push({ title: expenseInput.title, amount: amountTemp, type: 2 });

            // push append state to update state
            const updateStateTemp = { ...updateState, appends: appendTemps };
            setUpdateState(updateStateTemp);

            // push to expense item list
            const expenseItem = {
                id: -1,
                title: expenseInput.title,
                amount: amountTemp,
                type: 2,
                created_at: new Date()
            };
            const expenseItemTemps = [...expenseItems, expenseItem]
            setExpenseItems(expenseItemTemps);

            setExpenseInput({
                title: '',
                amount: ''
            });
        }
    }

    async function saveBtnHandler() {
        const appends = updateState.appends;
        const updates = updateState.updateds;
        const removes = updateState.removes;

        if (appends.length > 0 || updates.length > 0 || removes.length > 0) {
            const response = await financeBoxService.updateFinanceBoxById(itemId, appends, updates, removes);

            console.log(response)

            if (response.isSuccess) {
                const tempUpdateState = {
                    appends: [],
                    updateds: [],
                    removes: []
                }

                setUpdateState(tempUpdateState);
                getFinanceBoxById();
            }
        }
    }

    return (
        <div>
            <div className='mt-3'>
                <div>
                    <h2>{title}</h2>
                    <div className='d-flex justify-content-end'>
                        <button className='btn btn-gold' onClick={saveBtnHandler}>save</button>
                    </div>
                    <hr />
                </div>
                <div className='d-flex gap-3 mb-5'>
                    <div className={styles.totalBox}>
                        <p>Income total</p>
                        <h2>{income}</h2>
                    </div>
                    <div className={styles.totalBox}>
                        <p>Expense total</p>
                        <h2>{expense}</h2>
                    </div>
                    <div className={styles.totalBox}>
                        <p>Remaining</p>
                        <h2>{remaining}</h2>
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
                                        <input 
                                            type="text" 
                                            className={`form-control m-2 ${styles.tableInput}`} 
                                            value={incomeInput.title}
                                            onChange={incomeInputTitleHandler} />
                                    </td>
                                    <td>
                                        <input 
                                            type="number" 
                                            className={`form-control m-2 ${styles.tableInput}`} 
                                            value={incomeInput.amount}
                                            onChange={incomeInputAmountHandler} />
                                    </td>
                                    <td>
                                        <button type='button' className='btn btn-success m-2' onClick={() => incomeAppendHandler()}>add</button>
                                    </td>
                                </tr>
                                {incomeItems.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.title}</td>
                                        <td>{item.amount}</td>
                                        <td></td>
                                    </tr>
                                ))}
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
                                        <input 
                                            type="text" 
                                            className={`form-control m-2 ${styles.tableInput}`}
                                            value={expenseInput.title} 
                                            onChange={expenseInputTitleHandler} />
                                    </td>
                                    <td>
                                        <input 
                                            type="number" 
                                            className={`form-control m-2 ${styles.tableInput}`} 
                                            value={expenseInput.amount} 
                                            onChange={expenseInputAmountHandler} />
                                    </td>
                                    <td>
                                        <button type='button' className='btn btn-success m-2' onClick={expenseAppendHandler}>add</button>
                                    </td>
                                </tr>
                                {expenseItems.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.title}</td>
                                        <td>{item.amount}</td>
                                        <td></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}