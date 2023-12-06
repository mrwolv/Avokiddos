import Navbar from '../components/Navbar/Navbar'
import ImageSlider from '../components/Slider/ImageSlider'
import HeadlineSecton from '../components/HeadlineSecton'
import BoxContainer from '../components/BoxContainer'
import ShoppingCards from '../components/Shopping/ShoppingCards'
import AboutUs from '../components/AboutUs'
import Testimonials from '../components/Testimonial/Testimonials'
import NewsLater from '../components/NewsLater'
import Footer from '../components/Footer'
import Header from '../components/Navbar/Header'

const AppLayout = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <ImageSlider />
            <HeadlineSecton />
            <BoxContainer />
            <ShoppingCards />
            <AboutUs />
            <Testimonials />
            <ShoppingCards />;
            <NewsLater />
            <Footer />
        </div>
    )
}

export default AppLayout
