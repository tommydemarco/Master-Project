import Navbar from "../../components/Layouts/Navbar";
import Footer from "../../components/Layouts/Footer";
import Banner from "../../components/Banner";
import BlogContent from "../../components/Blog/Blog";

const Blog = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Banner
                title="Blog"
                subtitle="Browse through our latest posts to find cool Javascript news"
            />
            <BlogContent />
            <Footer />
        </React.Fragment>
    );
};

export default Blog;
