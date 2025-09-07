import React, { useState, useEffect } from 'react';
import { FaHeart, FaTrash, FaCalendarAlt, FaClock, FaExternalLinkAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion, AnimatePresence } from 'framer-motion';
import '../assets/Styles/Whislist.css';

const Whislist = () => {
    const [likedArticles, setLikedArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    // Load liked articles from localStorage on component mount
    useEffect(() => {
        const savedArticles = JSON.parse(localStorage.getItem('likedArticles')) || [];
        setLikedArticles(savedArticles);
        setLoading(false);
    }, []);

    // Remove article from wishlist
    const removeFromWishlist = (articleId) => {
        const updatedLikes = likedArticles.filter(article => article.article_id !== articleId);
        setLikedArticles(updatedLikes);
        localStorage.setItem('likedArticles', JSON.stringify(updatedLikes));
        toast.info('Removed from wishlist');
    };

    // Format date to a more readable format
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    if (loading) {
        return (
            <div className="wishlist-loading">
                <div className="spinner"></div>
                <p>Loading your wishlist...</p>
            </div>
        );
    }

    return (
        <div className="wishlist-container">
            <div className="wishlist-header">
                <h1>Your Saved Articles</h1>
                <p className="wishlist-count">
                    {likedArticles.length} {likedArticles.length === 1 ? 'article' : 'articles'} saved
                </p>
            </div>

            {likedArticles.length === 0 ? (
                <div className="empty-wishlist">
                    <div className="empty-state">
                        <FaHeart className="empty-icon" />
                        <h3>Your wishlist is empty</h3>
                        <p>Like articles to save them here for later</p>
                    </div>
                </div>
            ) : (
                <div className="wishlist-grid">
                    <AnimatePresence>
                        {likedArticles.map((article) => (
                            <motion.div
                                key={article.article_id}
                                className="wishlist-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="wishlist-card-content">
                                    <div className="wishlist-card-header">
                                        <div className="source-info">
                                            <img
                                                src={article.image_url || 'https://via.placeholder.com/40'}
                                                alt={article.source}
                                                className="source-logo"
                                            />
                                            <div className="source-details">
                                                <span className="source-name">{article.source}</span>
                                                <div className="article-meta">
                                                    <span className="meta-item">
                                                        <FaCalendarAlt className="meta-icon" />
                                                        {formatDate(article.pubDate)}
                                                    </span>
                                                    {article.pubDateTZ && (
                                                        <span className="meta-item">
                                                            <FaClock className="meta-icon" />
                                                            {article.pubDateTZ}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => removeFromWishlist(article.article_id)}
                                            className="remove-btn"
                                            aria-label="Remove from wishlist"
                                        >
                                            <FaTrash />
                                        </button>
                                    </div>

                                    <h3 className="article-title">
                                        <a
                                            href={article.source_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="article-link"
                                        >
                                            {article.title}
                                            <FaExternalLinkAlt className="external-link-icon" />
                                        </a>
                                    </h3>

                                    {article.description && (
                                        <p className="article-description">
                                            {article.description.length > 150
                                                ? `${article.description.substring(0, 150)}...`
                                                : article.description}
                                        </p>
                                    )}

                                    <div className="article-footer">
                                        <div className="sentiment-container">
                                            <span className={`sentiment-tag ${article.sentiment?.toLowerCase()}`}>
                                                {article.sentiment}
                                            </span>
                                        </div>
                                        <div className="article-actions">
                                            <a
                                                href={article.source_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="read-more-btn"
                                            >
                                                Read Full Article
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            )}
        </div>
    );
};

export default Whislist;