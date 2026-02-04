import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <div className="hero-content animate-fade-in">
                        <div className="hero-icon">🌍</div>
                        <h1>StealthGeo</h1>
                        <p className="hero-subtitle">
                            Privacy-First Location Spoofing for Chrome
                        </p>
                        <p className="hero-description">
                            Take control of your digital privacy with StealthGeo. Spoof your location
                            seamlessly while keeping your data completely private and secure.
                        </p>
                        <div className="hero-actions">
                            <a
                                href="https://github.com/RahulBisht/location-spoofer"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Get Started
                            </a>
                            <Link to="/user-support" className="btn btn-secondary">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features">
                <div className="container">
                    <h2 className="section-title">Why Choose StealthGeo?</h2>
                    <div className="features-grid">
                        <div className="feature-card card-glass animate-slide-in-left">
                            <div className="feature-icon">🔒</div>
                            <h3>Privacy First</h3>
                            <p>
                                Zero data collection. Everything stays on your device. No tracking,
                                no analytics, no third parties.
                            </p>
                        </div>

                        <div className="feature-card card-glass animate-fade-in">
                            <div className="feature-icon">⚡</div>
                            <h3>Lightning Fast</h3>
                            <p>
                                Instant location spoofing with advanced Chrome DevTools Protocol.
                                No lag, no delays.
                            </p>
                        </div>

                        <div className="feature-card card-glass animate-slide-in-right">
                            <div className="feature-icon">🌐</div>
                            <h3>Universal</h3>
                            <p>
                                Works on all websites. Bypass geo-restrictions and protect your
                                location privacy everywhere.
                            </p>
                        </div>

                        <div className="feature-card card-glass animate-slide-in-left">
                            <div className="feature-icon">💾</div>
                            <h3>Save Favorites</h3>
                            <p>
                                Save your favorite locations for quick access. Switch between
                                locations with a single click.
                            </p>
                        </div>

                        <div className="feature-card card-glass animate-fade-in">
                            <div className="feature-icon">🎯</div>
                            <h3>Precise Control</h3>
                            <p>
                                Set exact coordinates or search by address. Full control over
                                timezone and locale settings.
                            </p>
                        </div>

                        <div className="feature-card card-glass animate-slide-in-right">
                            <div className="feature-icon">📖</div>
                            <h3>Open Source</h3>
                            <p>
                                Fully transparent and auditable. Review our code on GitHub and
                                contribute to the project.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Links Section */}
            <section className="quick-links">
                <div className="container">
                    <h2 className="section-title">Documentation</h2>
                    <div className="links-grid">
                        <Link to="/privacy-policy" className="link-card card">
                            <div className="link-icon">📄</div>
                            <h3>Privacy Policy</h3>
                            <p>
                                Learn how we protect your privacy and what data we collect (spoiler: none).
                            </p>
                            <span className="link-arrow">→</span>
                        </Link>

                        <Link to="/user-support" className="link-card card">
                            <div className="link-icon">💬</div>
                            <h3>User Support</h3>
                            <p>
                                Get help, find answers to FAQs, and troubleshoot common issues.
                            </p>
                            <span className="link-arrow">→</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <p>
                        Made with ❤️ by the StealthGeo Team •
                        <a
                            href="https://github.com/RahulBisht/location-spoofer"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {' '}Open Source on GitHub
                        </a>
                    </p>
                </div>
            </footer>
        </div>
    );
}
