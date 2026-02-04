import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="navigation">
            <div className="container">
                <div className="nav-content">
                    <Link to="/" className="nav-logo">
                        <span className="logo-icon">🌍</span>
                        <span className="logo-text gradient-text">StealthGeo</span>
                    </Link>

                    <div className="nav-links">
                        <Link
                            to="/"
                            className={`nav-link ${isActive('/') ? 'active' : ''}`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/privacy-policy"
                            className={`nav-link ${isActive('/privacy-policy') ? 'active' : ''}`}
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            to="/user-support"
                            className={`nav-link ${isActive('/user-support') ? 'active' : ''}`}
                        >
                            User Support
                        </Link>
                        <a
                            href="https://github.com/RahulBisht/location-spoofer"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nav-link"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
