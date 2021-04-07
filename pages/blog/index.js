import { useContext, useState, useRef, useEffect } from "react";
import Head from "next/head";

import { bannerContext } from "../../context";
import useBannerUpdate from "../../hooks/useBannerUpdate";
import firebaseLooper from "../../utils/firebaseLooper";

import Banner from "../../components/Banner";
import BlogCard from "../../components/BlogCard";
import FilterPosts from "../../components/FilterPosts";
import Pagination from "../../components/Pagination";
import RecentPosts from "../../components/RecentPosts";

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

    const containerRef = useRef(null);

    const [isLoading, setIsLoading] = useState(false);
    const [pageLoad, setPageLoad] = useState(false);

    const [activePaginationItem, setActivePaginationItem] = useState(0);
    const [activePostList, setActivePostList] = useState(posts);
    const [postsToRender, setPostsToRender] = useState(
        activePostList.slice(0, 4)
    );

    const postsCategories = posts.map((post) => post.category);
    const categories = postsCategories.filter(
        (item, i, ar) => ar.indexOf(item) === i
    );
    const [selectedCategory, setSelectedCategory] = useState("All Categories");

    useEffect(() => {
        const isCategoryDefined = selectedCategory !== "All Categories";
        const updatedActivePostList = isCategoryDefined
            ? posts.filter((post) => {
                  if (post.category === selectedCategory) {
                      return post;
                  }
              })
            : posts;
        setActivePostList(updatedActivePostList);
        setActivePaginationItem(0);
    }, [selectedCategory]);

    const getEffectivePagination = (pagination) => {
        if (pagination === 0) return 0;
        else return pagination * 6;
    };

    useEffect(() => {
        const effectivePagination = getEffectivePagination(
            activePaginationItem
        );
        if (pageLoad) setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setPostsToRender(
                activePostList.slice(
                    effectivePagination,
                    effectivePagination + 6
                )
            );
            if (pageLoad) {
                containerRef.current.scrollIntoView({
                    behavior: "smooth",
                });
            }
            if (!pageLoad) setPageLoad(true);
        }, 600);
    }, [activePostList, activePaginationItem]);

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
                title="The Blog"
                subtitle="Find amazing news on the Javascript world"
            />
            <section className="blog-area blog-section ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div
                                className="row"
                                ref={containerRef}
                                style={{ scrollMargin: "130px" }}
                            >
                                {postsToRender[0] && (
                                    <BlogCard
                                        key={postsToRender[0].title}
                                        title={postsToRender[0].title}
                                        date={postsToRender[0].date}
                                        category={postsToRender[0].category}
                                        loading={isLoading}
                                    />
                                )}
                                {postsToRender[1] && (
                                    <BlogCard
                                        key={postsToRender[1].title}
                                        title={postsToRender[1].title}
                                        date={postsToRender[1].date}
                                        category={postsToRender[1].category}
                                        loading={isLoading}
                                    />
                                )}
                                {postsToRender[2] && (
                                    <BlogCard
                                        key={postsToRender[2].title}
                                        title={postsToRender[2].title}
                                        date={postsToRender[2].date}
                                        category={postsToRender[2].category}
                                        loading={isLoading}
                                    />
                                )}
                                {postsToRender[3] && (
                                    <BlogCard
                                        key={postsToRender[3].title}
                                        title={postsToRender[3].title}
                                        date={postsToRender[3].date}
                                        category={postsToRender[3].category}
                                        loading={isLoading}
                                    />
                                )}
                                {postsToRender[4] && (
                                    <BlogCard
                                        key={postsToRender[4].title}
                                        title={postsToRender[4].title}
                                        date={postsToRender[4].date}
                                        category={postsToRender[4].category}
                                        loading={isLoading}
                                    />
                                )}
                                {postsToRender[5] && (
                                    <BlogCard
                                        key={postsToRender[5].title}
                                        title={postsToRender[5].title}
                                        date={postsToRender[5].date}
                                        category={postsToRender[5].category}
                                        loading={isLoading}
                                    />
                                )}

                                <div className="col-lg-12 col-md-12">
                                    <Pagination
                                        activePaginationItem={
                                            activePaginationItem
                                        }
                                        setActivePaginationItem={
                                            setActivePaginationItem
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

                                <RecentPosts recentPosts={posts.slice(0, 3)} />

                                <FilterPosts
                                    categories={categories}
                                    selectedCategory={selectedCategory}
                                    setSelectedCategory={setSelectedCategory}
                                />
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
