import './boxs.module.css';
import BoxItem from './components/box-item';

export default function Boxs() {
    const years = [2024, 2025, 2026, 2027];
    const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

    return (
        <div>
            <div className='d-flex align-items-end justify-content-between'>
                <div className='mt-3 d-flex align-items-end gap-3'>
                    <div className='d-flex gap-3'>
                        <div>
                            <p>from year</p>
                            <div className='dropdown'>
                                <button className='btn btn-primary dropdown-toggle w-100' type='button' data-bs-toggle='dropdown' aria-expended='false'>
                                    {years[0]}
                                </button>
                                <ul className='dropdown-menu'>
                                    {years.map((year, index) => (
                                        <li key={index}>
                                            <button type='button' class="dropdown-item">{year}</button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <p>from month</p>
                            <div className='dropdown'>
                                <button className='btn btn-primary dropdown-toggle w-100' type='button' data-bs-toggle='dropdown' aria-expended='false'>
                                    {months[0]}
                                </button>
                                <ul className='dropdown-menu'>
                                    {months.map((month, index) => (
                                        <li key={index}>
                                            <button type='button' class="dropdown-item">{month}</button>
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
                                <button className='btn btn-primary dropdown-toggle w-100' type='button' data-bs-toggle='dropdown' aria-expended='false'>
                                    {years[0]}
                                </button>
                                <ul className='dropdown-menu'>
                                    {years.map((year, index) => (
                                        <li key={index}>
                                            <button type='button' class="dropdown-item">{year}</button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <p>to month</p>
                            <div className='dropdown'>
                                <button className='btn btn-primary dropdown-toggle w-100' type='button' data-bs-toggle='dropdown' aria-expended='false'>
                                    {months[0]}
                                </button>
                                <ul className='dropdown-menu'>
                                    {months.map((month, index) => (
                                        <li key={index}>
                                            <button type='button' class="dropdown-item">{month}</button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex'>
                    <button className='btn btn-success'>seach</button>
                </div>
            </div>
            <hr />

            {/* item section */}
            <div className='d-flex gap-3 flex-wrap'>
                <BoxItem />
                <BoxItem />
                <BoxItem />
                <BoxItem />
                <BoxItem />
                <BoxItem />
            </div>
        </div>
    )
}