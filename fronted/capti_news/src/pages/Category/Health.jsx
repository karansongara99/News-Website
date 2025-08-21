import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../assets/Styles/Category/NewsPage.css';

export default function Health() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 10;

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/health');
                setArticles(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch articles');
                setLoading(false);
            }
        };
        fetchArticles();
    }, []);

    const filteredArticles = articles.filter((article) =>
        article.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.keywords?.some(keyword =>
            keyword.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="business-news-container">
            <h1 className="title">📰 Health News</h1>
            <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1); // Reset to first page on new search
                }}
                className="search-input"
            />
            <hr />

            <h4>Latest News</h4>
            <marquee behavior="alternate" direction="right" className="ticker">
                <p>
                    U.S. stock markets are trading near record highs in July 2025, fueled by AI optimism,
                    Fed rate-cut expectations, retail momentum trades, and a belief that tariff threats may not materialize.
                    Yet, analysts caution that the rally may be fragile due to potential shocks.
                </p>
            </marquee>

            {filteredArticles.length === 0 ? (
                <p className="no-articles">No articles found.</p>
            ) : (
                <>
                    <div className="card-grid">
                        {currentArticles.map((article) => (
                            <div key={article.article_id} className="news-card">
                                <div className="card-left">
                                    <img
                                        src={article.image_url || 'https://via.placeholder.com/100'}
                                        alt="logo"
                                        className="source-logo"
                                    />
                                    <a href={article.source_url} target="_blank" rel="noopener noreferrer" className="source-link">
                                        {article.source_url}
                                    </a>
                                </div>

                                <div className="card-right">
                                    <div className="card-header">
                                        <span className="pub-date">
                                            📅 {article.pubDate} ⏰ {article.pubDateTZ}
                                        </span>
                                        <span className={`sentiment-tag ${article.sentiment?.toLowerCase()}`}>
                                            {article.sentiment}
                                        </span>
                                    </div>

                                    <h3 className="article-title">{article.title}</h3>

                                    <div className="tags">
                                        Category: <span className="category-tag">{article.category}</span>
                                        AI Tags: <span className="ai-tag">{article.ai_tag}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pagination">
                        {[...Array(totalPages).keys()].map((num) => (
                            <button
                                key={num + 1}
                                className={`page-btn ${currentPage === num + 1 ? 'active' : ''}`}
                                onClick={() => paginate(num + 1)}
                            >
                                {num + 1}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
