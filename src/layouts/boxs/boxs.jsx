import './boxs.module.css';
import ShortBoxItem from './components/short-box-item';
import financeBoxService from '../../services/financeBoxService';
import { useContext, useEffect, useState } from 'react';
import AppContext from '../../AppContext';

export default function Boxs() {
    const years = [2024, 2025, 2026, 2027];
    const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    const { fetchFinanceBoxState } = useContext(AppContext);

    const [financeBoxs, setFinanceBoxs] = useState([]);
    const [startYearSelected, setStartYearSelected] = useState(years[0]);
    const [startMonthSelected, setStartMonthSelected] = useState(months[0]);
    const [endYearSeleted, setEndYearSelected] = useState(years[0]);
    const [endMonthSelected, setEndMonthSelected] = useState(months[0]);
    const [fetchFinanceBoxTick, setFetchFinanceBoxTick] = fetchFinanceBoxState;
    

    useEffect(() => {
        getFinanceBoxs();
    }, [fetchFinanceBoxTick])

    useEffect(() => {
        getFinanceBoxs();
    }, []);

    async function getFinanceBoxs() {
        const response = await financeBoxService.getFinanceBoxs('2024-01', '2024-08');
        setFinanceBoxs(response.data)
    }

    async function searchButtonHandler() {
        const start = concatDate(startYearSelected, startMonthSelected);
        const end = concatDate(endYearSeleted, endMonthSelected);

        const response = await financeBoxService.getFinanceBoxs(start, end);
        setFinanceBoxs(response.data)
        console.log(response);
    }

    function concatDate(year, month) {
        return `${year}-${month}`;
    }

    return (
        <div>
            <div className='d-flex align-items-end justify-content-between'>
                <div className='mt-3 d-flex align-items-end gap-3'>
                    <div className='d-flex gap-3'>
                        <div>
                            <p>from year</p>
                            <div className='dropdown'>
                                <button className='btn btn-primary dropdown-toggle w-100' type='button' data-bs-toggle='dropdown'>
                                    {years[0]}
                                </button>
                                <ul className='dropdown-menu'>
                                    {years.map((year, index) => (
                                        <li key={index}>
                                            <button type='button' className="dropdown-item" onClick={() => setStartYearSelected(year)}>{year}</button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <p>from month</p>
                            <div className='dropdown'>
                                <button className='btn btn-primary dropdown-toggle w-100' type='button' data-bs-toggle='dropdown'>
                                    {months[0]}
                                </button>
                                <ul className='dropdown-menu'>
                                    {months.map((month, index) => (
                                        <li key={index}>
                                            <button type='button' className="dropdown-item" onClick={() => setStartMonthSelected(month)}>{month}</button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <span className='mb-2'>-</span>
                    <div className='d-flex gap-3'>
                        <div>
                            <p>to year</p>
                            <div className='dropdown'>
                                <button className='btn btn-primary dropdown-toggle w-100' type='button' data-bs-toggle='dropdown'>
                                    {years[0]}
                                </button>
                                <ul className='dropdown-menu'>
                                    {years.map((year, index) => (
                                        <li key={index}>
                                            <button type='button' className="dropdown-item" onClick={() => setEndYearSelected(year)}>{year}</button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <p>to month</p>
                            <div className='dropdown'>
                                <button className='btn btn-primary dropdown-toggle w-100' type='button' data-bs-toggle='dropdown'>
                                    {months[0]}
                                </button>
                                <ul className='dropdown-menu'>
                                    {months.map((month, index) => (
                                        <li key={index}>
                                            <button type='button' className="dropdown-item" onClick={() => setEndMonthSelected(month)}>{month}</button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex'>
                    <button className='btn btn-success' onClick={searchButtonHandler}>seach</button>
                </div>
            </div>
            <hr />

            {/* item section */}
            <div className='d-flex gap-3 flex-wrap'>
                {financeBoxs.map((box, index) => <ShortBoxItem key={index} box={box} />)}
            </div>
        </div>
    )
}