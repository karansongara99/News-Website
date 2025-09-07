import React, { useEffect, useState } from 'react';
import '../assets/Styles/LiveNews.css';

const LiveNews = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    const API_KEY = '7c7cbceace074592a603128bfabdc73e';
    const URL = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`;

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(URL);
                const data = await response.json();
                setArticles(data.articles);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching news:", error);
            }
        };

        fetchNews();
    }, []);

    return (
        <div className="news-container">
            <h2 className="news-heading">📰 Top Headlines </h2>

            <marquee
                behavior="scroll"
                direction="left"
                scrollAmount="6"
                style={{ padding: '10px', color: '#1e88e5', fontWeight: 'bold', background: '#f0f0f0' }}
            >
                {articles.map((article, index) => (
                    <span key={index} style={{ marginRight: '50px' }}>
                        📰 {article.title}
                    </span>
                ))}
            </marquee>

            {loading ? (
                <p>Loading news...</p>
            ) : (
                <div className="news-grid">
                    {articles.map((article, index) => (
                        <div className="news-card" key={index}>
                            {article.urlToImage && (
                                <img
                                    className="news-image"
                                    src={article.urlToImage}
                                    alt={article.title}
                                />
                            )}
                            <div className="news-content">
                                <h3 className="news-title">{article.title}</h3>
                                <div className="news-meta">
                                    <p><strong>Source:</strong> {article.source?.name}</p>
                                    <p><strong>Author:</strong> {article.author || 'Unknown'}</p>
                                    <p><strong>Published:</strong> {new Date(article.publishedAt).toLocaleString()}</p>
                                </div>
                                <p className="news-description">{article.description}</p>
                                <a
                                    className="news-link"
                                    href={article.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Read full article →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>

    );
};

export default LiveNews;
