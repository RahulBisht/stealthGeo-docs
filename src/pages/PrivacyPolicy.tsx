import { useEffect, useState } from 'react';
import './PrivacyPolicy.css';

export default function PrivacyPolicy() {
    const [content, setContent] = useState<string>('');

    useEffect(() => {
        fetch('/docs/PRIVACY_POLICY.md')
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
                        {content.split('\n').map((line, index) => {
                            // Headers
                            if (line.startsWith('# ')) {
                                return <h1 key={index}>{line.substring(2)}</h1>;
                            }
                            if (line.startsWith('## ')) {
                                return <h2 key={index}>{line.substring(3)}</h2>;
                            }
                            if (line.startsWith('### ')) {
                                return <h3 key={index}>{line.substring(4)}</h3>;
                            }
                            if (line.startsWith('#### ')) {
                                return <h4 key={index}>{line.substring(5)}</h4>;
                            }

                            // Bold text
                            if (line.startsWith('**') && line.endsWith('**')) {
                                return <p key={index}><strong>{line.slice(2, -2)}</strong></p>;
                            }

                            // List items
                            if (line.startsWith('- ')) {
                                return <li key={index}>{line.substring(2)}</li>;
                            }

                            // Table rows (simple handling)
                            if (line.startsWith('|')) {
                                return <div key={index} className="table-row">{line}</div>;
                            }

                            // Horizontal rule
                            if (line === '---') {
                                return <hr key={index} />;
                            }

                            // Empty lines
                            if (line.trim() === '') {
                                return <br key={index} />;
                            }

                            // Regular paragraphs
                            return <p key={index}>{line}</p>;
                        })}
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
