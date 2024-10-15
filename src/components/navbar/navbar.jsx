import styles from './navbar.module.css'

import { useContext, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import AppContext from "../../AppContext";
import financeBoxService from '../../services/financeBoxService';

export default function Navbar() {
    const targetKey = 'token';
    const years = [2024, 2025, 2026, 2027];
    const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    const { signInTickState,fetchFinanceBoxState } = useContext(AppContext);

    const [isAuthenticate, setIsAuthenticate] = useState(false);
    const [showCreateFinanceModal, setShowCreateFinanceModal] = useState(false);
    const [year, setYear] = useState(years[0]);
    const [month, setMonth] = useState(months[0]);
    const [fetchFinanceBoxTick, setFetchFinanceBoxTick] = fetchFinanceBoxState;
    
    

    const handleClose = () => setShowCreateFinanceModal(false);
    const handleShow = () => setShowCreateFinanceModal(true);

    useEffect(() => {
        const cookies = document.cookie.split(';');

        let tempKey = '';
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i];
            for (let j = 0; j < cookie.length; j++) {
                const c = cookie[j];
                if (c == '=') {
                    break;
                } else {
                    tempKey += c;
                }
            }
        }

        if (tempKey === targetKey) {
            setIsAuthenticate(true);
        }
    }, [signInTickState[0]]);

    function navigateToHome() {
        window.location = '/'
    }

    function signOut() {
        document.cookie = targetKey + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        window.location = '/signin';
    }

    function setYearSelected(year) {
        setYear(year);
    }

    function setMonthSelected(month) {
        setMonth(month)
    }

    async function createFinanceBox() {
        console.log(`create with ${year}-${month}`);
        const response = await financeBoxService.create(year, month);

        if (response.isSuccess) {
            const tempTick = !fetchFinanceBoxTick;
            setFetchFinanceBoxTick(tempTick);
            handleClose();
        }
    }

    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="container">
                <a className="navbar-brand" onClick={navigateToHome}>
                    NheeJods <span className="h6 text-light-emphasis">develop version</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto gap-3">
                        {!isAuthenticate ? (
                            <>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">sign in</a>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-gold">Sign up</button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={handleShow}>create box</a>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-danger" onClick={signOut}>Sign out</button>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>

            <Modal show={showCreateFinanceModal} onHide={handleClose}>
                <Modal.Header className={styles.modalFinanceBoxCreateHeader}>
                    <Modal.Title>Create finance box</Modal.Title>
                </Modal.Header>
                <Modal.Body className={styles.modalFinanceBoxCreateBody}>
                <div className='d-flex gap-3'>
                        <div>
                            <p>year</p>
                            <div className='dropdown'>
                                <button className='btn btn-primary dropdown-toggle w-100' type='button' data-bs-toggle='dropdown'>
                                    {year}
                                </button>
                                <ul className='dropdown-menu'>
                                    {years.map((year, index) => (
                                        <li key={index}>
                                            <button type='button' className="dropdown-item" onClick={() => setYearSelected(year)}>{year}</button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <p>month</p>
                            <div className='dropdown'>
                                <button className='btn btn-primary dropdown-toggle w-100' type='button' data-bs-toggle='dropdown'>
                                    {month}
                                </button>
                                <ul className='dropdown-menu'>
                                    {months.map((month, index) => (
                                        <li key={index}>
                                            <button type='button' className="dropdown-item" onClick={() => setMonthSelected(month)}>{month}</button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className={styles.modalFinanceBoxCreateFooter}>
                    <button className="btn btn-danger" onClick={handleClose}>
                        cancel
                    </button>
                    <button className="btn btn-success" onClick={createFinanceBox}>
                        create
                    </button>
                </Modal.Footer>
            </Modal>
        </nav>
    )
}