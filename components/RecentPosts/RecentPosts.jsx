import React from 'react'
import PropTypes from "prop-types"
import Link from "next/link"

const RecentPosts = ({ recentPosts }) => {
    return (
        <div className="widget widget_recent_posts">
            <h3 className="widget-title">
                Recent Post
            </h3>
            <div className="bar"></div>

            <ul>
                {recentPosts.map(post => {
                    return (<li>
                        <div className="recent-post-thumb">
                            <Link href={`/blog/${post.slug}`}>
                                <a>
                                    <img
                                        src={post.imageSrc}
                                        alt={post.title}
                                    />
                                </a>
                            </Link>
                        </div>

                        <div className="recent-post-content">
                            <h3>
                                <Link href={`/blog/${post.slug}`}>
                                    <a>{post.title}</a>
                                </Link>
                            </h3>
                            <span className="date">
                                {post.date}
                            </span>
                        </div>
                    </li>)}
                )}
            </ul>
        </div>
    )
}

RecentPosts.defaultProps = {
    recentPosts: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        imageSrc: PropTypes.string.isRequired,
        date: PropTypes.any,
        slug: PropTypes.string.isRequired
    }))
}

export default RecentPosts
