import { useContext } from "react";
import { bannerContext } from "../../context";
import { useBannerUpdate } from "../../utils/hooks";

import Banner from "../../components/Banner";
import BlogCard from "../../components/BlogCard";

import { db } from "../../config/firebase";

export const getStaticProps = () => {
    db.collection("blog")
        .get()
        .then((snapshot) => {
            console.log(snapshot);
        })
        .catch((e) => {
            console.log(e);
        });

    return {
        props: { hello: "hello" },
    };
};

const Blog = () => {
    const { dispatch } = useContext(bannerContext);
    useBannerUpdate(dispatch, true);

    return (
        <React.Fragment>
            <Banner
                title="Blog"
                subtitle="Find amazing news on the Javascript world"
            />
            <section className="blog-area blog-section ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="row">
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />

                                <div className="col-lg-12 col-md-12">
                                    <div className="pagination-area">
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination justify-content-center">
                                                <li className="page-item">
                                                    <a
                                                        className="page-link"
                                                        href="/#"
                                                    >
                                                        <i className="icofont-double-left"></i>
                                                    </a>
                                                </li>

                                                <li className="page-item active">
                                                    <a
                                                        className="page-link"
                                                        href="/#"
                                                    >
                                                        1
                                                    </a>
                                                </li>

                                                <li className="page-item">
                                                    <a
                                                        className="page-link"
                                                        href="/#"
                                                    >
                                                        2
                                                    </a>
                                                </li>

                                                <li className="page-item">
                                                    <a
                                                        className="page-link"
                                                        href="/#"
                                                    >
                                                        3
                                                    </a>
                                                </li>

                                                <li className="page-item">
                                                    <a
                                                        className="page-link"
                                                        href="/#"
                                                    >
                                                        <i className="icofont-double-right"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div className="sidebar-area">
                                <div className="widget widget-search">
                                    <form>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search"
                                        />
                                        <button type="submit">
                                            <i className="icofont-search-2"></i>
                                        </button>
                                    </form>
                                </div>

                                <div className="widget widget_post_categories">
                                    <h3 className="widget-title">
                                        Post Categories
                                    </h3>
                                    <div className="bar"></div>

                                    <ul>
                                        <li>
                                            <a href="/#">
                                                <i className="icofont-bubble-right"></i>{" "}
                                                Art
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/#">
                                                <i className="icofont-bubble-right"></i>{" "}
                                                Book
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/#">
                                                <i className="icofont-bubble-right"></i>{" "}
                                                Watch
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/#">
                                                <i className="icofont-bubble-right"></i>{" "}
                                                TV
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/#">
                                                <i className="icofont-bubble-right"></i>{" "}
                                                Gifts
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/#">
                                                <i className="icofont-bubble-right"></i>{" "}
                                                Design
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/#">
                                                <i className="icofont-bubble-right"></i>{" "}
                                                Smart TV
                                            </a>
                                        </li>
                                    </ul>
                                </div>

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
                                    </ul>
                                </div>

                                <div className="widget widget_tag_cloud">
                                    <h3 className="widget-title">
                                        Popular Tags
                                    </h3>
                                    <div className="bar"></div>

                                    <div className="tagcloud">
                                        <a href="/#">Art</a>
                                        <a href="/#">Book</a>
                                        <a href="/#">Watch</a>
                                        <a href="/#">TV</a>
                                        <a href="/#">Gifts</a>
                                        <a href="/#">Smart TV</a>
                                        <a href="/#">Design</a>
                                    </div>
                                </div>

                                <div className="widget widget_text">
                                    <h3 className="widget-title">Instagram</h3>
                                    <div className="bar"></div>

                                    <ul>
                                        <li>
                                            <a href="/#">
                                                <img
                                                    src="/images/work-img1.jpg"
                                                    alt="image"
                                                />
                                            </a>
                                        </li>

                                        <li>
                                            <a href="/#">
                                                <img
                                                    src="/images/work-img2.jpg"
                                                    alt="image"
                                                />
                                            </a>
                                        </li>

                                        <li>
                                            <a href="/#">
                                                <img
                                                    src="/images/work-img3.jpg"
                                                    alt="image"
                                                />
                                            </a>
                                        </li>

                                        <li>
                                            <a href="/#">
                                                <img
                                                    src="/images/work-img4.jpg"
                                                    alt="image"
                                                />
                                            </a>
                                        </li>

                                        <li>
                                            <a href="/#">
                                                <img
                                                    src="/images/work-img5.jpg"
                                                    alt="image"
                                                />
                                            </a>
                                        </li>

                                        <li>
                                            <a href="/#">
                                                <img
                                                    src="/images/work-img6.jpg"
                                                    alt="image"
                                                />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Blog;
