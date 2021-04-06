import React from 'react'
import PropTypes from "prop-types"

const RecentPosts = ({ recentPosts }) => {
    return (
        <div className="widget widget_recent_posts">
            <h3 className="widget-title">
                Recent Post
            </h3>
            <div className="bar"></div>

            <ul>
                <li>
                    <div className="recent-post-thumb">
                        <a href="/#">
                            <img
                                src="/images/blog-img1.jpg"
                                alt="blog-image"
                            />
                        </a>
                    </div>

                    <div className="recent-post-content">
                        <h3>
                            <a href="/#">
                                10 Hot Marketing Trends
                                You Need to Implement
                            </a>
                        </h3>
                        <span className="date">
                            23 January 2018
                        </span>
                    </div>
                </li>

                <li>
                    <div className="recent-post-thumb">
                        <a href="/#">
                            <img
                                src="/images/blog-img3.jpg"
                                alt="blog-image"
                            />
                        </a>
                    </div>

                    <div className="recent-post-content">
                        <h3>
                            <a href="/#">
                                10 Hot Marketing Trends
                                You Need to Implement
                            </a>
                        </h3>
                        <span className="date">
                            23 January 2018
                        </span>
                    </div>
                </li>

                <li>
                    <div className="recent-post-thumb">
                        <a href="/#">
                            <img
                                src="/images/blog-img2.jpg"
                                alt="blog-image"
                            />
                        </a>
                    </div>

                    <div className="recent-post-content">
                        <h3>
                            <a href="/#">
                                10 Hot Marketing Trends
                                You Need to Implement
                            </a>
                        </h3>
                        <span className="date">
                            23 January 2018
                        </span>
                    </div>
                </li>

                <li>
                    <div className="recent-post-thumb">
                        <a href="/#">
                            <img
                                src="/images/blog-img4.jpg"
                                alt="blog-image"
                            />
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    )
}

RecentPosts.defaultProps = {
    recentPosts: PropTypes.arrayOf(PropTypes.shape{
        
    })
}

export default RecentPosts
