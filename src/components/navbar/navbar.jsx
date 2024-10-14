import { useContext, useEffect, useState } from "react";
import AppContext from "../../AppContext";

export default function Navbar() {
    const targetKey = 'token';
    const [isAuthenticate, setIsAuthenticate] = useState(false);
    const { signInTick } = useContext(AppContext);

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
    }, [signInTick]);

    function navigateToHome() {
        window.location = '/'
    }

    function signOut() {
        document.cookie = targetKey + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        window.location = '/signin';
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
                                    <a className="nav-link" href="#">create box</a>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-danger" onClick={signOut}>Sign out</button>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}