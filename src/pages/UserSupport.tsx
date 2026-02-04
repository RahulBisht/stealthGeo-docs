import { useEffect, useState } from 'react';
import './UserSupport.css';

export default function UserSupport() {
    const [content, setContent] = useState<string>('');

    useEffect(() => {
        fetch('/docs/USER_SUPPORT.md')
            .then(response => response.text())
            .then(text => setContent(text))
            .catch(error => console.error('Error loading user support:', error));
    }, []);

    return (
        <div className="user-support">
            <div className="container">
                <div className="support-header">
                    <h1>User Support</h1>
                    <p className="support-subtitle">
                        Get help, find answers, and troubleshoot issues with StealthGeo
                    </p>
                </div>

                {/* Quick Action Cards */}
                <div className="quick-actions">
                    <a
                        href="https://github.com/RahulBisht/location-spoofer/issues"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-card card-glass"
                    >
                        <div className="action-icon">🐛</div>
                        <h3>Report a Bug</h3>
                        <p>Found an issue? Let us know on GitHub</p>
                    </a>

                    <a
                        href="https://github.com/RahulBisht/location-spoofer/discussions"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-card card-glass"
                    >
                        <div className="action-icon">💡</div>
                        <h3>Feature Request</h3>
                        <p>Share your ideas for improvements</p>
                    </a>

                    <a
                        href="https://github.com/RahulBisht/location-spoofer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-card card-glass"
                    >
                        <div className="action-icon">📖</div>
                        <h3>Documentation</h3>
                        <p>Browse the full documentation</p>
                    </a>
                </div>

                <div className="support-content card-glass">
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

                            // Bold text
                            if (line.startsWith('**') && line.endsWith('**')) {
                                return <p key={index}><strong>{line.slice(2, -2)}</strong></p>;
                            }

                            // List items
                            if (line.startsWith('- ')) {
                                return <li key={index}>{line.substring(2)}</li>;
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
            </div>
        </div>
    );
}
