export default function Navbar() {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">
                    NheeJods <span className="h6 text-light-emphasis">develop version</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto gap-3">
                        <li className="nav-item">
                            <a className="nav-link" href="#">sign in</a>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-gold">Sign up</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}