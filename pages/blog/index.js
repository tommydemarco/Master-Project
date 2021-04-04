import { useContext, useState } from "react";
import Head from "next/head";

import { bannerContext } from "../../context";
import useBannerUpdate from "../../hooks/useBannerUpdate";
import firebaseLooper from "../../utils/firebaseLooper";

import Banner from "../../components/Banner";
import BlogCard from "../../components/BlogCard";
import Pagination from "../../components/Pagination";

//import { blog } from "../../config/firebase";

export async function getStaticProps() {
    let posts = null;
    let error = null;
    // try {
    //     const snapshot = await blog.get();
    //     posts = firebaseLooper(snapshot);
    // } catch (e) {
    //     error = true;
    // }

    return {
        props: {
            posts: [
                {
                    title: "The first title",
                    category: "Tutorial",
                    date: "04/04/2021",
                },
                {
                    title: "sed quia consequuntur magni",
                    category: "Programming News",
                    date: "04/04/2021",
                },
                {
                    title: "aut odit aut fugit",
                    category: "Tutorial",
                    date: "04/04/2021",
                },
                {
                    title: "quia voluptas sit aspernatur",
                    category: "Programming News",
                    date: "04/04/2021",
                },
                {
                    title: "Nemo enim ipsam voluptatem",
                    category: "Tutorial",
                    date: "04/04/2021",
                },
                {
                    title: "vitae dicta sunt explicabo",
                    category: "Programming News",
                    date: "04/04/2021",
                },
                {
                    title: "architecto beatae",
                    category: "Javascript News",
                    date: "04/04/2021",
                },
                {
                    title: "illo inventore veritatis et quasi",
                    category: "Javascript News",
                    date: "04/04/2021",
                },
                {
                    title: "eaque ipsa quae ab",
                    category: "Programming News",
                    date: "04/04/2021",
                },
                {
                    title: "totam rem aperiam",
                    category: "Tutorial",
                    date: "04/04/2021",
                },
                {
                    title: "doloremque laudantium",
                    category: "Javascript News",
                    date: "04/04/2021",
                },
                {
                    title: "sit voluptatem accusantium",
                    category: "Tutorial",
                    date: "04/04/2021",
                },
                {
                    title: "omnis iste natus error",
                    category: "Javascript News",
                    date: "04/04/2021",
                },
                {
                    title: "Sed ut perspiciatis unde",
                    category: "Tutorial",
                    date: "04/04/2021",
                },
            ],
            error: error,
        },
        revalidate: 60000,
    };
}

function BlogPage({ posts }) {
    const { dispatch } = useContext(bannerContext);
    useBannerUpdate(dispatch, true);

    console.log(posts);

    const [activePaginationItem, setActovePaginationItem] = useState(0);
    const [activePostList, setActivePostList] = useState(posts);
    const [postsToRender, setPostsToRender] = useState(
        activePostList.slice(0, 4)
    );

    return (
        <React.Fragment>
            <Head>
                <title>GadJS - Javascript Blog</title>
                <meta
                    name="description"
                    content="In this blog you can find a lot of useful information 
                    about the Javascript world, includiing news and tutorial of React, 
                    Anglular and Vue and other amazing frameworks and libraries"
                />
            </Head>
            <Banner
                title="Blog"
                subtitle="Find amazing news on the Javascript world"
            />
            <section className="blog-area blog-section ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="row">
                                {postsToRender.map((post) => (
                                    <BlogCard
                                        key={post.title}
                                        title={posts.title}
                                        date={posts.date}
                                        category={posts.category}
                                    />
                                ))}

                                <div className="col-lg-12 col-md-12">
                                    <Pagination
                                        activePaginationItem={
                                            activePaginationItem
                                        }
                                        setActovePaginationItem={
                                            setActovePaginationItem
                                        }
                                        resultsNumber={activePostList.length}
                                        itemsPerPage={4}
                                    />
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

BlogPage.defaultProps = {};

export default BlogPage;
