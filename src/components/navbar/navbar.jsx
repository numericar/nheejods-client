export default function Navbar() {
    return (
        <nav class="navbar navbar-dark navbar-expand-lg bg-dark">
            <div class="container">
                <a class="navbar-brand" href="#">NheeJods</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto gap-3">
                        <li class="nav-item">
                            <a class="nav-link" href="#">sign in</a>
                        </li>
                        <li class="nav-item">
                            <button className="btn btn-gold">Sign up</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}