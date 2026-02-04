import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './PrivacyPolicy.css';

export default function PrivacyPolicy() {
    const [content, setContent] = useState<string>('');

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}docs/PRIVACY_POLICY.md`)
            .then(response => response.text())
            .then(text => setContent(text))
            .catch(error => console.error('Error loading privacy policy:', error));
    }, []);

    return (
        <div className="privacy-policy">
            <div className="container">
                <div className="policy-header">
                    <h1>Privacy Policy</h1>
                    <p className="policy-subtitle">
                        Your privacy is our top priority. Learn how we protect your data.
                    </p>
                </div>

                <div className="policy-content card-glass">
                    <div className="markdown-content">
                        <ReactMarkdown>{content}</ReactMarkdown>
                    </div>
                </div>

                <div className="policy-footer">
                    <p>
                        Questions about our privacy policy?
                        <a
                            href="https://github.com/RahulBisht/location-spoofer/issues"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {' '}Contact us on GitHub
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
