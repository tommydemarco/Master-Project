import PropTypes from 'prop-types'
import Link from "next/link"
import Image from "next/image"

import styles from "./BlogCard.module.scss"

const BlogCard = ({ imageSrc, imageAlt, date, author, title, description, slug, category, loading }) => {

    const postDate = new Date(date).toLocaleDateString()

    const classes = ["single-blog-post"]
    if (loading) classes.push(styles.loading)

    return (
        <div className="col-lg-6 col-md-6">
            <div className={classes.join(" ")}>
                <a href="/#" className="post-image">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={416}
                        height={286}
                    />
                </a>

                <div className="blog-post-content">
                    <ul>
                        <li>
                            <i className="icofont-user-male"></i>{" "}
                            <span>{author}</span>
                        </li>
                        <li>
                            <i className="icofont-wall-clock"></i>{" "}
                            {postDate}
                        </li>
                    </ul>
                    <h3>
                        <a href="/#">
                            {title}
                        </a>
                    </h3>
                    <p>
                        {description}
                    </p>
                    <p>
                        {category}
                    </p>
                    <Link
                        href={`/blog/${slug}`}
                    >
                        <a className="read-more-btn" >
                            Read More
                            <i className="icofont-rounded-double-right"></i>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

BlogCard.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
}

BlogCard.defaultProps = {
    imageSrc: "/images/blog-img1.jpg",
    imageAlt: "blog-image",
    date: "28-04-2020",
    author: "Admin",
    title: "The Most Popular New Business Apps Landing Page",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Morbi turpis massa, dapibus nec libero vitae.",
    slug: "blog-post",
    category: "Javascript News"
}

export default BlogCard
