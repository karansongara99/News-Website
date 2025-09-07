import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../assets/Styles/Category/NewsPage.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

export default function Politics() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 10;
    const [likedArticles, setLikedArticles] = useState(
        JSON.parse(localStorage.getItem('likedArticles')) || []
    );

    const toggleLike = (article) => {
        const isLiked = likedArticles.some(item => item.article_id === article.article_id);
        let updatedLikes;

        if (isLiked) {
            updatedLikes = likedArticles.filter(item => item.article_id !== article.article_id);
            toast.info('Removed from wishlist');
        } else {
            updatedLikes = [...likedArticles, { ...article, likedAt: new Date().toISOString() }];
            toast.success('Added to wishlist');
        }

        setLikedArticles(updatedLikes);
        localStorage.setItem('likedArticles', JSON.stringify(updatedLikes));
    };

    const isArticleLiked = (articleId) => {
        return likedArticles.some(article => article.article_id === articleId);
    };

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/politican');
                setArticles(response.data);
                setLoading(false);
            // eslint-disable-next-line no-unused-vars
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
            <h1 className="title">🏛️ Politics News</h1>
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
                Parliament to debate the new economic reform bill this week. &nbsp;&nbsp;&nbsp;
        International summit on climate policy kicks off in Geneva. &nbsp;&nbsp;&nbsp;
        Local elections set for October – voter registration now open. &nbsp;&nbsp;&nbsp;
        Government announces new digital governance initiative. &nbsp;&nbsp;&nbsp;
        Opposition calls for transparency in defense spending. &nbsp;&nbsp;&nbsp;
        President to address the nation on upcoming policy changes.
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
                                        <div className="card-actions">
                                            <span className={`sentiment-tag ${article.sentiment?.toLowerCase()}`}>
                                                {article.sentiment}
                                            </span>
                                            <button 
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    toggleLike(article);
                                                }}
                                                className="like-btn"
                                                aria-label={isArticleLiked(article.article_id) ? 'Remove from wishlist' : 'Add to wishlist'}
                                            >
                                                {isArticleLiked(article.article_id) ? (
                                                    <FaHeart className="liked" />
                                                ) : (
                                                    <FaRegHeart />
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    <h3 className="article-title">{article.title}</h3>
                                    <a href={article.source_url} target="_blank" rel="noopener noreferrer" className="source-link">
                                        {article.source_url}
                                    </a>

                                    <div className="tags">
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
