import Navbar from '../../components/Layouts/Navbar';
import Footer from '../../components/Layouts/Footer';
import Banner from '../../components/Banner';
import ShopVTwo from '../../components/Shop/ShopVTwo';

const Shop = () => {
    return (
        <>
            <Navbar />
            <Banner title="Welcome to our Shop" subtitle="Get yourself or a loved one some awesomeness" />
            <ShopVTwo />
            <Footer />
        </>
    );
}

export default Shop;